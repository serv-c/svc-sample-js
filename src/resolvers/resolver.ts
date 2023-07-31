import {
  Resolver,
  ResolverArguments,
} from "servc-svc-lib-server/dist/lib/services/spec/consumer";

export interface SampleResolver extends Resolver<ResolverArguments> {
  simple: ResolverArguments<any, boolean>;
  mirror: ResolverArguments<string, string>;
  complex: ResolverArguments<any, string>;
}

const sampleResolver: SampleResolver = {
  simple: async () => true,
  mirror: async (_id, _bus, _cache, inputs) => inputs,
  complex: async (_id, _bus, _cache, _in, eventEmit) => {
    eventEmit("mirror", {
      id: "sample",
      type: "sample",
      attributes: {
        sample: "sample",
      },
    });
    return "complex";
  },
};

export default sampleResolver;
