# kuzzle-storage-opensearch-2

The OpenSearch 2 storage driver for [Kuzzle](https://github.com/kuzzleio/kuzzle) 2.

`kuzzle-storage-opensearch-2` is the OpenSearch 2 storage driver of [Kuzzle](https://github.com/kuzzleio/kuzzle) 2. It is Kuzzle's Elasticsearch 7 driver on the OpenSearch 2 client (`@opensearch-project/opensearch` 2.13.0): same mappings, same queries, same errors. Kuzzle 2 does not ship it: you install it next to Kuzzle.

📖 Full documentation: https://docs.kuzzle.io/drivers/storage-opensearch-2/1/

## Install

Install the package in your application, next to `kuzzle`:

```bash
npm install kuzzle-storage-opensearch-2
```

Then select it in your `.kuzzlerc`, with the address of your OpenSearch 2 cluster:

```jsonc
{
  "services": {
    "storageEngine": {
      "driver": "kuzzle-storage-opensearch-2",
      "client": { "node": "http://localhost:9200" }
    }
  }
}
```

`majorVersion` is not read when `driver` is set, and Kuzzle logs a warning if both are set: remove `majorVersion`.
The same works with the `kuzzle_services__storageEngine__driver` environment variable.

The rest of `services.storageEngine` (`client`, `commonMapping`, `defaultSettings`, `internalIndex`...) works as
with Elasticsearch: see [Configuration](https://docs.kuzzle.io/drivers/storage-opensearch-2/1/configuration/).

## Requirements

- Kuzzle 2.61 or later, within Kuzzle 2. Older versions do not know `services.storageEngine.driver` and silently
  ignore it: they start on the Elasticsearch code they embed, not on this package.
- OpenSearch 2.19 or a later 2.x (tested on 2.19.0 and 2.19.7)
- Node.js 22.12 or later

Every node of a Kuzzle cluster must run the same driver, in the same version.

## TypeScript

The package ships its declarations. It exports the driver class, `OpenSearch2Driver` (also its default export), whose static
`createNativeClient()` builds an `@opensearch-project/opensearch` 2.13.0 `Client`. To type the native client Kuzzle
gives your application:

```ts
import type { OpenSearch2Driver } from "kuzzle-storage-opensearch-2";

type StorageClient = ReturnType<typeof OpenSearch2Driver.createNativeClient>;

const client = app.storage.storageClient as StorageClient;
```

See [TypeScript](https://docs.kuzzle.io/drivers/storage-opensearch-2/1/typescript/).

## Capabilities

The driver declares every optional capability (`aggregations`, `mappingUpdates`, `stats`, `updateByQuery`): every
Kuzzle API action works.

## Development

```bash
npm ci
npm run test:unit   # the unit suite, no OpenSearch needed

docker run -d -p 9200:9200 -e discovery.type=single-node -e DISABLE_SECURITY_PLUGIN=true opensearchproject/opensearch:2.19.7
npm test            # the unit suite and Kuzzle's conformance kit, against OPENSEARCH_NODE (default http://localhost:9200)
```

`npm run lint`, `npm run typecheck` and `npm run build` complete the checks the CI runs. The unit suite is the one of
[storage-es-7](https://github.com/kuzzleio/storage-es-7), the driver this one is built from: only
`test/unit/elasticsearch.test.ts` and `test/unit/esWrapper.test.ts` name their driver.

### Shared code

The five storage drivers ([storage-es-7](https://github.com/kuzzleio/storage-es-7),
[storage-es-8](https://github.com/kuzzleio/storage-es-8), [storage-es-9](https://github.com/kuzzleio/storage-es-9),
[storage-opensearch-2](https://github.com/kuzzleio/storage-opensearch-2),
[storage-opensearch-3](https://github.com/kuzzleio/storage-opensearch-3)) share most of their code. A drift guard,
`npm run check:drift` (run by the CI), checks that the shared files listed in `scripts/check-drift.sh` are identical to
their canonical copy, in `storage-es-8` at the commit `scripts/drift.env` pins; `ALLOW` there lists the shared files
a repository deliberately keeps different. To change a shared file, change it in `storage-es-8` first, copy it to the
other drivers, then move `CANONICAL_REF` to that commit in all five.

To write a driver for another engine, see
[Write a storage driver](https://docs.kuzzle.io/core/2/guides/write-storage-drivers/).

## Release

Releases are made by semantic-release: `beta` publishes prereleases on the `beta` npm tag, `master` publishes stable
versions. The documentation is in `doc/1/`.

## License

[Apache-2.0](LICENSE.md)
