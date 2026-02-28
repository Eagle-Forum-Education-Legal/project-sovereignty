# Backend (API & Data) Specification - Project SOVEREIGNTY

**Status:** Draft | **Version:** 1.0

## 1. Overview
The Unified API Gateway serves as the "Hub" for the SOVEREIGNTY ecosystem. It orchestrates data between the Donor App, Rock Ridge CRM, and The Index (discovery layer).

## 2. Tech Stack
- **Framework:** FastAPI (Python 3.12+)
- **Validation:** Pydantic v2
- **Orchestration:** LangGraph (Stateful RAG)
- **Vector DB:** Qdrant
- **Primary DB:** PostgreSQL (via SQLAlchemy/Tortoise ORM)
- **Authentication:** AWS Cognito (JWT-based)
- **Caching/Rate Limiting:** Redis
- **Cloud Integration:** AWS SDK (boto3)

## 3. Migration Plan (Flask -> FastAPI)
The current Flask implementation (`backend/main.py`) must be refactored to FastAPI to leverage:
- Asynchronous request handling (`async/await`).
- Automatic OpenAPI/Swagger documentation.
- Superior performance and type safety.

### 3.1 Key Refactor Tasks
1.  **Dependency Injection:** Replace Flask `g` and global state with FastAPI's `Depends`.
2.  **Asynchronous Clients:** Update Qdrant, Redis, and S3 clients to use their async variants.
3.  **Auth Middleware:** Implement FastAPI middleware for Cognito JWT verification.
4.  **Error Handling:** Standardize JSON error responses using FastAPI exception handlers.

## 4. API Endpoints

### 4.1 Identity & CRM
- `GET /identity/resolve`: Consolidated user object (Donor + CRM tags).
- `POST /identity/sync`: Trigger manual sync between Donor App and Rock Ridge.

### 4.2 The Oracle (AI Search)
- `POST /api/query`: Execute the LangGraph RAG pipeline.
- `GET /api/collections`: List available vector search collections.
- `POST /api/feedback`: Submit user feedback on AI responses.

### 4.3 Content & Action
- `GET /content/recommend`: Contextual content suggestions.
- `POST /action/submit`: Submit advocacy actions (Petitions, Contact Reps).

### 4.4 Utilities
- `GET /healthz`: Health check.
- `POST /api/download/{format}`: Export conversation (PDF/TXT).

## 5. LangGraph RAG Pipeline
Refine the current `StateGraph` in `main.py`:
1.  **Refine Query:** Optimize user input for semantic search.
2.  **Semantic Search:** Query Qdrant with `all-MiniLM-L6-v2` embeddings.
3.  **Generate Response:** Use Gemini 2.0 Flash for low-latency, high-quality output.
4.  **Critique & Iteration:** Self-correcting loop to ensure context sufficiency.

## 6. Integrations

### 6.1 Rock Ridge (GoHighLevel)
- Implement a worker to sync `Donor-App` status to CRM tags every 5 minutes.
- Use `httpx` for async API calls to GHL.

### 6.2 Donor App
- Direct read access to `donor-db-v1`.
- Track `web_attribution` for conversion tracking.

## 7. Security & Observability
- **Rate Limiting:** IP-based and User-based limits via Redis.
- **Logging:** Structured JSON logs to stdout (CloudWatch) and S3 archival.
- **Secrets Management:** Use AWS Secrets Manager or `.env` (development).
