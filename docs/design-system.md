---
name: SIM-ASET Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#005a89'
  on-tertiary: '#ffffff'
  tertiary-container: '#0073ae'
  on-tertiary-container: '#e7f2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-kpi:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  body-default:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-compact:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  table-data:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  table-header:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-default:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-compact:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  badge-status:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.01em
  code-mono:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-compact: 0.5rem
  margin: 1.5rem
  margin-compact: 1rem
  space-xxs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

This design system establishes a high-precision, utilitarian aesthetic tailored for enterprise facilities and infrastructure governance. The visual direction balances operational authority with tactical clarity: minimal decorative distraction, robust contrast ratios, crisp layout lines, and information-dense telemetry.

The design movement combines **Corporate Modern** with **Technical Utility**:
- **Operational Clarity:** High-density spatial composition engineered to reduce scrolling and facilitate multi-parameter scanning across thousands of asset records.
- **Architectural Rigor:** Deliberate visual anchoring through structural divider lines, subtle surface differentiation, and strict baseline typography.
- **Action-Oriented Semantics:** Chromatic energy is reserved strictly for operational status indicators, state changes, and key interaction cues. Standard interface scaffolding remains subdued in cool slate neutrals.

## Colors

The palette enforces clear separation between navigation scaffolding, neutral canvas tiers, and functional lifecycle states of infrastructure assets.

### Canvas & Surface Architecture
- **Canvas Base:** `#F8FAFC` (Slate 50) delivers a clean, low-fatigue workspace for high-density sessions.
- **Surface Elevation 01 (Card/Container):** `#FFFFFF` (Pure White).
- **Surface Elevation 02 (Subtle/Nested Tables):** `#F1F5F9` (Slate 100).
- **Surface Elevation 03 (Hover/Selected Rows):** `#E2E8F0` (Slate 200).
- **Structural Borders:** `#CBD5E1` (Slate 300) for high-contrast demarcations; `#E2E8F0` (Slate 200) for standard table cell boundaries.

### Brand & Interactive Roles
- **Primary (`#2563EB`):** High-impact interactive elements, primary action triggers, active tabs, and focused inputs.
- **Secondary (`#0F172A`):** Deep Slate/Navy deployed across persistent application headers, main navigation sidebar panels, and primary text hierarchies.
- **Tertiary (`#0284C7`):** Analytical focal points, active filters, and auxiliary navigation indicators.

### Domain-Specific Asset Condition Semantics
- **Kondisi Baik / Tersedia (Optimal):**
  - Text/Icon: `#047857` (Emerald 700)
  - Surface Tint: `#ECFDF5` (Emerald 50)
  - Stroke: `#A7F3D0` (Emerald 200)
- **Rusak Ringan / Dalam Perawatan (Warning / Inspection Needed):**
  - Text/Icon: `#B45309` (Amber 700)
  - Surface Tint: `#FFFBEB` (Amber 50)
  - Stroke: `#FDE68A` (Amber 200)
- **Rusak Berat / Kritis / Hilang (Critical / decommissioned):**
  - Text/Icon: `#B91C1C` (Rose 700)
  - Surface Tint: `#FEF2F2` (Rose 50)
  - Stroke: `#FECACA` (Rose 200)
- **Proses Mutasi / Audit (Neutral Phase):**
  - Text/Icon: `#334155` (Slate 700)
  - Surface Tint: `#F1F5F9` (Slate 100)
  - Stroke: `#CBD5E1` (Slate 300)

## Typography

Typography prioritizes legibility, tight density, and rapid character discrimination:

- **Primary Pairing:** **Plus Jakarta Sans** powers navigational hierarchy and summary metrics with geometric poise. **Inter** handles data tables, tabular listings, form fields, and metadata ribbons.
- **Tabular Figures:** All numeric figures in data tables, asset code tags (NUP/Barcode), and KPI metrics must explicitly enable `font-feature-settings: "tnum" 1, "cv05" 1` to guarantee rigid vertical alignment across tabular rows.
- **Scale Compactness:** Base enterprise body copy is calibrated to `13px` with a `18px` line height, with secondary table records set to `12px` on `16px`. This accommodates maximum on-screen records without inducing fatigue.
- **Header Formatting:** Column headers (`table-header`) enforce uppercase styling, `600` weight, and `0.04em` letter spacing for fast horizontal scanning across dense grids.

## Layout & Spacing

The layout is built around a persistent, fixed-width engineering dashboard architecture with dynamic content staging.

### Grid & Canvas Structure
- **Global Shell:** Dual-column application frame.
  - Sidebar: Fixed `240px` (expandable to `280px` for deep organizational trees; collapsable to `64px` icon mode for constrained viewports).
  - Main Workspace: Flexibly occupies remaining viewport width with a maximum container containment of `1920px` to maintain visual control.
- **Analytical Grid:** 12-column layout utilizing `gutter: 1rem` (`16px`) for responsive dashboard widgets and KPI card clusters.
- **Dense Table Panes:** Tables span 100% of the active card module using `gutter-compact: 0.5rem` (`8px`) for compact column gaps.

### Form Factor Behavior
- **Desktop (>= 1280px):** Full multi-pane workflow. Full sidebar visibility, 4-column KPI cards, full filter toolbar, and unclipped data tables with standard cell padding (`space-md` horizontal).
- **Tablet (768px - 1279px):** Collapsed icon-only sidebar (`64px`). KPI cards wrap to 2 columns. Table defaults to horizontal scroll with fixed pinning on the primary identifier (`Kode Barang`) and action columns.
- **Mobile (< 768px):** Off-canvas drawer navigation. KPI cards stack in a single column. Non-critical table columns hide behind an expandable row accordion.

