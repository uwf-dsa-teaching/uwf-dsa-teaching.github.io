# WCAG 2.2 Contrast Audit — Classroom50 web app

Derived from `contrast-audit.json` (built from `src/util/a11y/contrastModel.ts`). Not committed and not hand-edited — regenerate it. The machine guard (`src/util/a11y/contrastGuard.test.ts`) fails CI if any enforced pair drops below its spec floor, so this report always reflects guaranteed-green state.

- **Generated:** 2026-08-13
- **Standard:** WCAG 2.2 — 1.4.6 Contrast (Enhanced, AAA) for text, 1.4.11 Non-text Contrast (AA; no AAA tier exists) for UI components.
- **Thresholds:** body text ≥ 7:1, large text ≥ 4.5:1, non-text ≥ 3:1.
- **Recommended safety margin (above the WCAG minimum):** body ≥ 7.5:1, large ≥ 5:1, non-text ≥ 3.5:1. Extra headroom for anti-aliasing, sub-pixel rendering, and future palette tweaks; not required for conformance.
- **Result:** **All audited pairs meet their WCAG floor.** 17 pass but sit below the recommended margin.

Contrast ratios are computed against the concrete rendered pixel — oklab/oklch `color-mix()` and `/NN` opacity are resolved to sRGB and flattened over the actual surface, then scored with the WCAG luminance formula. The audit unit is a (foreground, surface, size-class) triple, since text size and background are per-site facts, not token properties.

## Light

| Pair | Foreground / surface | Colors | Size | Ratio | Floor | Status |
| --- | --- | --- | --- | ---: | ---: | --- |
| `ink-100` | base-content on base-100 | text `#1a1a1a` on `#fafafa` | body | 16.67:1 | 7:1 | ✅ pass |
| `ink-200` | base-content on base-200 | text `#1a1a1a` on `#f1f1f1` | body | 15.41:1 | 7:1 | ✅ pass |
| `ink-300` | base-content on base-300 | text `#1a1a1a` on `#e3e3e3` | body | 13.56:1 | 7:1 | ✅ pass |
| `muted-30` | base-content/30 (rendered 78%) on worst-case surface | text `#464646` on `#e3e3e3` | body | 7.33:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `muted-40` | base-content/40 (rendered 78%) on worst-case surface | text `#464646` on `#e3e3e3` | body | 7.33:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `muted-50` | base-content/50 (rendered 78%) on worst-case surface | text `#464646` on `#e3e3e3` | body | 7.33:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `muted-60` | base-content/60 (rendered 82%) on worst-case surface | text `#3e3e3e` on `#e3e3e3` | body | 8.31:1 | 7:1 | ✅ pass |
| `muted-70` | base-content/70 (rendered 86%) on worst-case surface | text `#363636` on `#e3e3e3` | body | 9.40:1 | 7:1 | ✅ pass |
| `muted-80` | base-content/80 (rendered 90%) on worst-case surface | text `#2e2e2e` on `#e3e3e3` | body | 10.57:1 | 7:1 | ✅ pass |
| `muted-90` | base-content/90 (rendered 92%) on worst-case surface | text `#2a2a2a` on `#e3e3e3` | body | 11.17:1 | 7:1 | ✅ pass |
| `fill-primary` | primary-content on primary fill | text `#fafafa` on `#375396` | large | 7.08:1 | 4.5:1 | ✅ pass |
| `fill-secondary` | secondary-content on secondary fill | text `#fafafa` on `#565656` | large | 7.03:1 | 4.5:1 | ✅ pass |
| `fill-accent` | accent-content on accent fill | text `#fafafa` on `#923821` | large | 7.16:1 | 4.5:1 | ✅ pass |
| `fill-info` | info-content on info fill | text `#fafafa` on `#235c66` | large | 7.20:1 | 4.5:1 | ✅ pass |
| `fill-success` | success-content on success fill | text `#fafafa` on `#305f40` | large | 7.09:1 | 4.5:1 | ✅ pass |
| `fill-error` | error-content on error fill | text `#fafafa` on `#993229` | large | 7.08:1 | 4.5:1 | ✅ pass |
| `fill-warning` | warning-content on warning fill | text `#fafafa` on `#754d11` | large | 7.12:1 | 4.5:1 | ✅ pass |
| `badge-primary` | primary soft-badge text | text `#1a2b52` on `#eaedf2` | body | 11.87:1 | 7:1 | ✅ pass |
| `badge-secondary` | secondary soft-badge text | text `#2c2c2c` on `#ededed` | body | 11.86:1 | 7:1 | ✅ pass |
| `badge-info` | info soft-badge text | text `#0f3036` on `#e9edee` | body | 11.96:1 | 7:1 | ✅ pass |
| `badge-success` | success soft-badge text | text `#163220` on `#eaeeeb` | body | 11.88:1 | 7:1 | ✅ pass |
| `badge-warning` | warning soft-badge text | text `#3e2705` on `#efece7` | body | 11.89:1 | 7:1 | ✅ pass |
| `badge-error` | error soft-badge text | text `#531712` on `#f2eae9` | body | 11.77:1 | 7:1 | ✅ pass |
| `text-primary` | primary text on base-100 | text `#375396` on `#fafafa` | body | 7.08:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `text-secondary` | secondary text on base-100 | text `#565656` on `#fafafa` | body | 7.03:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `text-accent` | accent text on base-100 | text `#923821` on `#fafafa` | body | 7.16:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `text-info` | info text on base-100 | text `#235c66` on `#fafafa` | body | 7.20:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `text-success` | success text on base-100 | text `#305f40` on `#fafafa` | body | 7.09:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `text-error` | error text on base-100 | text `#993229` on `#fafafa` | body | 7.08:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `text-warning` | warning text on base-100 | text `#754d11` on `#fafafa` | body | 7.12:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `link` | link on base-100 | text `#324d8c` on `#fafafa` | body | 7.81:1 | 7:1 | ✅ pass |
| `sidebar-muted` | neutral-content resting tiers (rendered 85%) on sidebar surface | text `#d6d6d6` on `#3a3a3a` | body | 7.79:1 | 7:1 | ✅ pass |
| `sidebar-hover` | neutral-content (hover) on sidebar surface | text `#f1f1f1` on `#3a3a3a` | body | 10.07:1 | 7:1 | ✅ pass |
| `placeholder` | input placeholder | text `#393939` on `#fafafa` | body | 11.00:1 | 7:1 | ✅ pass |
| `label` | .label text | text `#393939` on `#fafafa` | body | 11.00:1 | 7:1 | ✅ pass |
| `border` | base-300 structural divider on base-100 | text `#e3e3e3` on `#fafafa` | body | 1.23:1 | 3:1 | — exempt |

