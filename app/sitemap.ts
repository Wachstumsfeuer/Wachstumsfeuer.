import type { MetadataRoute } from "next";
import { books } from "@/data/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wachstumsfeuer.de";

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/buecher",
    "/kategorien",
    "/ueber",
    "/impressum",
    "/datenschutz",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${base}/buecher/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...bookPages];
}
