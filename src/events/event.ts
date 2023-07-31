import {
  Resolver,
  EventResolverArguments,
} from "servc-svc-lib-server/dist/lib/services/spec/consumer";

export interface SampleEventResolver extends Resolver<EventResolverArguments> {
  simple: EventResolverArguments<any, boolean>;
  mirror: EventResolverArguments<string, string>;
}

const sampleEventResolver: SampleEventResolver = {
  simple: async () => true,
  mirror: async (_b, _c, _r, _i, details) => {
    return details;
  },
};

export default sampleEventResolver;
