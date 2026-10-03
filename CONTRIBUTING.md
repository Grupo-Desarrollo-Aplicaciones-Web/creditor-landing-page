# Contributing to CREDITOR landing

Use conventional commits and keep changes attributable to the person who made them. Do not attribute proposed work, screenshots or generated documentation to another participant.

## Local GitFlow for this increment

- `main` remains the historical stable branch.
- `develop` integrates completed local work.
- Work starts in a `feature/<purpose>` branch based on the current local `develop`.
- Keep commits focused. Before integration, run `npm test`, `npm run build` and `git diff --check`.
- Integrate with `git merge --no-ff` after checks pass and retain feature branches for review.
- Do not create a release, update stable `main`, push, or deploy without the user's authorization.

The TB1 branches are `feature/creditor-content`, `feature/frontend-navigation`, `feature/contact-accessibility` and `feature/tb1-quality-local`. Their commits and merges are local. Remote refs and historical deployment evidence are preserved.

## Product and code conventions

Use English identifiers. Keep customer-facing messages in both `en-US` and `es-419` dictionaries. Always separate language, numerical amounts and currency. Preserve explicit demonstration labels.

Do not introduce unsupported claims, pretend contact delivery or fake production endpoints. Maintain label associations, keyboard navigation, visible focus, understandable errors and reduced-motion behavior.

Put financial formulas and destination validation in pure helpers with meaningful regression tests. Check keyboard operation and mobile layout after interface changes.

## Review scope

Use fictional examples in local review. Check both segmented CTA routes with the frontend running on its configured address. Build output and local environment files remain ignored. The CI workflow checks code; it has no Pages permissions, deployment job or publication artifact.
