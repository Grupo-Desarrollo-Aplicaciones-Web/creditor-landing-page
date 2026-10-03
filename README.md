# CREDITOR landing

A bilingual, responsive landing for accounts payable in small businesses. This **local TB1 increment** introduces supplier purchases, outstanding obligations and payment records. It contains no commercial subscription plans, performance claims or real contact delivery.

## Run locally

Requirements: Node.js 22.12+ (Node 20.19+ also supports the Vite toolchain) and npm.

```powershell
npm ci
npm run dev
```

Open `http://localhost:5173/creditor-landing-page/`. Start the separate `creditor-web-app` on port **5174** to follow the application calls to action.

```powershell
npm test
npm run build
npm run preview
```

The production-format preview is local at `http://localhost:4173/creditor-landing-page/`. Build output is in ignored `dist/`. Building or previewing does not publish anything.

## Frontend configuration

The default `VITE_APP_URL` is `http://localhost:5174`. Copy `.env.example` to an ignored `.env.local` only when you need a different destination, then restart Vite or rebuild.

```dotenv
VITE_APP_URL=http://localhost:5174
```

| Segment | Action | Hash route |
| --- | --- | --- |
| Business owner | Review obligations | `/#/dashboard` |
| Finance administrator | Record a purchase | `/#/purchases/new` |

The URL builder retains configured application subpaths, removes old query/hash values and rejects non-HTTP(S) URLs and embedded credentials. The variable is client-visible: never put secrets in it. No production frontend URL is claimed by this repository.

## Language, accessibility and currency

English (`en-US`) is the default for a first visit. Latin American Spanish (`es-419`) is available and the preference is saved as `creditor-locale`. Blocked browser storage falls back to English. Changing language updates document language, title and descriptions.

Illustrative amounts and the loan calculator always remain in **PEN**. A language change alters formatting, not numerical value or currency.

Navigation includes a skip link, visible keyboard focus, a mobile disclosure button with ARIA state and Escape handling, linked FAQ controls, and reduced-motion support. The form has persistent labels, field-specific errors and announced status. Terms and Privacy have local routes `#/terms` and `#/privacy`.

## Honest local demonstrations

- Hero records are explicitly fictional.
- Contact validation makes **no network request and stores no form entries**. It clears entries after successful validation and provides a Clear fields action.
- The optional business loan estimate converts effective annual rate to monthly rate with `(1 + TEA / 100) ** (1 / 12) - 1`, then calculates a fixed installment. Zero interest divides principal by months. Intermediate calculations are unrounded; displayed amounts use two decimals. Fees, insurance, taxes and late charges are excluded.
- Application links open the separate local frontend. Shared backend persistence, authentication, email delivery and financial transactions are outside this increment.

## Verification and publication state

`npm test` covers frontend destinations, form validation, language completeness/defaults and loan mathematics. `npm run check` runs tests and build. GitHub Actions contains **build/test checks only**, with read-only repository permission and no deployment job.

The September 2026 deployment remains a **historical version**. These local TB1 changes were not pushed or deployed. See [historical evidence](docs/HISTORICAL_DEPLOYMENT.md) and the [local review record](docs/LOCAL_REVIEW.md).

[Contribution workflow](CONTRIBUTING.md)
