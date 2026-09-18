import type { MetadataRoute } from "next";
import { books } from "@/data/books";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://wachstumsfeuer.de"; return ["", "/buecher", "/kategorien", "/ueber", "/impressum", "/datenschutz"].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: path === "" ? 1 : .7 })).concat(books.map(book => ({ url: `${base}/buecher/${book.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 }))); }
