import { getFeed } from "$lib/content";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const feed = await getFeed();
  return {
    body: {
      feed,
    },
  };
};
