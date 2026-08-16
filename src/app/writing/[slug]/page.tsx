import Link from "next/link"
import { notFound } from "next/navigation";
import { getWritingPostsBySlug, getWritingSlugs, WritingPostPreview, formatPostDate} from "@/lib/writing";

type writingPostPageProps = {
    params: Promise<{slug: string;}>;
};

export function generateStaticParams(){
    return getWritingSlugs().map((slug) => ({slug}));
}

export async function generateMetadata({ params } : writingPostPageProps){
    const { slug } = await params;

    try{
        const post = await getWritingPostsBySlug(slug);

        return{
            title: post.title,
        };
        } catch{
            return{
                title : "Writing",
            };
    }
}

export default async function WritingPostPage({params,}: writingPostPageProps){
    const {slug} = await params;

    let post;

    try{
        post = await getWritingPostsBySlug(slug);
    } catch{
        notFound();
    }

    return(
        <main className="min-h-screen w-full bg-white text-foreground dark:bg-black">
            <article className="mx-auto w-full max-w-3xl bg-white px-16 py-20 dark:bg-black">
                <Link
                    href="/writing"
                    className="font-mono text-sm text-zinc-500 transition-colors hover:text-foreground"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
                </Link>
                <h1 className="mt-4 font-serif text-xl font-semibold tracking-tight">
                    {post.title}
                </h1>
                
                <time className="font-serif text-sm text-zinc-500">
                    {formatPostDate(post.date)}
                </time>

                {post.tags.length > 0 && (
                    <p>
                        {post.tags.join(' / ')}
                    </p>
                )}

                <div 
                    className="mt-10 space-y-6 leading-8 [&_code]:font-mono [&_pre] 
                    overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-zinc-100 [&_pre]:p-4 
                    [&_pre]:text-sm dark:[&_pre]:bg-zinc-900"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
            </article>
        </main>
    );
}
