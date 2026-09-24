import Image from "next/image";
import Link from "next/link";
import { getAllWritingPosts, formatPostDate} from "@/lib/writing";

export default function WritingPage(){

    const posts = getAllWritingPosts();
    
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

                <div className="mt-12">
                    {posts.map((post) =>(
                        <Link 
                            key={post.slug}
                            href={`/writing/${post.slug}`}
                            className="block text-zinc-500 transition-colors hover:text-foreground"
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h2 className="mt-1 font-serif text-l font-normal">
                                        {post.title}
                                    </h2>

                                    {/* {post.tags.length > 0 && (
                                        <p className="mt-2 font-mono text-xs text-zinc-500">
                                            {post.tags.join(' / ')}
                                        </p>
                                    )} */}
                                </div>       
                                <time className="font-sans text-sm">
                                    {formatPostDate(post.date)}
                                </time>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
