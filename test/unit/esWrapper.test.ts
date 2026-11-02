import { errors } from "@opensearch-project/opensearch";

import ESWrapper from "../../lib/esWrapper";
import { describeESWrapper } from "./esWrapperCases";

describeESWrapper(
  "opensearch2",
  ESWrapper as never,
  errors.ResponseError as never,
  "OpenSearch",
);
