---
name: Academic Nexus
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#444651'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#3e2400'
  on-tertiary: '#ffffff'
  tertiary-container: '#5c3800'
  on-tertiary-container: '#ef9900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes an authoritative, highly organized, and modern administrative environment tailored for digital libraries, institutional repositories, and university research hubs. It strikes a balance between academic prestige and contemporary SaaS clarity. 

The aesthetic is grounded in **Corporate / Modern Minimalism** with an institutional rigor:
- **Atmosphere:** Deeply trustworthy, intellectual, composed, and distraction-free. 
- **Audience:** Academic librarians, research directors, catalog administrators, and system analysts overseeing dense bibliographic metadata, circulation pipelines, and repository health.
- **Visual Principle:** High-clarity structure. Every border, surface tier, and typographic weight exists to segment complex information without visual noise. Surfaces remain pristine and structured, allowing research metrics and circulation status indicators to lead user attention.

## Colors

The palette leverages scholarly authority through deep blues while utilizing clean, functional accents for actionable insight:

- **Primary (`#1E3A8A`):** Classic Academic Navy. Used for authoritative anchor elements: top navigation indicators, primary CTA buttons, active sidebar links, key charts, and high-level institutional branding.
- **Secondary (`#0D9488`):** Archival Teal. Represents dynamic repository health, digital collection filters, live catalog counters, metadata tags, and successful circulation flows.
- **Tertiary (`#F59E0B`):** Warm Amber. Reserved strictly for contextual system signals: approaching due dates, item hold queues, embargo warnings, metadata audit alerts, and high-priority patron notices.
- **Neutral (`#1E293B`):** Deep Slate. Anchors all primary typography, structural icons, and crisp surface borders. Subdued variants (`#64748B`, `#94A3B8`) provide clear hierarchy for metadata captions and inactive states.
- **Base Surfaces:** Canvas sits on crisp `#F8FAFC`, stepping into pure `#FFFFFF` for data cards, modal sheets, and tabular panels. Subsurface table rows and hover states utilize `#F1F5F9`.

## Typography

The type system blends the contemporary, open architectural letterforms of **Plus Jakarta Sans** for dashboards and headers with the systematic, highly legible tabular performance of **Inter** for dense metadata and administrative records.

- **Headlines & Section Anchors:** `Plus Jakarta Sans` provides a clean, welcoming academic presence across view titles, analytics summary metrics, and modal headers.
- **Body & Data Records:** `Inter` handles bibliographic strings, MARC records, patron contact information, and audit logs. Tabular figures (`tnum`) should be enabled for circulation counts, ISBNs, DOIs, and financial values to ensure vertical column alignment across data tables.
- **Letter Spacing:** Tighter tracking on larger headers prevents sprawl, while small labels and status badges carry slight positive tracking for crisp readability at glance.

## Layout & Spacing

The administrative architecture follows a modular, content-dense dashboard structure built on an 8pt base grid with a fixed collapsible navigation rail and a fluid content canvas.

- **Grid Architecture:** 
  - **Desktop (≥1200px):** Fixed 260px administrative sidebar paired with a 12-column fluid grid. Column gutters use `1.5rem` (`24px`), outer screen padding is anchored at `2rem` (`32px`).
  - **Tablet (768px – 1199px):** Sidebar collapses to a 68px icon-only rail. 8-column layout with `1rem` (`16px`) gutters.
  - **Mobile (<768px):** Off-canvas slide-out navigation. 4-column layout with `0.75rem` (`12px`) gutters and `1rem` outer canvas padding.
- **Density Philosophy:** Academic tooling requires high data efficiency. Spacers `space-xs` and `space-sm` are deployed for metadata stacks, chip padding, and compact table cells. `space-lg` and `space-xl` are reserved for card boundaries and page header separations.

## Elevation & Depth

To maintain academic professionalism and avoid visual fatigue during multi-hour administrative sessions, depth relies primarily on **low-contrast structural outlines** augmented by soft, highly diffused ambient drop shadows.

