import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark'
import html from 'remark-html';


const writingDirectory = path.join(process.cwd(), "src/content/writing");

export type WritingPost = {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    contentHtml: string;
};

export type WritingPostPreview = Omit<WritingPost, "contentHtml">;

export function getAllWritingPosts(): WritingPostPreview[]{
    const fileNames = fs.readdirSync(writingDirectory);

    const posts = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md/, '');
            const fullPath = path.join(writingDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const { data } = matter(fileContents);

            return {
                slug,
                title: String(data.title ?? slug),
                date: String(data.date ?? ''),
                tags: Array.isArray(data.tags) ? data.tags: [],
            };
        });
    return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getWritingPostsBySlug(
    slug: string,
): Promise<WritingPost> {
    const fullPath = path.join(writingDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const {data, content} = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: String(data.title ?? slug),
        date:  String(data.date ?? ''),
        tags:  Array.isArray(data.tags) ? data.tags : [],
        contentHtml,
    };
}

export function getWritingSlugs() : string[] {
    const fileNames = fs.readdirSync(writingDirectory);

    return fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => fileName.replace(/\.md$/, ""));

}

export function formatPostDate(date: string){
    const parsedDate = new Date(date);

    const month = new Intl.DateTimeFormat('en-US', {month:'short'}).format(parsedDate);
    const day = new Intl.DateTimeFormat('en-US', {day:'2-digit'}).format(parsedDate);
    const year = new Intl.DateTimeFormat('en-US', {year:'numeric'}).format(parsedDate);

    return `${month}. ${day}, ${year}`;
}