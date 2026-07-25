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
        <main className="min-h-screen w-full bg-background text-foreground">
            <article className="mx-auto w-full max-w-3xl px-16 py-20">
                <Link
                    href="/writing"
                    className="font-mono text-sm text-zinc-500 transition-colors hover:text-foreground"
                >
                    back
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
