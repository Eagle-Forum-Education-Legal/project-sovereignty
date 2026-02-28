# Infrastructure & Deployment Specification - Project SOVEREIGNTY

**Status:** Draft | **Version:** 1.0

## 1. Overview
Project SOVEREIGNTY's infrastructure is designed for performance, security, and data sovereignty. It leverages AWS for scale while maintaining the "Sovereign Vault" on internal hardware (NAS).

## 2. Cloud Architecture (AWS)

### 2.1 Compute
- **Backend API:** EC2 `t3.medium` instances running Docker Compose.
- **Auto-Scaling:** Not required for Phase 1, but planned for Phase 2.
- **Frontend:** Vercel Pro (primary) or AWS Amplify (fallback) for Edge-side performance and global CDN.

### 2.2 Databases
- **Relational DB (RDS):** PostgreSQL 16+ for *The Index*, Identity, and Transactions.
- **Vector Search:** `pgvector` extension in RDS.
- **Caching/Rate Limiting:** Redis (AWS ElastiCache or self-hosted in Docker).

### 2.3 Storage
- **Public Assets (S3):** Images, public PDFs, and static web assets.
- **Private Vault (NAS):** Synology NAS for raw archival scans and unpublished material.
- **Backup:** S3 Intelligent-Tiering for archival backups.

### 2.4 Identity & Security
- **Auth:** AWS Cognito (User Pools + Identity Pools).
- **SSL:** AWS Certificate Manager (ACM).
- **DNS:** Route 53 or Cloudflare (for Edge-side WAF).
- **Secrets:** AWS Secrets Manager or `.env` files (for local/dev).

## 3. The Sovereign Vault (NAS Integration)
The Synology NAS serves as the "Sovereign Vault," containing all existing PDF scans and massive unpublished archival material.
- **Integration Layer:** A secure gateway on the NAS that exposes metadata to *The Index*.
- **Syncing:** Automated jobs to sync public-facing assets to S3.
- **Local Access:** Dedicated internal network for Phase 2 digitization.

## 4. Deployment Pipeline

### 4.1 Backend
1.  **Local Dev:** Docker Compose with hot-reloading.
2.  **Staging:** Deploy to the provisioned EC2 Development Sandbox.
3.  **Production:** Blue/Green deployment to production EC2 instances.

### 4.2 Frontend
- **Git-to-Deploy:** Automated deployments from GitHub to Vercel/Amplify on every push.
- **Environment Separation:** Separate environments for `development`, `staging`, and `production`.

## 5. Monitoring & Observability
- **Logging:** Structured JSON logs sent to CloudWatch Logs.
- **Metrics:** CloudWatch Dashboards for CPU/Memory, API Latency, and Error Rates.
- **Alerting:** SNS alerts for critical system failures (e.g., RDS downtime).

## 6. Cost Management
Project SOVEREIGNTY aims for a ~$100/mo operating cost.
- **Lean Resources:** Utilize `t3` instances and small RDS instances.
- **Edge Caching:** Maximize CDN usage to reduce origin traffic and compute costs.
- **Cold Storage:** Use S3 Glacier for rarely-accessed archival backups.
