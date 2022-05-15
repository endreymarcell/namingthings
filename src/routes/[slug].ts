import { getEntryBySlug } from "$lib/content";
import type { RequestHandler } from "@sveltejs/kit";

type Params = {
  slug: string;
};

type Args = { params: Params };

export const get: RequestHandler<Params> = async (args: Args) => {
  const article = await getEntryBySlug(args.params.slug);
  return {
    body: {
      article,
    },
  };
};
