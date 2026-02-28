# Frontend (Next.js Application) Specification - Project SOVEREIGNTY

**Status:** Draft | **Version:** 1.0

## 1. Design Philosophy: "The Journalistic Modern"
Project SOVEREIGNTY's frontend must evoke the authority of *The New York Times* combined with the clarity of *The Federalist*.

### 1.1 Aesthetic Pillars
- **Typography:** Primary Serif for long-form content (*Merriweather*), Sans-Serif for interface elements (*Inter*).
- **Whitespace:** Generous spacing to facilitate "The Deep Read."
- **Motion:** Subtle, high-end transitions (Framer Motion) for page entries and interaction feedback.
- **Palette:** Classic navy/dark-gray for text, high-contrast white backgrounds, and a signature red/blue for "Action" elements.

## 2. Tech Stack
- **Framework:** Next.js 14+ (App Router).
- **Styling:** Tailwind CSS 4+ with CSS Variables.
- **Component Library:** `shadcn/ui` (Radix UI primitives).
- **State Management:** TanStack Query (Server State) + Zustand (Client State).
- **Animation:** Framer Motion.
- **Form Handling:** React Hook Form + Zod.

## 3. Core Pages & Routes

### 3.1 The Daily Brief (Homepage - `/`)
- **Cover Story:** Large full-bleed hero with typographic overlay.
- **The Wire:** Chronological feed of latest columns.
- **The Vault:** "On This Day" widget pulling archival content via *The Index*.

### 3.2 The Deep Read (Article Page - `/article/[slug]`)
- **Layout:** Optimized single column (65ch) for readability.
- **Context Engine:** Sidebar widget with AI-recommended related archival documents.
- **Inline Action:** Embedded petition/donation widgets strategically placed.

### 3.3 The Oracle (Search/Chat - `/oracle`)
- High-performance chat interface for interacting with Phyllis Schlafly's archives.
- Deep integration with the Backend LangGraph pipeline.

### 3.4 The Action Center (`/action`)
- Legislative tracker: Dynamic bill status cards.
- Advocacy tool: Zip-code based representative lookup and pre-filled email/tweet generation.

## 4. Component Architecture
Building a reusable, high-fidelity library of components:
- `Typography`: `H1`, `H2`, `P`, `Quote`, `Caption`.
- `Card`: `FeatureCard`, `NewsCard`, `BillCard`.
- `Action`: `PetitionButton`, `DonateWidget`, `EmailCapture`.
- `Interactive`: `ArchiveViewer` (PDF/Image scan viewer).

## 5. Performance & SEO
- **Edge Runtime:** Deploy critical paths to the Edge for global performance.
- **Agentic SEO:** Automated `JSON-LD` (Structured Data) generation for `NewsArticle` and `ClaimReview`.
- **Image Optimization:** Next.js `Image` component with priority loading for hero sections.
- **Font Optimization:** Self-hosted Google Fonts to avoid external dependencies.

## 6. Development Workflow
1.  **Phase 1 (Prototype):** Scaffolding and Homepage wireframes.
2.  **Phase 2 (Core):** Article layout and Oracle integration.
3.  **Phase 3 (Action):** Advocacy platform module development.
4.  **Phase 4 (Refinement):** High-end transitions and motion design.
