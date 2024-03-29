import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API,
});

export const getClient = (usePreview: any) => (usePreview ? previewClient : sanityClient);
