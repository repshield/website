# RepShield Frontend AI Copilot System Instructions

This file serves as the system ruleset and contextual design boundary for the `repshield.live` static Next.js frontend application repository.

---

## 🏗️ 1. Core Architectural Constraints (Static UI Only)

You must adhere to these absolute static frontend constraints. Do not suggest or write server-dependent Node.js utility code:

1.  **Static Page Export Configuration:** This project uses a flat client-side architecture compiled using `output: 'export'`.
    *   **NEVER** suggest or implement server-side lifecycle blocks (`getServerSideProps`, `getStaticProps`, or `getServerSideComponent` logic).
    *   **NEVER** create Next.js API Routes (`app/api/route.ts`).
2.  **State Management & Auth Routing:** 
    *   User authentication states and session JWT management must rely entirely on client-side routing, browser cookies, or `localStorage` parsing.
    *   All external database integrations must route asynchronously via standard client-side `fetch` hooks or `axios` clients pointing directly to our external API Gateway URL (`process.env.NEXT_PUBLIC_API_URL`).

---

## 🎨 2. Frontend Theme & Tailwind Rules ("Digital Twilight")

When writing UI layouts, dashboard views, layout blocks, or interactive buttons, map custom styling elements directly to these strict semantic design system tokens. Do not introduce vanilla hex metrics or generic Tailwind variants:

### Structural Surfaces
*   Canvas Background: `bg-canvas` (`#090D16`)
*   Component Container Surface: `bg-surface` (`#131B2E`)
*   Hover/Active Selections: `bg-surface-elevated` (`#1E293B`)
*   Grid Line Partitions: `bg-surface-overlay` (`#334155`)

### Semantic Colors
*   AI Ingestion Focus: `text-brand-violet` / `bg-brand-violet` (`#8B5CF6`)
*   Affirmative Approval Pathways: `text-functional-teal` / `bg-functional-teal` (`#06B6D4`)
*   High-Priority Escalation Alert: `text-functional-crimson` / `bg-functional-crimson` (`#EF4444`)

### Typography System
*   Primary Reading Nodes (95% White): `text-text-primary` (`#F8FAFC`)
*   Descriptive Secondary Subtexts: `text-text-secondary` (`#94A3B8`)
*   Timestamps / Meta Sub-Labels: `text-text-muted` (`#64748B`)

### UI Container Assembly Pattern
Every standard list row, dashboard grid asset, or component card must follow this exact layout class structure:
```html
<div class="bg-surface rounded-xl border border-white/[0.05] shadow-glass p-6">
  <!-- Interactive Frontend Content Elements -->
</div>
```

## 🔒 3. Client Interaction & Header Handling

* **API Token Injection:** Ensure that all data-fetching hooks automatically pull the user's secure token from `localStorage` and inject it cleanly as a bearer string inside the outward network header context:
`Authorization: Bearer <token>`
* **Next.js Image Handler:** Because this app runs statically on GitHub Pages, native automated image optimizations are unavailable. Always enforce standard unoptimized tags or configure the layout wrapper parameters accordingly:
```javascript
<img src="/logo.svg" alt="RepShield Logo" className="..." />
```
