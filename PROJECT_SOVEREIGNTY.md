# Project SOVEREIGNTY: The Master Technical Specification

**Version:** 2.0 (Deep Dive)
**Status:** Active Execution
**Owner:** Monzo/Gemini (EFEL Engineering)

---

##  Executive Summary & "Manresa" Rebuttal
**The Goal:** Build a proprietary, sovereign digital ecosystem that outperforms the $225k+ Manresa proposal in every metric (speed, intelligence, cost, data ownership) by leveraging EFEL's existing 85% complete backend infrastructure.

### Validation: Roger Schlafly's Analysis
Roger Schlafly's review of the Manresa proposal (Jan 23, 2026) independently confirms our strategy. He characterized the Manresa deal as:
*   **"Vendor Capture":** "You do not own Growth Engine... it is about renting their platform indefinitely."
*   **Overpriced:** "$12,700/month is extremely high... commodity pricing."
*   **Oversold AI:** "No performance benchmarks... much of this can be replicated with modern tools."

**Project SOVEREIGNTY executes Roger's "Option B" (Lean Tech Stack) but at an even lower cost profile ($0 build / ~$100 mo) due to existing internal assets.**

| Metric | Manresa Proposal | Project SOVEREIGNTY |
| :--- | :--- | :--- |
| **Cost (Year 1)** | **$227,400** | **~$1,200** (Cloud costs only) |
| **Data Ownership** | "Client Content" (Vendor Lock-in Risk) | **100% Sovereign** (Your AWS, Your Code) |
| **AI Intelligence** | "Proprietary Growth Engine" | **Open/Auditable** (PSAI + The-Index) |
| **Legacy Archives** | "Legacy Archiving" (TBD) | **The Index** (Metadata Discovery for Physical & Digital) |

---

##  Volume 1: The Sovereign Stack Architecture

We utilize a **Hub-and-Spoke** architecture centered on a Unified API Gateway.

### 1.1 The Hub: Unified API Gateway
*   **Tech:** Python (FastAPI) + Pydantic.
*   **Role:** The single source of truth that orchestrates data between `Donor-App`, `Rock Ridge`, and `The-Index`.
*   **Key Endpoints:**
    *   `GET /identity/resolve?email=...` -> Returns consolidated User Object (Donor status + CRM tags).
    *   `POST /action/submit` -> Writes to Rock Ridge (Tag) + Donor DB (if donation).
    *   `GET /content/recommend?context=...` -> Returns AI-selected articles/actions.

### 1.2 The Spokes (Data Sources)
*   **The Index (Discovery Layer):** Postgres + `pgvector`. A metadata index referring to physical archives, digitized PDFs, and articles. 
    *   *Note:* The Index does **not** host raw content; it points to it. It includes references to vast physical archives not yet digitized.
    *   *Upgrade:* Create a unified schema that maps physical locations, NAS file paths, and web URLs.
*   **Donor App (Transactions):** Postgres (`donor-db-v1`).
    *   *Upgrade:* Add `web_attribution` table to track which articles drove donations.
*   **Rock Ridge (CRM):** GoHighLevel API.
    *   *Upgrade:* Two-way sync agent (runs every 5m) to ensure `Donor-App` status is reflected in CRM tags (e.g., "VIP_Donor").

### 1.3 Infrastructure (AWS & Local)
*   **Compute:** EC2 (`t3.medium`) running Docker Compose for Backend/API.
*   **Frontend:** Vercel Pro (for global Edge caching) OR AWS Amplify.
*   **Storage:** 
    *   **S3:** Public-facing media and web assets.
    *   **Synology NAS:** The "Sovereign Vault." Contains all existing PDF scans (from the archives site) and "droves" of unpublished archival material.

---

##  Volume 2: The Frontend Experience (`phyllisschlafly.com`)

**Design Philosophy:** "The New York Times meets The Federalist." Serious, authoritative, journalistic.

### 2.1 Tech Stack
*   **Framework:** Next.js 14 (App Router).
*   **Styling:** Tailwind CSS + `shadcn/ui` (Radix Primitives).
*   **State:** React Query (server state) + Zustand (client state).
*   **Motion:** Framer Motion (subtle, high-end transitions).

### 2.2 Key Page Specs
*   **The Homepage ("The Daily Brief"):**
    *   *Hero:* Featured "Cover Story" with full-bleed typographic overlay.
    *   *The Wire:* Chronological feed of latest columns/alerts.
    *   *The Vault:* "On This Day" widget pulling from *The Index*.
*   **The Article Page ("The Deep Read"):**
    *   *Layout:* Single column, optimal 65ch width, serif typography (*Merriweather*).
    *   *Sidebar:* "Context Engine" AI-suggested related archives.
    *   *Inline Action:* "Sign Petition" widgets injected *between paragraphs*.
*   **The Archive Viewer (Consolidated):**
    *   *Interface:* High-performance PDF viewer for scans (replacing `archives.phyllisschlafly.com`).
    *   *Source:* Files served from Sovereign infrastructure (S3/NAS), eliminating 3rd party vendor dependencies.
*   **Video Hub:** Integrated YouTube embeds from the Phyllis Schlafly YouTube channel, categorized and searchable.

