## [1.0.1](https://github.com/kuzzleio/storage-opensearch-2/compare/v1.0.0...v1.0.1) (2026-11-12)

### Bug Fixes

* report why the engine does not answer at startup, and fail on what waiting cannot fix ([7972733](https://github.com/kuzzleio/storage-opensearch-2/commit/797273380cf2f1d6fa4d0109d6bf26b8381122bd)), closes [kuzzleio/storage-es-8#9](https://github.com/kuzzleio/storage-es-8/issues/9)

## 1.0.0 (2026-11-03)

### Dependencies

* **deps:** drop bluebird ([bc53163](https://github.com/kuzzleio/storage-opensearch-2/commit/bc5316352cc6f5741f2dc9e58a1d3acc9de06fdb))

### Features

* close the engine client on Kuzzle's shutdown ([6de0900](https://github.com/kuzzleio/storage-opensearch-2/commit/6de09009dff76dc4c1d977ed5d6ac3bc57e5bd54)), closes [kuzzleio/kuzzle#3141](https://github.com/kuzzleio/kuzzle/issues/3141)
* OpenSearch 2 storage driver ([b41ae93](https://github.com/kuzzleio/storage-opensearch-2/commit/b41ae938fbde5df691a104fbfc3a7f81a6de88aa))

### Bug Fixes

* keep lodash types out of the shipped declarations ([e2474e7](https://github.com/kuzzleio/storage-opensearch-2/commit/e2474e7545771e3c34fe17477644c426d3dc525c))
* map OpenSearch's actual error messages to storage errors ([e2b848a](https://github.com/kuzzleio/storage-opensearch-2/commit/e2b848a1f3ff15abb363ff0298d9d66467b19253))
* name OpenSearch in the driver's debug messages ([07e5b34](https://github.com/kuzzleio/storage-opensearch-2/commit/07e5b349b3fa940327f96a1d5df3542f13ea917d)), closes [kuzzleio/kuzzle#3143](https://github.com/kuzzleio/kuzzle/issues/3143)
* report "opensearch" as the engine family ([9535bbb](https://github.com/kuzzleio/storage-opensearch-2/commit/9535bbb154b55f7f0e6fb9d5cd9d0d14d398ca71)), closes [kuzzleio/kuzzle#3133](https://github.com/kuzzleio/kuzzle/issues/3133)
* say OpenSearch in the driver's logs ([01b9299](https://github.com/kuzzleio/storage-opensearch-2/commit/01b9299162070bf268222a7ae2896a0c335a9fb2))
* send no document limit for a negative deleteByQuery size ([#1](https://github.com/kuzzleio/storage-opensearch-2/issues/1)) ([213efda](https://github.com/kuzzleio/storage-opensearch-2/commit/213efda5fc4e6d4ac6991a51daffee7109179400)), closes [kuzzle#3125](https://github.com/kuzzleio/kuzzle/issues/3125)
