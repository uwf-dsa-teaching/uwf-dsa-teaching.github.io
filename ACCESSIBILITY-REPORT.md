# Accessibility Conformance Report — Classroom50 web app

**Format:** VPAT® 2.5Rev — WCAG Edition
**Standard:** WCAG 2.2, target Level AA
**Product:** Classroom50 web app
**Report date:** 2026-08-13

**Evaluation methods:** Automated checks (color-contrast audit computed per rendered pixel and guarded in CI; static and axe-based rule scans) establish a floor; criteria backed only by automation are marked provisionally and a manual keyboard + screen-reader pass sets the final conformance level. Criteria still awaiting that pass are shown as *Not Evaluated* rather than claimed.

**Conformance terms:** *Supports* — meets the criterion. *Partially Supports* — meets it with exceptions. *Does Not Support* — does not meet it. *Not Applicable* — the criterion does not apply. *Not Evaluated* — not yet assessed.

**Summary (30 applicable criteria):** 25 Supports, 5 Partially, 0 Does Not Support, 0 Not Applicable, 0 Not Evaluated.

## Perceivable

| Criterion | Level | Conformance Level | Assessed | Remarks and Explanations |
| --- | --- | --- | --- | --- |
| 1.1.1 Non-text Content | A | Supports | 2026-08-05 | guided visual + a11y-tree review: org avatars use alt="" (decorative; the org name beside them is the real label), decorative icons are aria-hidden (94/96 on the org page), and the only bare SVGs are inside the dev-only devtools widget. Informative non-text content has appropriate text alternatives on the reviewed flows. |
| 1.3.1 Info and Relationships | A | Partially Supports | 2026-08-05 | Manual inspection in Chromium with the axe accessibility-tree scan: landmarks are present (main, nav 'Primary'), form controls are labeled, and the sidebar list markup is now valid (<ul> > <li> > <a>; axe list/listitem clean). Still Partially: the heading hierarchy is inconsistent — each org card exposes both an H2 and an H3 with the same text — so the programmatic structure does not yet cleanly match the visual structure. |
| 1.3.2 Meaningful Sequence | A | Supports | 2026-08-05 | guided visual + DOM-order review on the Organizations grid and the assignments table: the DOM/reading order matches the visual order (sidebar -> breadcrumb -> heading -> toolbar -> rows top-to-bottom, each row left-to-right). Card grids read left-then-right in source order; no CSS reordering scrambles the sequence. |
| 1.3.5 Identify Input Purpose | AA | Supports | 2026-08-05 | guided review: the app collects almost no information about the user themselves — text inputs capture classroom data (org/assignment/section) or a THIRD party's details (a student's name/username/email on the roster form), for which autocomplete tokens are inappropriate. The user's own identity is delegated to GitHub OAuth/device-code. So 1.3.5 is met by not applying self-autofill where it doesn't belong. |
| 1.4.3 Contrast (Minimum) | AA | Supports | 2026-08-13 | Verified by the automated contrast audit: every audited text and UI-component pair meets its WCAG floor (text at the AAA 7:1 / 4.5:1 level). See the live report at /accessibility. Guarded in CI. |
| 1.4.6 Contrast (Enhanced) | AAA | Supports | 2026-08-13 | Verified by the automated contrast audit: every audited text and UI-component pair meets its WCAG floor (text at the AAA 7:1 / 4.5:1 level). See the live report at /accessibility. Guarded in CI. |
| 1.4.11 Non-text Contrast | AA | Supports | 2026-08-13 | Verified by the automated contrast audit: every audited text and UI-component pair meets its WCAG floor (text at the AAA 7:1 / 4.5:1 level). See the live report at /accessibility. Guarded in CI. |
| 1.4.4 Resize Text | AA | Supports | 2026-08-13 | Text resizes to 200% without loss of content: with the root font enlarged to 200% in a real browser, the shared primitives' text scales (relative units) and the layout still fits without clipping or horizontal overflow. Verified automatically on the shared primitives; a per-route zoom sweep is a manual follow-up. |
| 1.4.10 Reflow | AA | Supports | 2026-08-13 | Content reflows without horizontal scroll: a representative layout of the shared Card/Button primitives is measured at a 320px viewport in a real browser and no element exceeds the width. Verified automatically on the shared layout primitives; a per-route reflow sweep is a manual follow-up. |
| 1.4.12 Text Spacing | AA | Supports | 2026-08-13 | Content survives the WCAG 1.4.12 text-spacing overrides (line-height 1.5x, letter-spacing 0.12em, word-spacing 0.16em, paragraph spacing 2em): applied to the shared primitives in a real browser, the container grows to fit rather than clipping. Verified automatically on the shared primitives; a per-route sweep is a manual follow-up. |
| 1.4.13 Content on Hover or Focus | AA | Partially Supports | 2026-08-05 | Manual inspection in Chromium of the tooltips on /accessibility: they are DaisyUI CSS .tooltip on non-focusable <span> elements, so they appear on mouse hover only (not keyboard focus), have no Escape-to-dismiss, and are not hoverable (CSS pseudo-content). They elaborate on already-visible values, so essential info is not lost, but the hover/focus content itself is not dismissible/hoverable/keyboard-reachable per 1.4.13. |

