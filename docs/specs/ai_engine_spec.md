# Sovereignty Engine (AI & PSAI) Specification - Project SOVEREIGNTY

**Status:** Draft | **Version:** 1.0

## 1. Overview
The "Sovereignty Engine" is the AI core that replaces the vendor's proposed "Growth Engine." It provides content intelligence, dynamic rules for user engagement, and automated SEO optimization.

## 2. Technical Stack
- **Primary LLM:** Google Gemini 2.0 Flash (for speed/cost) and Gemini 1.5 Pro (for deep reasoning).
- **Orchestration:** LangGraph (Stateful Agents).
- **Embeddings:** Google Gemini Embedding API.
- **Rules Engine:** Python-based dynamic logic.

## 3. Core Modules

### 3.1 Content Intelligence Pipeline (PSAI)
Every piece of content ingested into *The Index* must pass through this pipeline:
1.  **Entity Extraction:** Extract people, bills, court cases, and events using Gemini.
2.  **Sentiment Analysis:** Determine the tone and perspective of the content.
3.  **Auto-Tagging:** Map content to the canonical taxonomy (e.g., "ERA", "Judicial Activism").
4.  **Vectorization:** Generate and store semantic embeddings in `pgvector`.
5.  **Summary Generation:** Create high-quality, SEO-optimized metadata descriptions.

### 3.2 Dynamic Action Logic ("Next Best Action")
The Engine dynamically determines which engagement widgets to show a user:
- **Rule-based injection:** IF `User.is_donor == False` AND `Article.tags contains "Education"`, SHOW "Petition: Stop Fed Ed."
- **One-click donation:** IF `User.is_donor == True`, SHOW "Support the Legal Defense Fund."
- **Contextual cross-links:** Link to relevant archival documents based on semantic similarity.

### 3.3 Agentic SEO
Automated agents that optimize the site for both humans and AI answer engines:
- **JSON-LD Schema Generation:** Automatically generate `NewsArticle`, `ClaimReview`, and `FAQPage` schemas for every page.
- **Sitemap Optimization:** Prioritize the most relevant and authoritative content for search engines.
- **Internal Linking:** AI-suggested internal links to improve site authority and navigation.

## 4. Search & Interaction (The Oracle)
A high-performance chat interface for interacting with Phyllis Schlafly's archives:
- **Retrieval-Augmented Generation (RAG):** Multi-step LangGraph pipeline (Query Refine -> Search -> Generate -> Critique).
- **Persona Preservation:** The AI maintains the "Phyllis Schlafly" voice for responses based on her archival materials.
- **Source Citations:** Every response must link back to its sources in *The Index* (e.g., "Source: Phyllis Schlafly Report, Nov 1972").

## 5. Security & Sovereignty
- **Private Data Stays Private:** All processing happens within EFEL-owned infrastructure (AWS).
- **Data Sovereignty:** Embeddings and metadata are stored in EFEL's databases, not with a 3rd party vendor.
- **Transparent Logic:** All AI rules and prompts are auditable and under EFEL control.
