# rate_limit.py
import os, json, time
from redis import Redis
from flask import g
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
redis = Redis.from_url(REDIS_URL, decode_responses=True)

# key func: prefer Cognito user sub; else fall back to IP
def user_key():
    user = getattr(g, "user", None)
    if user and "sub" in user:
        return f"user:{user['sub']}"
    return f"ip:{get_remote_address()}"

def make_limiter(app):
    return Limiter(
        app=app,
        key_func=user_key,
        storage_uri=REDIS_URL,
        strategy="fixed-window",  # simple & fast
        default_limits=[],        # we’ll apply per-route
    )

# helper: increment a per-day counter you can show in UI/logs
def incr_daily_counter(sub: str) -> int:
    day = time.strftime("%Y-%m-%d", time.gmtime())
    k = f"quota:{sub}:{day}"
    pipe = redis.pipeline()
    pipe.incr(k)
    pipe.expire(k, 60*60*36)  # TTL ~36h to be safe across TZ
    cnt, _ = pipe.execute()
    return int(cnt)
