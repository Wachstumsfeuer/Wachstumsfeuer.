import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books, getBook } from "@/data/books";

type BookPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata(
  { params }: BookPageProps,
): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);

  return book
    ? {
        title: `${book.title} von ${book.author}`,
        description: book.description,
        openGraph: {
          title: `${book.title} – Wachstumsfeuer`,
          description: book.description,
        },
      }
    : {};
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) notFound();

  return (
    <main>
      <section className="px-5 py-12 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[.75fr_1.25fr] md:items-center">
          <div
            className="cover book-shadow grain flex flex-col justify-between p-8 sm:p-10"
            style={{ backgroundColor: book.accent }}
          >
            <span className="text-xs font-bold uppercase tracking-[.18em] text-black/55">
              {book.category}
            </span>
            <h1 className="display max-w-[10ch] text-5xl font-bold leading-[.92] sm:text-6xl">
              {book.title}
            </h1>
            <p className="font-bold">{book.author}</p>
          </div>

          <div>
            <Link className="text-sm font-semibold text-[#244d3e] underline" href="/buecher">
              ← Zurück zur Übersicht
            </Link>
            <p className="mt-9 text-xs font-bold uppercase tracking-[.18em] text-[#d8613b]">
              {book.category}
            </p>
            <h2 className="display mt-3 text-5xl font-bold leading-none sm:text-6xl">
              {book.title}
            </h2>
            <p className="mt-3 text-lg font-semibold">von {book.author}</p>
            <p className="mt-7 text-lg leading-8 text-black/65">{book.description}</p>

            <a
              href="#affiliate-link"
              className="mt-8 inline-block rounded-full bg-[#244d3e] px-6 py-3 font-bold text-white hover:bg-[#183a2d]"
            >
              Buch ansehen <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#eee8dc] px-5 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <article>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#d8613b]">
              Warum ich es empfehle
            </p>
            <h2 className="display mt-3 text-3xl font-bold">Eine ehrliche Einordnung.</h2>
            <p className="mt-5 leading-8 text-black/68">{book.recommendation}</p>
          </article>

          <article>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#d8613b]">
              Für wen geeignet?
            </p>
            <h2 className="display mt-3 text-3xl font-bold">Für dich, wenn …</h2>
            <p className="mt-5 leading-8 text-black/68">{book.audience}</p>
          </article>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#d8613b]">
            Das bleibt hängen
          </p>
          <h2 className="display mt-3 text-4xl font-bold">Die wichtigsten Erkenntnisse</h2>

          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {book.insights.map((insight, index) => (
              <li key={insight} className="border-t-2 border-[#c7e76c] pt-4">
                <span className="text-sm font-bold text-[#d8613b]">
                  0{index + 1}
                </span>
                <p className="mt-3 font-semibold leading-7">{insight}</p>
              </li>
            ))}
          </ol>

          <p id="affiliate-link" className="mt-12 text-sm text-black/48">
            Hinweis: Der Button ist für einen späteren Affiliate-Link vorbereitet.
          </p>
        </div>
      </section>
    </main>
  );
}
