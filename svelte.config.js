import staticAdapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: staticAdapter({
      pages: "build",
      assets: "build",
      fallback: "app.html",
      precompress: false,
    }),
    trailingSlash: "always",
    prerender: {
      default: true,
      onError: ({ path }) => {
        if (path.includes("linkedin.com")) {
          // this is fine
        } else {
          throw new Error(`Died while trying to pre-render ${path}`);
        }
      },
    },
  },
};

export default config;
