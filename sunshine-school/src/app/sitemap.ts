import { MetadataRoute } from 'next';

// Blog posts slugs - in production this would come from CMS
const blogPosts = [
    {
        slug: 'kako-izabrati-skolu-stranih-jezika-za-decu-u-smederevu',
        date: '2026-01-27',
    },
    {
        slug: 'engleski-za-decu-od-3-do-7-godina-nastava-u-sunshine-school',
        date: '2026-01-26',
    },
    {
        slug: 'priprema-za-zavrsni-ispit-iz-matematike-saveti-za-roditelje',
        date: '2026-01-25',
    },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sunshineschool.rs';

    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/o-nama`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/programi`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/programi/engleski-jezik`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/programi/nemacki-jezik`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/programi/srpski-jezik`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/programi/matematika`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/programi/zavrsni-ispit`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kontakt`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/galerija`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        // Add blog posts to sitemap
        ...blogPosts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ];

    return routes;
}
