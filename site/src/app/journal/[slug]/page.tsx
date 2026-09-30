import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLink } from "@/components/Actions";
import { ClosingInvite } from "@/components/ClosingInvite";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { RegisterActions } from "@/components/RegisterActions";
import { articles, getArticle, readingMinutes } from "@/content/articles";
import { getProgram } from "@/content/programs";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import styles from "./article.module.css";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.shortTitle,
    description: article.excerpt,
    path: `/journal/${article.slug}`,
    type: "article",
    publishedTime: article.published,
    modifiedTime: article.updated,
  });
}

const dateFormat = new Intl.DateTimeFormat("he-IL", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const program = getProgram(article.relatedProgram);
  const next = articles[(articles.indexOf(article) + 1) % articles.length];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.published,
          dateModified: article.updated,
          inLanguage: "he",
          mainEntityOfPage: absoluteUrl(`/journal/${article.slug}`),
          author: { "@type": "Person", "@id": absoluteUrl("/#ortal"), name: site.name },
        }}
      />

      <article>
        <header className={`container ${styles.head}`}>
          <nav aria-label="פירורי לחם" className={styles.crumb}>
            <Link href="/journal">מאמרים</Link>
          </nav>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={`t-meta ${styles.meta}`}>
            {site.name} · <time dateTime={article.published}>{dateFormat.format(new Date(article.published))}</time> ·{" "}
            {readingMinutes(article)} דקות קריאה
          </p>
        </header>

        <Photo
          name={article.image}
          priority
          sizes="(max-width: 72rem) 100vw, 72rem"
          className={styles.cover}
        />

        <div className={`container ${styles.body}`}>
          <p className={styles.standfirst}>{article.excerpt}</p>
          {article.sections.map((s) => (
            <section key={s.heading} className={styles.section}>
              <h2 className={styles.h2}>{s.heading}</h2>
              {s.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <aside className={`container ${styles.after}`} aria-label="להמשך">
        <div className={styles.afterCol}>
          <p className="t-meta">המאמר הבא</p>
          <Link href={`/journal/${next.slug}`} className={styles.nextLink}>
            {next.title}
          </Link>
        </div>
        <div className={styles.afterCol}>
          <ArrowLink href="/journal">לכל המאמרים</ArrowLink>
        </div>
      </aside>

      {program ? (
        <ClosingInvite title={program.title} body={program.tagline}>
          <RegisterActions program={program} compact />
          <ArrowLink href={program.href ?? `/programs/${program.slug}`}>לפרטים</ArrowLink>
        </ClosingInvite>
      ) : null}
    </>
  );
}
