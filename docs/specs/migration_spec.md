# Migration & Consolidation Specification - Project SOVEREIGNTY

**Status:** Draft | **Version:** 1.0

## 1. Objective
Project SOVEREIGNTY aims to consolidate three distinct silos into a single, authoritative ecosystem:
1.  **Main Site (`phyllisschlafly.com`):** Articles and blog posts.
2.  **Archives Site (`archives.phyllisschlafly.com`):** Digital PDF scans.
3.  **The Vault (NAS):** All scans and unpublished material.

## 2. WordPress Audit & Content Migration

### 2.1 Content Scoping
- **Legacy URL Mapping:** Use `wordpress_helper.py` to audit and map all ~35k legacy URLs.
- **Data Cleanup:** Cleanse HTML, normalize character encoding, and extract metadata (Author, Date, Tags).
- **Import Strategy:** Import into *The Index* (PostgreSQL) as `Article` types.

### 2.2 Re-Hydration with PSAI
- All imported content is passed through the *Sovereignty Engine* (PSAI) to extract entities, generate summaries, and assign new taxonomy tags.
- Embeddings are generated for all migrated content to enable semantic search.

## 3. PDF/Archives Migration (The "Great Re-Hosting")

### 3.1 Mapping the Archives
- Map all PDFs currently on `archives.phyllisschlafly.com` to their physical counterparts on the NAS drive and their new entries in *The Index*.
- Map the physical archives backlog (Phase 2 digitization) into *The Index* with `location_type = 'Physical'`.

### 3.2 Asset Storage Transition
- **Public PDFs:** Re-host public-facing PDF scans from the NAS to S3/CloudFront for global, high-speed access.
- **Unpublished Material:** Keep unpublished archival scans on the NAS until they are processed and cleared for public release.

## 4. Redirect Strategy (SEO Preservation)

### 4.1 301 Redirect Mapping
- Generate a comprehensive map of all old URLs (main site and archives subdomain) to their new equivalents on `phyllisschlafly.com`.
- **Main Site:** `phyllisschlafly.com/old-slug` -> `phyllisschlafly.com/article/new-slug`.
- **Archives Subdomain:** `archives.phyllisschlafly.com/doc-123` -> `phyllisschlafly.com/archive/doc-123`.

### 4.2 Implementation
- Use Edge-side redirects (Vercel/Amplify) or a dedicated redirect map in the Next.js `middleware.ts` for maximum performance and SEO preservation.

## 5. Multimedia Cataloging

### 5.1 YouTube Integration
- Catalog all videos from the Phyllis Schlafly YouTube channel.
- Store video metadata and transcripts (where available) in *The Index*.
- Embed videos directly into the new site's Article and Video Hub pages.

## 6. Phase-by-Phase Rollout

### 6.1 Phase 1 (Internal Beta)
- Prototype site launch on a development subdomain.
- Core content (latest 100 articles) and sample archives available for testing.

### 6.2 Phase 2 (Content Parity)
- Complete import of all ~35k legacy articles.
- Integration of the full digital archive metadata.

### 6.3 Phase 3 (DNS Cutover)
- Final sync of content and archives.
- Global 301 redirect activation.
- Decommissioning of old WordPress hosting.
