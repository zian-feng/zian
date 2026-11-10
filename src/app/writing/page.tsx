import Image from "next/image";
import Link from "next/link";
import { formatPostMonthDay, getAllWritingPosts } from "@/lib/writing";

export default function WritingPage(){

    const posts = getAllWritingPosts();
    const postsByYear = new Map<string, typeof posts>();

    for (const post of posts) {
        const date = new Date(post.date);
        const year = isNaN(date.getTime()) ? "—" : String(date.getUTCFullYear());
        const group = postsByYear.get(year) ?? [];

        group.push(post);
        postsByYear.set(year, group);
    }

    const groups = [...postsByYear]
        .map(([year, posts]) => ({ year, posts }))
        .sort((a, b) => {
            if (a.year === "—") return 1;
            if (b.year === "—") return -1;
            return Number(b.year) - Number(a.year);
        });
    
    return(
        <main className="min-h-screen w-full bg-white text-foreground dark:bg-[#0A0A0A]">
            
            <section className="relative mx-auto w-full max-w-3xl bg-white px-16 py-20 dark:bg-[#0A0A0A]">
                <Link
                    href="/"
                    className="mb-10 inline-flex items-center gap-1 text-sm italic text-zinc-500 transition-colors hover:text-foreground lg:absolute lg:right-[calc(100%+3rem)] lg:top-20 lg:mb-0"
                >
                    <Image src="/icons/chevron-left.svg" alt="" width={16} height={16} className="dark:invert" />
                    index
                </Link>
                <h1 className="font-news text-xl font-normal tracking-tight">
                    Writing
                </h1>

                <div className="group/toc mt-12">
                    {groups.map(({ year, posts }) => (
                        <div key={year} className="relative border-t border-zinc-200 dark:border-zinc-800">
                            <span className="pointer-events-none absolute left-0 top-3 select-none font-sans text-sm leading-6 tabular-nums text-zinc-500">
                                {year}
                            </span>
                            {posts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/writing/${post.slug}`}
                                    className="ml-16 md:ml-[25%] flex items-center justify-between gap-3 md:gap-4 border-t border-zinc-200 py-3 first:border-t-transparent dark:border-zinc-800 transition-opacity duration-150 group-hover/toc:[&:not(:hover)]:opacity-40"
                                >
                                    <h2 className="font-serif text-base font-normal">{post.title}</h2>
                                    <time dateTime={post.date} className="shrink-0 md:mx-2 font-sans text-sm tabular-nums text-zinc-500">
                                        {formatPostMonthDay(post.date)}
                                    </time>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