- **Baseline Surfaces:** Canvas layer at `#F8FAFC`. Card modules, table containers, and panels sit on pure `#FFFFFF` bounded by an explicit structural outline (`1px solid #E2E8F0`).
- **Shadow Scale:**
  - **Resting Cards / Tables:** `0 1px 3px 0 rgba(30, 41, 59, 0.04), 0 1px 2px -1px rgba(30, 41, 59, 0.04)`.
  - **Hoverable Panels / Action Menus:** `0 4px 6px -1px rgba(30, 41, 59, 0.07), 0 2px 4px -2px rgba(30, 41, 59, 0.05)`.
  - **Modals, Flyouts & Slide-overs:** `0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 8px 10px -6px rgba(30, 41, 59, 0.06)` combined with a frosted backdrop overlay (`rgba(15, 23, 42, 0.45)` with `backdrop-filter: blur(4px)`).
- **Interactive Depth:** Elements rise through shadow expansion rather than displacement. Borders shift from `#E2E8F0` to `#CBD5E1` upon hover.

## Shapes

The design system adopts a **Soft (Level 1)** geometric standard. This tight corner radius (`0.25rem` / `4px` baseline, `0.5rem` / `8px` for cards and modals) provides an efficient, crisp, institutional profile that maximizes readable screen real estate and aligns cleanly with multi-column tabular data.

- **Input Fields & Buttons:** `4px` corner radii for neat alignment alongside search icons and select dropdowns.
- **Cards, Panels & Data Containers:** `8px` (`rounded-lg`) corner radii, preserving structural rigidity.
- **Badges, Chips & Avatars:** Fully circular pill shapes (`9999px`) are intentionally reserved solely for status indicators, publication type badges, and user avatars to distinguish metadata tags from actionable interactive rectangles.

## Components

### Buttons & Interactive Controls
- **Primary Action:** Solid `#1E3A8A` background with crisp white text. Hover transitions to `#1E293B` with `0.5rem` internal vertical padding and `1rem` horizontal padding.
- **Secondary Action:** Transparent background with `1px solid #CBD5E1`, text in `#1E293B`. Hover states fill to `#F1F5F9`.
- **Tertiary Accent (Repository Action):** Solid `#0D9488` with white text, utilized for catalog additions, DOI minting, or circulation checkouts.

### Data Tables
- **Container:** Enclosed in a white card with `1px solid #E2E8F0` border and `rounded-lg` corners.
- **Header:** Sticky table head with `#F8FAFC` background, uppercase `label-sm` slate text (`#64748B`), and a bottom border of `1px solid #E2E8F0`.
- **Rows:** Alternating subtle row zebra striping (optional for deep density: `#FFFFFF` and `#F8FAFC`), standard height `44px` for high-density, `56px` for standard. Hover state lights the row in `#F1F5F9`.
- **Numeric & Code Cells:** Formatted with monospaced/tabular figures for ISSN, ISBN, call numbers, and dates.

### Status Indicators & Badges
- **Available / Active:** `#CCFBF1` background with `#0F766E` text (Teal).
- **Due Soon / Reserved:** `#FEF3C7` background with `#B45309` text (Amber).
- **Overdue / Restricted:** `#FEE2E2` background with `#B91C1C` text (Red).
- **Archived / Reference Only:** `#F1F5F9` background with `#475569` text (Slate).
- All badges are rendered using `label-sm` with pill radius and a subtle internal tint outline.

### Search & Query Bars
- Deep search inputs feature left-aligned archival search icons, right-aligned keyboard shortcut indicators (`⌘K`), and an integrated dropdown filter for faceted lookups (e.g., Title, Author, Call Number, DOI).
- Border remains `1px solid #CBD5E1`, focusing to a distinct `2px solid #1E3A8A` ring without layout shift.

### Chart & Metric Widgets
- **KPI Summary Cards:** Contain standard top-border status color bars (2px thick), a large metric figure using `Plus Jakarta Sans`, a percentage trajectory badge, and subtext indicating comparative terms (e.g., "vs. previous semester").
- **Visual Charts:** Bar and spline visualizations use authoritative Navy (`#1E3A8A`) for base volume, Teal (`#0D9488`) for active trends, and subtle grid lines at `#F1F5F9`.

### Admin Navigation Sidebar
- Dark institutional blue (`#0F172A`) or crisp surface white (`#FFFFFF`) with right border `1px solid #E2E8F0`. 
- Active menu states carry a left indicator bar in `#0D9488` (Teal) with `#1E3A8A` soft-fill backgrounds for selected routes. Group headings rely on uppercase `label-xs` in `#94A3B8`.