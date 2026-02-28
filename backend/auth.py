"""
JWT Token verification for AWS Cognito
"""
import jwt
import requests
from jwt import PyJWKClient
from typing import Dict, Any, Optional
import logging

logger = logging.getLogger(__name__)

def verify_token(issuer: str, audience: str, token: str) -> Optional[Dict[str, Any]]:
    """
    Verify a JWT token from AWS Cognito
    
    Args:
        issuer: The Cognito issuer URL
        audience: The Cognito client ID
        token: The JWT token to verify
        
    Returns:
        Decoded token payload if valid, None if invalid
    """
    try:
        if not issuer or not audience or not token:
            logger.warning("Missing required parameters for token verification")
            return None
            
        # Get the JWKS URL
        jwks_url = f"{issuer}/.well-known/jwks.json"
        
        # Create JWK client
        jwks_client = PyJWKClient(jwks_url)
        
        # Get the signing key
        signing_key = jwks_client.get_signing_key_from_jwt(token)
        
        # Decode and verify the token
        payload = jwt.decode(
            token,
            signing_key.key,
            algorithms=["RS256"],
            audience=audience,
            issuer=issuer,
            options={"verify_signature": True, "verify_exp": True}
        )
        
        return payload
        
    except jwt.ExpiredSignatureError:
        logger.warning("Token has expired")
        return None
    except jwt.InvalidTokenError as e:
        logger.warning(f"Invalid token: {e}")
        return None
    except Exception as e:
        logger.error(f"Unexpected error verifying token: {e}")
        return None



