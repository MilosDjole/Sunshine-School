import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Send } from 'lucide-react';
import { notFound } from 'next/navigation';

interface BlogPost {
    slug: string;
    title: string;
    content: string;
    date: string;
    category: string;
    readTime: string;
    description: string;
    relatedProgram: {
        name: string;
        href: string;
    };
}

const blogPosts: Record<string, BlogPost> = {
    'kako-izabrati-skolu-stranih-jezika-za-decu-u-smederevu': {
        slug: 'kako-izabrati-skolu-stranih-jezika-za-decu-u-smederevu',
        title: 'Kako izabrati školu stranih jezika za decu u Smederevu',
        description: 'Odabir prave škole je ključna odluka za razvoj vašeg deteta. Saznajte na šta treba obratiti pažnju u Smederevu.',
        date: '2026-01-27',
        category: 'Saveti za roditelje',
        readTime: '8 min',
        relatedProgram: { name: 'Engleski jezik', href: '/programi/engleski-jezik' },
        content: `
            <p>Odabir prave škole stranih jezika za dete je jedna od najvažnijih odluka koje roditelji u Smederevu donose. Kvalitetna edukacija u ranom detinjstvu postavlja temelje za budući uspeh, ne samo u jeziku, već i u celokupnom kognitivnom razvoju.</p>
            
            <h2>1. Stručnost i iskustvo nastavnog kadra</h2>
            <p>Prva stvar na koju treba obratiti pažnju je ko predaje vašem detetu. U <strong>Sunshine School Smederevo</strong>, nastavu izvode isključivo diplomirani profesori sa višegodišnjim iskustvom. Za rad sa decom nije dovoljno samo poznavanje jezika; neophodno je poznavati pedagogiju i dečiju psihologiju.</p>
            
            <h2>2. Metodologija rada</h2>
            <p>Deca ne uče kao odrasli. Škola koju birate mora imati savremene metode koje se baziraju na komunikaciji, igri i interakciji. Ako se nastava svodi na puko ispisivanje gramatičkih pravila, dete će brzo izgubiti motivaciju.</p>
            
            <h2>3. Veličina grupa</h2>
            <p>Individualni pristup je nemoguć u prevelikim grupama. Idealna veličina grupe je do 8 učenika. To omogućava nastavniku da se posveti svakom detetu, prati njegov napredak i prilagodi tempo rada.</p>
            
            <h2>4. Lokacija i atmosfera u Smederevu</h2>
            <p>Prijatno i sigurno okruženje je ključno. Posetite školu, upoznajte nastavnike i osetite atmosferu. Lokacija u centru Smedereva je velika prednost za roditelje koji imaju gust raspored.</p>
            
            <h2>5. Kontinuitet i poverenje</h2>
            <p>Sunshine School posluje od 2009. godine. Više od 15 godina tradicije u Smederevu i preko 2.000 zadovoljnih roditelja su najbolja garancija kvaliteta.</p>
            
            <p>Pre nego što se odlučite, uvek zakažite besplatan probni čas. To je najbolji način da dete samo oceni da li mu se dopada način rada.</p>
        `
    },
    'engleski-za-decu-od-3-do-7-godina-nastava-u-sunshine-school': {
        slug: 'engleski-za-decu-od-3-do-7-godina-nastava-u-sunshine-school',
        title: 'Engleski za decu od 3 do 7 godina – kako izgleda nastava u Sunshine School',
        description: 'Učenje kroz igru i pesmu u Sunshine School Smederevo. Otkrijte kako najmlađi prirodno usvajaju engleski.',
        date: '2026-01-26',
        category: 'Engleski jezik',
        readTime: '7 min',
        relatedProgram: { name: 'Engleski jezik', href: '/programi/engleski-jezik' },
        content: `
            <p>Učenje engleskog jezika u uzrastu od 3 do 7 godina je najprirodniji proces. Deca u ovom periodu "upijaju" jezik kao sunđeri, bez straha od greške i sa velikim entuzijazmom.</p>
            
            <h2>Princip učenja kroz igru</h2>
            <p>U našoj školi u Smederevu, nastava za predškolce se zasniva na igri. Koristimo pesme, brojalice, lutkarsko pozorište i kreativne radionice. Cilj je da dete poveže engleski jezik sa pozitivnim emocijama i zabavom.</p>
            
            <h2>Razvoj jezičkih veština</h2>
            <p>U ovom uzrastu fokus je na slušanju i razumevanju, a zatim na usmenom izražavanju. Deca uče reči kroz konkretne predmete i akcije, baš kao što su učila i maternji jezik.</p>
            
            <h2>Zašto početi rano?</h2>
            <p>Rano učenje jezika dokazano podstiče razvoj inteligencije, poboljšava memoriju i razvija empatiju kroz upoznavanje novih kultura. Sunshine School Smederevo već 15 godina predvodi u edukaciji najmlađih.</p>
            
            <p>Naši profesori su obučeni da prepoznaju potrebe svakog deteta i stvore okruženje u kojem se ono oseća sigurno i motivisano da progovori na stranom jeziku.</p>
        `
    },
    'priprema-za-zavrsni-ispit-iz-matematike-saveti-za-roditelje': {
        slug: 'priprema-za-zavrsni-ispit-iz-matematike-saveti-za-roditelje',
        title: 'Priprema za završni ispit iz matematike – saveti za roditelje',
        description: 'Završni ispit ne mora biti stresan. Saznajte kako da podržite dete i obezbedite mu uspeh u Smederevu.',
        date: '2026-01-25',
        category: 'Matematika',
        readTime: '9 min',
        relatedProgram: { name: 'Priprema za završni ispit', href: '/programi/priprema-za-zavrsni-ispit' },
        content: `
            <p>Mala matura je jedan od najstresnijih perioda za učenike osmog razreda, ali i za njihove roditelje u Smederevu. Matematika je često predmet koji izaziva najviše brige.</p>
            
            <h2>Pravovremeni početak pripreme</h2>
            <p>Najveća greška je čekanje maja meseca. Kvalitetna priprema zahteva vreme za obnavljanje gradiva od petog do osmog razreda. U Sunshine School Smederevo organizujemo sistemske pripreme koje pokrivaju sve oblasti iz zvaničnih zbirki.</p>
            
            <h2>Razbijanje straha od brojeva</h2>
            <p>Strah je najveći neprijatelj znanja. Kroz individualni pristup, naši nastavnici pomažu učenicima da shvate logiku rešavanja zadataka, a ne samo da memoriju procedure. Kada učenik razume "zašto", nestaje strah od nepoznatog zadatka.</p>
            
            <h2>Kontinuirana vežba i simulacije</h2>
            <p>Redovno rešavanje testova iz prethodnih godina i simulacije ispita su ključni za sticanje samopouzdanja. Učenici koji prođu naše pripreme dolaze na ispit sigurni u sebe, znajući šta ih očekuje.</p>
            
            <p>Roditelji, vaša podrška je ključna. Nemojte vršiti pritisak, već obezbedite detetu adekvatnu pomoć i okruženje u kojem može nesmetano da uči.</p>
        `
    }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts[slug];
    if (!post) return { title: 'Blog Post Not Found' };

    return {
        title: `${post.title} | Blog Sunshine School Smederevo`,
        description: post.description,
        alternates: {
            canonical: `https://sunshineschool.rs/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url: `https://sunshineschool.rs/blog/${post.slug}`,
            type: 'article',
            publishedTime: post.date,
            authors: ['Sunshine School'],
            tags: [post.category, 'Smederevo'],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        notFound();
    }

    // Article Schema for SEO
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "image": "https://sunshineschool.rs/og-image.png",
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Organization",
            "name": "Sunshine School",
            "url": "https://sunshineschool.rs"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Sunshine School",
            "logo": {
                "@type": "ImageObject",
                "url": "https://sunshineschool.rs/logo.jpg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://sunshineschool.rs/blog/${post.slug}`
        },
        "articleSection": post.category,
        "keywords": [post.category, "Smederevo", "obrazovanje", "deca"],
        "inLanguage": "sr-RS"
    };

    // Breadcrumb Schema
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Početna",
                "item": "https://sunshineschool.rs"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://sunshineschool.rs/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://sunshineschool.rs/blog/${post.slug}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <div className="min-h-screen bg-white">
                {/* Header / Nav Back */}
                <div className="bg-warm-white/30 border-b border-warm-gray/10 py-4">
                    <div className="container mx-auto px-4">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-medium-gray hover:text-deep-blue transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Povratak na Blog
                        </Link>
                    </div>
                </div>

                <article className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            {/* Meta */}
                            <div className="flex flex-wrap gap-4 mb-8 text-sm text-medium-gray">
                                <span className="bg-sunshine-yellow/20 text-dark-gray font-bold px-3 py-1 rounded-full uppercase tracking-wider text-xs">
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.date).toLocaleDateString('sr-RS', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime} čitanja
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="font-display text-3xl md:text-5xl font-black text-dark-gray mb-8 leading-tight">
                                {post.title}
                            </h1>

                            {/* Article Content */}
                            <div
                                className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-dark-gray prose-p:text-medium-gray prose-strong:text-dark-gray"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Related Program CTA */}
                            <div className="mt-16 p-8 bg-gradient-to-br from-sunshine-yellow/10 to-deep-blue/10 rounded-3xl border border-sunshine-yellow/20">
                                <h3 className="font-display text-2xl font-bold text-dark-gray mb-4">
                                    Želite da saznate više o ovom programu?
                                </h3>
                                <p className="text-medium-gray mb-6 text-lg">
                                    Naš program {post.relatedProgram.name} je jedan od najtraženijih u Smederevu.
                                    Pridružite se grupi zadovoljnih roditelja.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href={post.relatedProgram.href}
                                        className="btn btn-primary text-center"
                                    >
                                        Saznaj više o programu
                                    </Link>
                                    <Link
                                        href="/kontakt"
                                        className="btn bg-white text-dark-gray border border-warm-gray/20 hover:border-sunshine-yellow text-center flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        Zakaži besplatan čas
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
