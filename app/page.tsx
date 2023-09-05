import Container from "./components/Container";
import Hero from "./components/hero/Hero";
import ClientOnly from "./components/ClientOnly";
import Articles from "./components/articles/Articles";
import { useGetArticles } from "./hooks/useGetArticles";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string[] | string | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const take =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 12;

  const articles = await useGetArticles({ page, take });

  const hasMore = articles?.length === take;

  return (
    <ClientOnly>
      <div className="pt-[5rem] pb-5">
        <Hero />
        <Container>
          <Articles articles={articles} />
          <div className="flex justify-center w-full">
            {hasMore ? (
              <Link
                href={`/?page=${page + 1}`}
                className="p-3 bg-transparent border rounded-md text-sm font-semibold text-neutral-500"
              >
                Load More
              </Link>
            ) : (
              <button
                disabled
                className="p-3 bg-transparent border rounded-md text-sm font-semibold text-neutral-500 cursor-not-allowed"
              >
                Load More
              </button>
            )}
          </div>
        </Container>
      </div>
    </ClientOnly>
  );
}
