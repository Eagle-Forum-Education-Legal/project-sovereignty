# AI Engine Specification - Project SOVEREIGNTY

**Status:** TBD (Status Quo PSAI) | **Version:** 2.0

## 1. Overview
The AI Engine is the core intelligence of the SOVEREIGNTY ecosystem. While specific model selection is TBD (excluding Gemini 2.0/1.5), the engine's architecture focuses on advanced Retrieval-Augmented Generation (RAG) and deep personalization.

## 2. Advanced RAG Orchestration
- **Retrieval:** Multi-step retrieval process querying both the primary *Index* and auxiliary 3rd party source databases.
- **User Context Integration:** The RAG pipeline must tie into the User's profile, pulling data from the **Donor DB** and **CRM (Rock Ridge)** to personalize responses.
- **Account Linking:** Automated logic to connect PSAI interactions with Donor and CRM accounts to provide a seamless, unified user identity.

## 3. Auxiliary Knowledge Base
- **3rd Party Sources:** A dedicated backend vector database (Qdrant) containing third-party research and sources not published on the public site but accessible by the AI for enhanced reasoning and context.

## 4. Model Strategy
- **Status:** TBD.
- **Constraint:** Will NOT use Gemini 2.0 or Gemini 1.5. The system must remain model-agnostic to allow for the best-in-class selection once the technical requirements are finalized.

## 5. Interaction (The Oracle)
- **Voice & Tone:** Maintains the authoritative Phyllis Schlafly perspective based on archival materials.
- **Site-Wide Semantic Search:** The AI Engine powers a semantic search interface that works across the entire website, not just the chat interface.
