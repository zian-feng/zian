import Link from "next/link";
import { getAllWritingPosts, formatPostDate} from "@/lib/writing";

export default function WritingPage(){

    const posts = getAllWritingPosts();
    
    return(
        <main className="min-h-screen w-full bg-white text-foreground dark:bg-black">
            
            <section className="mx-auto w-full max-w-3xl bg-white px-16 py-20 dark:bg-black">
                <h1 className="font-news text-2xl font-semibold tracking-tight">
                    Writing
                </h1>

                <div className="mt-12">
                    {posts.map((post) =>(
                        <Link 
                            key={post.slug}
                            href={`/writing/${post.slug}`}
                            className="block transition-colors hover:text-zinc-500"
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h2 className="mt-1 font-serif text-l font-semibold">
                                        {post.title}
                                    </h2>

                                    {/* {post.tags.length > 0 && (
                                        <p className="mt-2 font-mono text-xs text-zinc-500">
                                            {post.tags.join(' / ')}
                                        </p>
                                    )} */}
                                </div>       
                                <time className="font-sans text-sm text-zinc-500">
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