## Elevation & Depth

To avoid visual murkiness in high-density data environments, depth is achieved through **low-contrast outlines** paired with subtle, low-blur ambient containment. 

### Surface Tiers
- **Tier 0 (Base Canvas):** `#F8FAFC`. The foundational backdrop for all modular cards.
- **Tier 1 (Surface Cards & Toolbars):** `#FFFFFF` paired with an outline of `1px solid #E2E8F0`. Shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.04)`.
- **Tier 2 (Popovers, Filter Menus, Context Menus):** `#FFFFFF` with a stroke of `1px solid #CBD5E1`. Shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Tier 3 (Modals & Audit Flyout Drawers):** `#FFFFFF` framed by `#94A3B8`. Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`. Backdrops use a semi-opaque dim: `rgba(15, 23, 42, 0.45)`.

### Dividers & Delimiters
Hairline borders (`1px`) are preferred over drop shadows to delineate toolbars, headers, and cell bounds. Drop shadows are strictly reserved for overlays that temporarily usurp user context.

## Shapes

The design system adopts a **Soft (`1`)** roundedness profile. Strict precision elements benefit from slight corner dampening without sacrificing their clinical, industrial demeanor.

### Border Radius Mapping
- **Input Fields, Table Cells, Status Badges:** `0.25rem` (`4px`) via default radius.
- **Buttons, Action Controls, Metric Cards:** `0.375rem` (`6px`) to provide subtle tactile finish.
- **Modals, Flyout Drawers, Main Card Shells:** `0.5rem` (`8px`) for high-level enclosing bounds.
- **Pill Formats:** Reserved exclusively for categorical count badges within tabs (e.g., total item count `(1,420)`).

## Components

### Buttons
- **Primary:** Background `#2563EB`, text `#FFFFFF`, radius `4px`, padding `6px 12px` (compact) or `8px 16px` (regular). Hover: `#1D4ED8`. Active: `#1E40AF`.
- **Secondary / Outline:** Background `#FFFFFF`, border `1px solid #CBD5E1`, text `#1E293B`. Hover: `#F1F5F9`, border `#94A3B8`.
- **Tertiary / Ghost:** No border or fill, text `#475569`. Hover: `#F1F5F9`, text `#0F172A`.
- **Destructive:** Background `#FEF2F2`, border `1px solid #FECACA`, text `#B91C1C`. Hover: `#FEE2E2`.
- **Table Inline Action Buttons:** Icon-only or mini text triggers, `24px` height, subtle hover wash (`#F1F5F9`).

### Data Tables (High Density)
- **Header Row:** Background `#F8FAFC`, height `36px`, border-bottom `1px solid #CBD5E1`. Text uppercase `11px` bold `#64748B`.
- **Body Rows:** Height `40px` (compact enterprise standard), border-bottom `1px solid #F1F5F9`. Alternating row striping is optional; hover state is mandatory (`#F8FAFC` transition).
- **Selection State:** Row background `#EFF6FF`, left border accent `2px solid #2563EB`.
- **Asset Identifier Format:** Kode Barang & NUP displayed with a monospace token background (`#F1F5F9`, border `#E2E8F0`, padding `2px 4px`).

### KPI Metric Cards
- **Structure:** Clean white surface, `1px solid #E2E8F0`, interior padding `16px`.
- **Elements:** Micro-label (`11px` uppercase slate), large metric counter (`Plus Jakarta Sans` `32px` bold), trend indicator (badge format indicating delta percentage over previous audit), and semantic mini sparkline or icon badge in the top right.

### Rich Status Tags (Kondisi & Status Aset)
- **Dimensions:** Height `20px`, padding `0 6px`, radius `4px`, font size `11px`, weight `600`.
- **Baik:** Background `#ECFDF5`, text `#047857`, border `1px solid #A7F3D0`. Includes a `4px` solid green circle prefix.
- **Rusak Ringan:** Background `#FFFBEB`, text `#B45309`, border `1px solid #FDE68A`. Includes a `4px` solid amber circle prefix.
- **Rusak Berat:** Background `#FEF2F2`, text `#B91C1C`, border `1px solid #FECACA`. Includes a `4px` solid rose circle prefix.

### Form Fields & Filter Toolbars
- **Input Field:** Height `32px` (compact) or `36px` (standard), border `1px solid #CBD5E1`, text `#0F172A`, placeholder `#94A3B8`, background `#FFFFFF`. Focus ring: `1px solid #2563EB` with `0 0 0 2px rgba(37, 99, 235, 0.15)`.
- **Filter Bar:** Flex row housing search input, multi-select dropdown chips (Ruangan, Kategori, Kondisi, Tahun Perolehan), Reset trigger, and Quick Export (Excel/PDF) split-buttons.

### Checkboxes & Radios
- Size `14px` by `14px`, border `1px solid #94A3B8`, radius `3px` (checkbox) or circular (radio).
- Checked: Background `#2563EB`, border `#2563EB`, white checkmark / center pip.

### Sidebar Navigation
- Background `#0F172A` (Secondary Brand Navy).
- Nav Items: Height `36px`, color `#94A3B8`, icon `16px`, active state background `#1E293B`, active text `#FFFFFF`, left accent indicator `3px solid #2563EB`.
- Section Divider Headers: `10px` uppercase text `#64748B`, tracking `0.05em`.