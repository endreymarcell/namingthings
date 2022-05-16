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
  lastUpdateDate?: string;
  content: any;
  isPinned: boolean;
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
    publishDate: formatDate(item.sys.createdAt),
  }));
}

export async function getEntryBySlug(slug: string): Promise<Article> {
  const entries = await client.getEntries();
  const matchingEntries = entries.items.filter((item) => item.fields.slug === slug);
  const entry = matchingEntries[0];
  return {
    slug,
    title: entry.fields.title,
    publishDate: formatDate(entry.sys.createdAt),
    lastUpdateDate: formatDate(entry.sys.updatedAt),
    content: getContent(entry.fields.content),
    isPinned: entry.fields.isPinned,
  };
}

function formatDate(date: string): string {
  return date.replace("T", " ").substring(0, 16);
}
