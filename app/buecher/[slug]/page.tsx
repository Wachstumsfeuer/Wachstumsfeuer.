import type { Metadata } from "next"; import Link from "next/link"; import { notFound } from "next/navigation"; import { books, getBook } from "@/data/books";
type BookPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return books.map(book => ({ slug: book.slug })); }
export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> { const { slug } = await params; const book=getBook(slug);
export default async function BookPage({ params }: BookPageProps) { const { slug } = await params; const book=getBook(slug);
