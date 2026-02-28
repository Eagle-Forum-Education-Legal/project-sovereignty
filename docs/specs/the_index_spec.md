# The Index (Metadata & Vector Search) Specification - Project SOVEREIGNTY

**Status:** Draft | **Version:** 1.0

## 1. Role & Purpose
"The Index" is the central discovery layer of the SOVEREIGNTY ecosystem. It maps every piece of content—from digital articles to physical archival boxes—into a searchable, semantic metadata layer.

## 2. Technical Architecture
- **Vector Search Engine:** PostgreSQL with `pgvector` extension.
- **Auxiliary Search:** Qdrant (for specialized semantic collections as seen in current RAG pipeline).
- **Embedding Model:** `all-MiniLM-L6-v2` (for local inference) or Gemini Embedding API (for high-dimensional accuracy).
- **Relational DB:** PostgreSQL 16+.

## 3. Metadata Schema Design

### 3.1 Content Types
- `Article`: Digital web-first content.
- `PDF Scan`: Digitized versions of physical archives.
- `Physical Archive`: Metadata for boxes, folders, and documents not yet digitized.
- `Multimedia`: YouTube videos, audio tapes, and radio broadcasts.

### 3.2 Unified Schema Fields
- `id`: UUID.
- `title`: Primary display name.
- `description`: Summary or first paragraph.
- `content_body`: Full text (where available for digital articles).
- `location_type`: `S3`, `NAS`, `Physical`.
- `location_path`: URL or physical box number/shelf location.
- `entities`: JSONB (extracted people, places, and events).
- `tags`: Array of taxonomy terms (e.g., "ERA", "Education", "Defense").
- `embedding`: Vector (dimension varies by model).
- `metadata`: JSONB for type-specific attributes (e.g., `publication_year`, `author`, `is_digitized`).

## 4. Ingestion & Enrichment Pipeline

### 4.1 Automated Extraction
1.  **WP Import:** Scrape/import legacy WordPress content into `The Index`.
2.  **PDF Parsing:** OCR and extract text from archives using Amazon Textract or specialized local tools.
3.  **Entity Linking:** Use PSAI (Sovereignty Engine) to extract key entities and link them to existing articles/archival documents.

### 4.2 Semantic Mapping
- Every ingested item is passed through an embedding model to generate its vector representation.
- These vectors are stored in `pgvector` columns for high-speed similarity search.

## 5. Search Features
- **Semantic Search:** "Find articles related to Phyllis's view on national defense in the 1970s."
- **Faceted Filtering:** Filter results by date range, content type, and digitized status.
- **Physical Discovery:** Return the physical location (Box #, Shelf) for items that are not yet available online.

## 6. Maintenance & Growth
- **Phase 1 (Digital):** Migrate existing web content and digitized PDF metadata.
- **Phase 2 (Physical Mapping):** Systematic entry of the physical archive's inventory into `The Index`.
- **Phase 3 (Agentic Indexing):** AI agents that continuously re-tag and link new and existing content.
