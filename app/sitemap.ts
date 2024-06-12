import { type MetadataRoute } from "next";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AfyaMed",
  description: "High Quality Digital Care.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : "https://afyamed.com",
  // links: { github: "https://github.com/sadmann7/shadcn-table" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [""].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    {
      url: "https://afyamed.com",
      priority: 1,
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://afyamed.com/blog",
      changeFrequency: "hourly",
      priority: 0.8,
    },
    ...routes,
  ];
}

// https://www.youtube.com/watch?v=w29phXIag-4

// https://lev.engineer/blog/how-to-create-a-dynamic-sitemap-for-your-next-js-14-blog-a-comprehensive-guide-to-boost-seo
