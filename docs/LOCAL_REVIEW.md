# TB1 local landing review

Date: **03 October 2026**. Scope: local CREDITOR landing repository.

Toolchain actually checked: **Node 24.21.0**, **npm 11.19.0**, **Vite 7.3.6**.

## Automated evidence

Run `npm run check` to verify the reviewable increment:

- 12 Node tests: CTA hash destinations and unsafe URL rejection; field validation; English defaults and unavailable storage; translation coverage including legal pages; effective annual-to-monthly rate, amortization reconciliation, zero and small rates, and invalid parameters.
- Vite production build.
- `git diff --check`.
- `npm audit --audit-level=high`; resolved Vite is updated within the existing major version.

The TEA sample uses PEN 10,000, 24% effective annual interest and 12 monthly installments: displayed installment **PEN 934.53**. A zero-rate PEN 12,000 / 12-month loan returns PEN 1,000 per month and zero interest.

## Browser review

Review at `http://localhost:5173/creditor-landing-page/` with the separate frontend running at `http://localhost:5174`.

| Check | Expected result |
| --- | --- |
| First visit without language preference | English interface; `html lang=en-US` |
| ES/EN change | Translated labels and metadata; amounts stay PEN |
| Owner CTA | Frontend `/#/dashboard` |
| Administrator CTA | Frontend `/#/purchases/new` |
| Keyboard | Skip link, visible focus, labelled mobile menu; Escape closes it and returns focus |
| Contact: empty fields | Field-specific errors, first invalid field focused |
| Contact: fictional valid example | Clear confirmation of no delivery/storage; all entries cleared |
| Clear fields | Entries/errors cleared; announced status |
| Terms / Privacy | Readable local pages; home links work |
| Loan controls | Keyboard-operable sliders; 0% rate finite; coherent TEA estimate |
| Narrow screen | No horizontal overflow; sections and navigation remain readable |
| Reduced motion | No animated transitions or smooth scrolling when requested |

A browser check is only marked completed after an actual observation. Automated tests do not claim full accessibility conformance or successful public publication.

## Remaining delivery boundary

The frontend is a separate local increment. Production API, backend persistence, authentication, external services and publication are not demonstrated by this landing. Historical deployment is recorded separately in [HISTORICAL_DEPLOYMENT.md](HISTORICAL_DEPLOYMENT.md).
