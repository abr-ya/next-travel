import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skQrH2AN5qi81bobXQf3zIrOikhl9W4vZ8EKkTVZLLkxuzqsFWGaFycRva9ikYZRvK9ZVzdB0wGGHnYjf5zWxLIxPXd0KNVNBggss3MXZu272YigbvnmN5jePulaRfCF9nJ8Jy3UrlWGscRFKGx4mkFNOdgyqrgXeRshLRvYepI4Gt8ReO6a",
  //   token: process.env.NEXT_PUBLIC_SANITY,
});

export const getClient = (usePreview: any) => (usePreview ? previewClient : sanityClient);
