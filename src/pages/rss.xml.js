import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: "https://luxury-ganache-586815.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
    });
}