## Dark

| Pair | Foreground / surface | Colors | Size | Ratio | Floor | Status |
| --- | --- | --- | --- | ---: | ---: | --- |
| `ink-100` | base-content on base-100 | text `#ececee` on `#1b1b1d` | body | 14.58:1 | 7:1 | ✅ pass |
| `ink-200` | base-content on base-200 | text `#ececee` on `#161618` | body | 15.32:1 | 7:1 | ✅ pass |
| `ink-300` | base-content on base-300 | text `#ececee` on `#100f11` | body | 16.20:1 | 7:1 | ✅ pass |
| `muted-30` | base-content/30 (rendered 68%) on worst-case surface | text `#a9a9ab` on `#1b1b1d` | body | 7.34:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `muted-40` | base-content/40 (rendered 68%) on worst-case surface | text `#a9a9ab` on `#1b1b1d` | body | 7.34:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `muted-50` | base-content/50 (rendered 68%) on worst-case surface | text `#a9a9ab` on `#1b1b1d` | body | 7.34:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `muted-60` | base-content/60 (rendered 74%) on worst-case surface | text `#b6b6b8` on `#1b1b1d` | body | 8.46:1 | 7:1 | ✅ pass |
| `muted-70` | base-content/70 (rendered 80%) on worst-case surface | text `#c2c2c4` on `#1b1b1d` | body | 9.69:1 | 7:1 | ✅ pass |
| `muted-80` | base-content/80 (rendered 86%) on worst-case surface | text `#cfcfd1` on `#1b1b1d` | body | 11.03:1 | 7:1 | ✅ pass |
| `muted-90` | base-content/90 (rendered 92%) on worst-case surface | text `#dbdbdd` on `#1b1b1d` | body | 12.47:1 | 7:1 | ✅ pass |
| `fill-primary` | primary-content on primary fill | text `#14181c` on `#90a7d6` | large | 7.38:1 | 4.5:1 | ✅ pass |
| `fill-secondary` | secondary-content on secondary fill | text `#14181c` on `#a8a8ac` | large | 7.53:1 | 4.5:1 | ✅ pass |
| `fill-accent` | accent-content on accent fill | text `#14181c` on `#e29279` | large | 7.32:1 | 4.5:1 | ✅ pass |
| `fill-info` | info-content on info fill | text `#14181c` on `#6fb8c4` | large | 7.93:1 | 4.5:1 | ✅ pass |
| `fill-success` | success-content on success fill | text `#14181c` on `#8fb89f` | large | 8.09:1 | 4.5:1 | ✅ pass |
| `fill-error` | error-content on error fill | text `#14181c` on `#d5968f` | large | 7.30:1 | 4.5:1 | ✅ pass |
| `fill-warning` | warning-content on warning fill | text `#14181c` on `#d0ad6e` | large | 8.40:1 | 4.5:1 | ✅ pass |
| `badge-primary` | primary soft-badge text | text `#bbcae7` on `#24262c` | body | 9.13:1 | 7:1 | ✅ pass |
| `badge-secondary` | secondary soft-badge text | text `#cacacc` on `#262628` | body | 9.20:1 | 7:1 | ✅ pass |
| `badge-info` | info soft-badge text | text `#abd4db` on `#22282a` | body | 9.44:1 | 7:1 | ✅ pass |
| `badge-success` | success soft-badge text | text `#bbd4c5` on `#242827` | body | 9.51:1 | 7:1 | ✅ pass |
| `badge-warning` | warning soft-badge text | text `#e3cea9` on `#292723` | body | 9.69:1 | 7:1 | ✅ pass |
| `badge-error` | error soft-badge text | text `#e7c0bb` on `#2a2526` | body | 9.09:1 | 7:1 | ✅ pass |
| `text-primary` | primary text on base-100 | text `#90a7d6` on `#1b1b1d` | body | 7.11:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `text-secondary` | secondary text on base-100 | text `#a8a8ac` on `#1b1b1d` | body | 7.26:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `text-accent` | accent text on base-100 | text `#e29279` on `#1b1b1d` | body | 7.06:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `text-info` | info text on base-100 | text `#6fb8c4` on `#1b1b1d` | body | 7.64:1 | 7:1 | ✅ pass |
| `text-success` | success text on base-100 | text `#8fb89f` on `#1b1b1d` | body | 7.80:1 | 7:1 | ✅ pass |
| `text-error` | error text on base-100 | text `#d5968f` on `#1b1b1d` | body | 7.03:1 | 7:1 | ✅ pass (below 7.5:1 recommended) |
| `text-warning` | warning text on base-100 | text `#d0ad6e` on `#1b1b1d` | body | 8.09:1 | 7:1 | ✅ pass |
| `link` | link on base-100 | text `#9bb0dc` on `#1b1b1d` | body | 7.89:1 | 7:1 | ✅ pass |
| `sidebar-muted` | neutral-content resting tiers (rendered 85%) on sidebar surface | text `#d0d0d2` on `#303032` | body | 8.55:1 | 7:1 | ✅ pass |
| `sidebar-hover` | neutral-content (hover) on sidebar surface | text `#ececee` on `#303032` | body | 11.18:1 | 7:1 | ✅ pass |
| `placeholder` | input placeholder | text `#c2c2c4` on `#1b1b1d` | body | 9.69:1 | 7:1 | ✅ pass |
| `label` | .label text | text `#c2c2c4` on `#1b1b1d` | body | 9.69:1 | 7:1 | ✅ pass |
| `border` | base-300 structural divider on base-100 | text `#100f11` on `#1b1b1d` | body | 1.11:1 | 3:1 | — exempt |

### Legend

- ✅ pass — meets the WCAG floor. A `(below X:1 recommended)` note means it clears the WCAG minimum but sits under our stricter recommended target (see the safety-margin bullet above) — still a pass, just less headroom.
- ❌ FAIL — below the WCAG floor.
- — exempt — outside WCAG scope (logotypes, disabled/inactive controls, structural dividers that are not the sole means of identifying a component).