### 2.3 The "One Site" Consolidation
We are merging three distinct silos into one authoritative domain:
1.  **Main Site (`phyllisschlafly.com`):** Primarily articles and some audio.
2.  **Archives Site (`archives.phyllisschlafly.com`):** Primarily PDF scans (to be deprecated).
3.  **The Vault (NAS):** All existing PDF scans + massive unpublished backlog (Phase 2 digitization).

---

##  Volume 3: The "Sovereignty Engine" (AI & Intelligence)

We replace their "Growth Engine" with a transparent, highly capable pipeline.

### 3.1 Content Intelligence (PSAI Integration)
*   **Trigger:** New article published/imported.
*   **Process:**
    1.  **Extraction:** LLM extracts Entities (People, Bills, Court Cases) and Sentiment.
    2.  **Tagging:** Auto-assigns categories from the *Index* taxonomy.
    3.  **Vectorization:** Generates embeddings for semantic search.
*   **Output:** Rich metadata stored in `The-Index` DB.

### 3.2 Dynamic Logic ("Next Best Action")
*   **The Problem:** Showing generic "Donate" buttons is wasteful.
*   **The Solution:** Rule-based injection engine.
    *   *Rule 1:* IF `User.is_donor == False` AND `Article.tags contains "Education"`, SHOW "Stop Fed Ed Petition (Email Capture)".
    *   *Rule 2:* IF `User.is_donor == True`, SHOW "Support the Legal Defense Fund (One-Click Donate)".

### 3.3 Agentic SEO
*   **The Problem:** Google is becoming an AI answer engine.
*   **The Solution:** An automated agent that optimizes content for *machines*.
    *   *Action:* Generates structured `JSON-LD` schemas (`NewsArticle`, `ClaimReview`, `FAQPage`) for every page.
    *   *Result:* Google's AI "Snapshot" cites us as the authority.

---

##  Volume 4: The C4 Advocacy Platform

Instead of a separate $15k site, we build this as a high-performance module `/action`.

### 4.1 Legislative Tracker
*   **Data Source:** `EFEL-AI-Tools` scraper monitoring `congress.gov` for specific bill numbers.
*   **Display:** "Bill Status" cards embedded in articles (e.g., "HR 1234: In Committee - Take Action Now").

### 4.2 The "One-Click" Action Center
*   **Function:** Users enter Zip Code -> System finds Reps -> Pre-fills Email/Tweet.
*   **Backend:** Submits data to `Rock Ridge` to trigger "Advocacy Sequence" workflows.
*   **Gamification:** "You are 1 of 500 patriots in your district to sign."

---

## Volume 5: Implementation & Migration

### 5.0 Development Sandbox (NEW)
A dedicated development instance has been provisioned for the Phase 1 Prototype Sprint.
*   **DNS:** `ec2-3-144-231-148.us-east-2.compute.amazonaws.com`
*   **Key:** `psai-dev-keypair` (Found in PSAI/psai-dev-keypair.pem)
*   **Role:** Sandbox for Unified API and Next.js frontend prototyping.

### 5.1 The "Great Consolidation" Migration Plan

*   **Audit:** Use `wordpress_helper.py` to map all 35k URLs from the main site.
*   **Archives Audit:** Map all PDFs on `archives.phyllisschlafly.com` to their physical counterparts on the NAS drive.
*   **ETL Script:**
    *   **WP Content:** Download, cleanse, re-hydrate with PSAI, and index.
    *   **PDF Archives:** Re-host PDF scans from NAS to S3/Cloudfront.
    *   **Video:** Catalog Phyllis Schlafly YouTube channel for embedding.
*   **Redirect Map:** Generate comprehensive 301 redirects for both the main site and the old archives subdomain.

### 5.2 Phase 1: Prototype Sprint (Next 48 Hours)
*   **Objective:** Prove the visual and technical superiority of this approach.
*   **Deliverables:**
    1.  **"The Times" Prototype:** A Next.js homepage with the target "Journalistic" aesthetic.
    2.  **"The Oracle" Demo:** A working chat interface using `The-Index` data.
    3.  **Unified API Stub:** A simple FastAPI server connecting Donor DB + Rock Ridge.

### 5.3 Phase 2: Core Build (Weeks 2-4)
*   Build the Next.js component library.
*   Implement the Unified API logic.
*   Run the initial WP content import.

### 5.4 Phase 3: Launch (Month 2)
*   Internal Beta.
*   DNS Cutover.
*   Decommission old WP hosting ($$$ savings).

---

##  Volume 6: Granular Cost Analysis

| Component | Manresa (Vendor) | Sovereignty (Internal) | Savings |
| :--- | :--- | :--- | :--- |
| **Site Build** | $75,000 | $0 (Already Staffed) | $75,000 |
| **"Growth Engine"** | $5,000 / mo | $0 (Open Source) | $60,000 / yr |
| **Consulting** | $7,500 / mo | $0 (Self-Managed) | $90,000 / yr |
| **Hosting** | $200 / mo | ~$50 / mo (AWS) | $1,800 / yr |
| **Database** | Included | ~$100 / mo (RDS) | -$1,200 / yr |
| **LLM APIs** | Included | ~$50 / mo | -$600 / yr |
| **TOTAL (Year 1)** | **$227,400** | **~$2,400** | **~$225,000** |

**Conclusion:** Project SOVEREIGNTY is not just a technical upgrade; it is a fiduciary duty.
