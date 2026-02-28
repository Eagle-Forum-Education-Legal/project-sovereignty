# Migration & Consolidation Specification - Project SOVEREIGNTY

**Status:** Active | **Version:** 2.0

## 1. Objective
Consolidate all EFEL and archival data into the **Unified Metadata Schema** and **The Index**. This includes migrating digital web content and systematically indexing the **Sovereign Vault (NAS)**.

## 2. NAS Ingestion & Mapping
- **Automated System:** An intelligent pipeline to scan and index the NAS (`current projects/` and `archives/`).
- **Metadata Extraction:** Automated extraction of date, author, and document type.
- **Flagging:** Items requiring human verification are flagged for the **Human Review Pipeline** in the **Staff Backend**.
- **Unified Path Mapping:** Every *Index* entry must include its NAS filepath, web URL, or physical location.

## 3. Systematic Publishing
A case-by-case strategy for making archival materials public:
- **Digitized Content:** Decide whether to publish the original PDF scan, the extracted text, or both.
- **Published Sets:** High-priority items like *The Phyllis Schlafly Report* and columns will be published in their entirety with both PDF and text.
- **Phased Rollout:** Systematically release archival folders once metadata is confirmed via human review.

## 4. Multimedia Hosting Strategy
- **Video:** Host and manage video content on **YouTube**.
- **Audio:** Host and manage audio content on **SoundCloud**.
- **Transcripts:** High-fidelity transcripts for all video and audio content must be generated and made available on the website.
- **Searchable Media:** All transcripts must be vectorized for use in **Phyllis AI** and site-wide semantic search.

## 5. Cleaning "The Mess"
- **Qdrant Audit:** Audit and clean the existing disorganized Qdrant collections.
- **Data Normalization:** Re-map and normalize all vectorized data into the **Unified Metadata Schema**.
- **Vector Refresh:** Re-vectorize content where necessary to ensure high-dimensional consistency.

## 6. Phase-by-Phase Execution
1.  **Phase 1 (Audit & Indexing):** Start the automated indexing of the NAS and map the findings into the *Index*.
2.  **Phase 2 (Human Review):** Deploy the Staff Backend and begin the metadata verification process.
3.  **Phase 3 (Systematic Publishing):** Start publishing archival sets with transcripts and embeddings.
