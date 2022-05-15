import contentful from "contentful";

const space = process.env.VITE_NAMINGTHINGS_CONTENTFUL_SPACE_ID;
if (space === undefined) {
  throw new Error("Missing env var: VITE_NAMINGTHINGS_CONTENTFUL_SPACE_ID");
}

const accessToken = process.env.VITE_NAMINGTHINGS_CONTENTFUL_ACCESS_TOKEN;
if (accessToken === undefined) {
  throw new Error("Missing env var: VITE_NAMINGTHINGS_CONTENTFUL_ACCESS_TOKEN");
}

const client = contentful.createClient({ space, accessToken });

export type FeedEntry = {
  title: string;
  slug: string;
  excerpt: any;
  publishDate: string;
};

export type Article = {
  title: string;
  slug: string;
  publishDate: string;
  content: any;
};

function getExcerpt(content: any) {
  const documentContent = content.content;
  const indexOfFold = documentContent.findIndex((node: any) => node.nodeType === "hr");
  const excerpt = documentContent.slice(0, indexOfFold);
  return {
    nodeType: "document",
    content: excerpt,
  };
}

function getContent(content: any) {
  const documentContent = content.content;
  const contentWithoutHr = documentContent.filter((node: any) => node.nodeType !== "hr");
  return {
    nodeType: "document",
    content: contentWithoutHr,
  };
}

export async function getFeed(): Promise<FeedEntry[]> {
  const entries = await client.getEntries();
  const feedEntries = entries.items.filter((item) => !item.fields.isPinned);
  return feedEntries.map((item) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: getExcerpt(item.fields.content),
    publishDate: "",
  }));
}

export async function getEntryBySlug(slug: string) {
  const entries = await client.getEntries();
  const matchingEntries = entries.items.filter((item) => item.fields.slug === slug);
  const entry = matchingEntries[0];
  const article = {
    createdAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
    title: entry.fields.title,
    content: getContent(entry.fields.content),
    isPinned: entry.fields.isPinned,
  };
  return article;
}