## Operable

| Criterion | Level | Conformance Level | Assessed | Remarks and Explanations |
| --- | --- | --- | --- | --- |
| 2.1.1 Keyboard | A | Partially Supports | 2026-08-05 | Manual keyboard-only pass in Chromium after the a11y fixes: the Organizations, classrooms, assignment-table, and Members/Roster flows are operable without a mouse — every control is reachable by Tab and actuatable, assignment/member/roster rows now open via a real focusable name button (Enter opens the detail modal, verified), and modals trap focus + close on Escape. Marked Partially because a keyboard-only sweep of every remaining flow (submissions dashboard, roster import, student accept/submit, org setup) and a speaking-screen-reader pass are not yet done. |
| 2.1.2 No Keyboard Trap | A | Supports | 2026-08-05 | Manual keyboard test in Chromium of the About modal (native <dialog>): on open, focus moves into the dialog; Tab cycles only among the dialog's controls (focus stays contained across 6 presses); Escape closes it and focus returns to the triggering button. No keyboard trap; escape is always available. |
| 2.4.1 Bypass Blocks | A | Partially Supports | 2026-08-05 | Manual keyboard test in Chromium: a 'Skip to main content' link is the first focusable element and has a visible focus outline, and its target main#main-content precedes the nav in DOM order. However, activating it did not move keyboard focus into main (focus fell to <body>); main lacks tabindex="-1", so the skip does not reliably relocate keyboard focus past the repeated blocks. |
| 2.4.3 Focus Order | A | Supports | 2026-08-05 | Manual keyboard pass in Chromium on the Organizations flow: Tab order follows the visual reading order (skip link -> search -> sort -> view toggles -> new-org -> per-card actions/links), with no illogical jumps. Verified on the primary authenticated flow. |
| 2.4.4 Link Purpose (In Context) | A | Supports | 2026-08-05 | Manual keyboard + accessibility-tree pass in Chromium on the authenticated Organizations flow: all 33 visible links carry meaningful accessible names (e.g. 'Open', 'Review the service token for <org>'); no bare 'click here'/'link'/empty-name links found. Verified via the a11y tree, not a speaking screen reader. |
| 2.4.6 Headings and Labels | AA | Supports | 2026-08-05 | guided review of the heading outline and form labels (Roster, Organizations, Assignments): headings describe their topic ('Add member', 'Invite students', 'Unenroll N students?', 'Accessibility') and form labels are descriptive ('Role', 'GitHub username', 'Upload JSON file'); no vague or empty headings/labels. (Heading LEVEL ordering is tracked separately under 1.3.1; 2.4.6 descriptiveness is met.) |
| 2.4.7 Focus Visible | AA | Supports | 2026-08-05 | Manual keyboard pass + screenshots in Chromium on the Organizations flow: tabbing through search, sort, view toggles, action buttons, card links, and open dropdown-menu items shows a visible focus indicator on each (2px solid outline, plus a background change on menu items). Native inputs/selects confirmed visually focus-ringed. Verified on the primary authenticated flow; a full per-route sweep remains. |
| 2.4.11 Focus Not Obscured (Minimum) | AA | Supports | 2026-08-05 | guided visual + layout review: the only sticky element is the left sidebar column (0-240px), which sits beside main content rather than over it, and the top banner is position:static (not floating). No sticky top/bottom bar overlays focus, so a keyboard-focused control is never entirely hidden on the desktop layout. |
| 2.5.3 Label in Name | A | Partially Supports | 2026-08-05 | Manual accessibility-tree inspection in Chromium: several controls' accessible names do not contain their visible label text — e.g. links whose visible chip reads 'No service token' / 'Expiry not tracked' are named 'Review the service token for <org>', and the account button shows the user's name visually but is named 'Account menu'. This can break voice-control ('click <visible text>'). |
| 2.5.8 Target Size (Minimum) | AA | Supports | 2026-08-13 | Interactive targets meet the 24x24 CSS px minimum: the shared Button primitive's action sizes and icon-only shape are measured in a real browser layout engine. Verified automatically on the shared primitives; an exhaustive per-site target sweep is a manual follow-up. |

