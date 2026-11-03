import { describe, expect, it } from "vitest";

import { isSupportedOpenSearch } from "../../lib/version";

describe("isSupportedOpenSearch", () => {
  it.each(["2.19.0", "2.19.7", "2.20.0"])("accepts OpenSearch %s", (number) => {
    expect(isSupportedOpenSearch({ distribution: "opensearch", number })).toBe(
      true,
    );
  });

  it.each(["2.18.0", "1.3.20", "3.0.0", "3.9.0"])(
    "refuses OpenSearch %s",
    (number) => {
      expect(
        isSupportedOpenSearch({ distribution: "opensearch", number }),
      ).toBe(false);
    },
  );

  it("refuses Elasticsearch, which answers with no OpenSearch distribution", () => {
    expect(isSupportedOpenSearch({ number: "2.19.0" })).toBe(false);
    expect(
      isSupportedOpenSearch({
        distribution: "elasticsearch",
        number: "7.10.2",
      }),
    ).toBe(false);
  });

  it("refuses an unreadable version", () => {
    expect(
      isSupportedOpenSearch({ distribution: "opensearch", number: "unknown" }),
    ).toBe(false);
  });
});
