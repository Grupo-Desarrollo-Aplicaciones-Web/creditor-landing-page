# Historical landing deployment

The following evidence was verified read-only on **03 October 2026** before local TB1 implementation:

| Evidence | Verified value |
| --- | --- |
| Historical URL | https://grupo-desarrollo-aplicaciones-web.github.io/creditor-landing-page/ |
| Published source branch | `develop` |
| Published source SHA | `cf734ff17d32417323c17a03ccf11a3f4d3a1ade` |
| Actions run | [35305597000](https://github.com/Grupo-Desarrollo-Aplicaciones-Web/creditor-landing-page/actions/runs/35305597000) |
| Completion | 18 September 2026, 04:19:56 UTC, success |
| Pages deployment | `6517430665`, success |
| HTTP checks | Document, bundled JavaScript, CSS and favicon returned 200 |
| Historical presentation | CreditFlow loans/collections landing, requiring alignment with CREDITOR |

The historical [Pages workflow](https://github.com/Grupo-Desarrollo-Aplicaciones-Web/creditor-landing-page/blob/cf734ff17d32417323c17a03ccf11a3f4d3a1ade/.github/workflows/deploy.yml) builds and deploys from `develop`. The local checkout was fast-forwarded to this already available remote-tracking ref without a fetch.

For the new **local** TB1 increment, that workflow is replaced by `.github/workflows/quality.yml`. It only installs dependencies, tests and builds, with `contents: read`. It contains no Pages permission, upload or deployment step.

No push, deployment, remote configuration change or modification to the live historical site was performed. A local build, successful tests, or a local preview is not evidence of TB1 publication. The TB1 delivery still needs an expressly authorized publication and a new URL/SHA/run record when that work is requested.
