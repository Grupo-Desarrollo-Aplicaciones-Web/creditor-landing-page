# GitHub Pages deployment

The 04 October 2026 deployment hosts the landing at
https://grupo-desarrollo-aplicaciones-web.github.io/creditor-landing-page/
and the browser application at its `app/` subdirectory. The application's
hash router retains this subpath. Records stay in browser localStorage;
hosting the frontend does not create a backend or shared database.

Production builds use `.env.production` for the application destination.
Development retains the localhost default. The app is built with
`VITE_LANDING_URL=https://grupo-desarrollo-aplicaciones-web.github.io/creditor-landing-page/`.

Publication uses a dedicated `gh-pages` branch containing compiled static
files, with `.nojekyll` at its root. The root contains the landing build;
`app/` contains the application build. `deployment.json` records the source
commits. The source histories on the local `develop` branches remain
separate from this compiled artifact branch.

For subsequent releases, run the existing tests and build both projects,
assemble the same directories, verify the links and payment flow, and push
the compiled files to `gh-pages`. The deployment record and rebuilding
script are saved in the workspace's `outputs/CREDITOR-Deployment-20261004`.
