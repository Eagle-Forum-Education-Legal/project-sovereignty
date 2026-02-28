# The Index (Metadata & Vector Search) Specification - Project SOVEREIGNTY

**Status:** Active | **Version:** 2.0

## 1. Role & Purpose
"The Index" is the central discovery layer of the SOVEREIGNTY ecosystem. It maps every piece of content—from digital articles to physical archival boxes—into a **Unified Metadata Schema**.

## 2. Technical Architecture
- **Primary Database:** PostgreSQL 16+ with `pgvector` extension.
- **Auxiliary Vector Search:** Qdrant (for 3rd-party source collections).
- **Search Logic:** Hybrid search (Keyword + Semantic).

## 3. Unified Metadata Schema
A standardized format for all EFEL and archival assets:
- `id`: UUID.
- `title`: Primary name.
- `description`: Summary.
- `content_body`: Full text (where available).
- `location_type`: `S3`, `NAS`, `Physical`, `Web`.
- `location_path`: Filepath in NAS, S3 URL, or physical box location.
- `entities`: JSONB (People, Bills, Court Cases).
- `tags`: Canonical taxonomy.
- `embedding`: Vector representation.
- `metadata`: JSONB for type-specific data (Author, Date, Format).

## 4. Intelligent Ingestion System
An automated pipeline to index all files in the NAS (`current projects/` and `archives/` subdirectories).
1.  **Automated Processing:** Extract text, determine metadata (date, type, author), and link to existing entries.
2.  **Mapping:** Create explicit links between *Index* entries and their corresponding NAS filepaths and web/external URLs.
3.  **Human Review Flagging:** The system fills metadata fields automatically where known and flags incomplete or low-confidence entries for **Human Review**.

## 5. Staff Interface (Human Review)
Integrated into the **Staff Backend**:
- **Review Dashboard:** Staff can view flagged entries, edit metadata, and approve them for publishing or indexing.
- **Bulk Mapping:** Interface for systematically linking archival folders to *Index* records.

## 6. Vectorization
Every item in the *Index* (digital or digitized) must be vectorized to enable its use in **Phyllis AI** and the site-wide semantic search.