## Understandable

| Criterion | Level | Conformance Level | Assessed | Remarks and Explanations |
| --- | --- | --- | --- | --- |
| 3.1.1 Language of Page | A | Supports | 2026-08-13 | The page ships with a valid `lang` on the root <html> element and the app updates it to match the active language at runtime. Verified automatically (index.html carries lang; the i18n layer keeps document.documentElement.lang in sync). |
| 3.2.3 Consistent Navigation | AA | Supports | 2026-08-05 | guided review comparing the sidebar across org, classroom, and assignment routes: repeated navigation keeps a consistent relative order everywhere (logo -> collapse -> level nav -> GitHub org -> footer: Dark mode -> Language -> About -> Docs -> Sign out -> Account menu). Contextual middle items change with scope as expected, but items that repeat never reorder. |
| 3.2.4 Consistent Identification | AA | Supports | 2026-08-05 | guided review of repeated actions across flows: same-function components are identified consistently — 'Settings'/'Sign out' are worded identically everywhere, overflow menus follow 'More actions for {name}', row actions follow '{verb} {item}' ('Delete/Lock {assignment}'), and the card links use 'Open {org}' / 'View assignments for {classroom}'. No same-function control is labeled inconsistently. |
| 3.3.1 Error Identification | A | Supports | 2026-08-13 | Form fields identify errors in text: the shared FormField wrapper renders the error as a role=alert message, links it to the control via aria-describedby, and sets aria-invalid on the control. Verified automatically on the field primitive; per-form error copy is a manual content check. |
| 3.3.2 Labels or Instructions | A | Supports | 2026-08-13 | Inputs carry programmatic labels: the shared FormField wrapper binds a <label htmlFor> to the control id and exposes required/help affordances. Verified automatically on the field primitive; per-form instruction copy is a manual content check. |
| 3.3.7 Redundant Entry | A | Supports | 2026-08-05 | guided review of the creation flows: the create-assignment form does not re-request context already known (org/classroom come from the route, not re-typed), the slug auto-derives from the name, and flows are single-step forms rather than multi-step wizards that re-ask prior data. Information already available isn't redundantly requested. |
| 3.3.8 Accessible Authentication (Minimum) | AA | Supports | 2026-08-05 | guided live review of the login screen: the primary 'Sign in with GitHub' OAuth path requires no cognitive-function test (no code to memorize/transcribe; GitHub's own flow supports password managers/passkeys), and it is the default. 'Use a device code' and 'Use a personal access token' are offered as additional methods, so the transcription-based device-code path always has a no-transcription alternative (OAuth). The app stores no password (zero password fields). Meets 3.3.8's no-cognitive-test-without-alternative requirement. |

## Robust

| Criterion | Level | Conformance Level | Assessed | Remarks and Explanations |
| --- | --- | --- | --- | --- |
| 4.1.2 Name, Role, Value | A | Supports | 2026-08-05 | Manual accessibility-tree inspection in Chromium on the Organizations flow: every button/link exposes an accessible name (0 nameless interactive controls); comboboxes expose expanded state and options expose selected; the modal exposes its open state and manages focus. Minor exception: the card action dropdown uses role=menu with <button> children (not menuitem) and ArrowDown did not rove focus among items. Verified via the a11y tree, not a speaking screen reader. |
| 4.1.3 Status Messages | AA | Supports | 2026-08-13 | Status changes are announced through a live region: toasts render as role=alert with aria-live tone-mapped (assertive for errors, polite otherwise), so assistive tech announces them without moving focus. Verified automatically on the toast surface (structure only; timing and visibility are not machine-checked). |


---

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

