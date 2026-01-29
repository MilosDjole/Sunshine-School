import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import SocialCards from '@/components/sections/SocialCards';
import { getImages } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Blog - Edukativni članci za roditelje',
    description: 'Korisni saveti za roditelje o učenju stranih jezika, obrazovanju dece i pripremi za školu. Blog Sunshine School Smederevo.',
    alternates: {
        canonical: 'https://sunshineschool.rs/blog',
    },
};

// Placeholder blog posts - in real app this would come from CMS
const blogPosts = [
    {
        id: 1,
        slug: 'kako-izabrati-skolu-stranih-jezika-za-decu-u-smederevu',
        title: 'Kako izabrati školu stranih jezika za decu u Smederevu',
        excerpt: 'Odabir prave škole je ključna odluka za razvoj vašeg deteta. Saznajte na šta treba obratiti pažnju – od stručnosti kadra do metoda rada u Smederevu.',
        date: '2026-01-27',
        category: 'Saveti za roditelje',
        readTime: '8 min',
    },
    {
        id: 2,
        slug: 'engleski-za-decu-od-3-do-7-godina-nastava-u-sunshine-school',
        title: 'Engleski za decu od 3 do 7 godina – kako izgleda nastava u Sunshine School',
        excerpt: 'Učenje kroz igru, pesmu i smeh. Otkrijte kako naši najmlađi polaznici u Smederevu prirodno usvajaju engleski jezik od prvog dana.',
        date: '2026-01-26',
        category: 'Engleski jezik',
        readTime: '7 min',
    },
    {
        id: 3,
        slug: 'priprema-za-zavrsni-ispit-iz-matematike-saveti-za-roditelje',
        title: 'Priprema za završni ispit iz matematike – saveti za roditelje',
        excerpt: 'Završni ispit ne mora biti stresan. Delimo sa vama praktične savete kako da podržite dete i obezbedite mu uspeh na maloj maturi.',
        date: '2026-01-25',
        category: 'Matematika',
        readTime: '9 min',
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-br from-sunshine-yellow/10 to-deep-blue/10 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-gray mb-6">
                            Blog
                        </h1>
                        <p className="text-lg text-medium-gray">
                            Korisni saveti i informacije za roditelje o obrazovanju dece,
                            učenju stranih jezika i pripremi za školu.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-8">
                            {blogPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="card p-6 hover:shadow-card-hover transition-shadow"
                                >
                                    <div className="flex flex-wrap gap-3 mb-3">
                                        <span className="bg-sunshine-yellow/20 text-dark-gray text-xs font-medium px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-medium-gray text-sm">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(post.date).toLocaleDateString('sr-RS', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </span>
                                        <span className="text-medium-gray text-sm">
                                            {post.readTime} čitanja
                                        </span>
                                    </div>

                                    <h2 className="font-display text-2xl font-semibold text-dark-gray mb-3 hover:text-deep-blue transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-medium-gray mb-4">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-deep-blue font-medium hover:gap-3 transition-all"
                                    >
                                        Pročitaj više
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </article>
                            ))}
                        </div>

                        {/* Coming Soon Notice */}
                        <div className="mt-12 text-center p-8 bg-warm-white rounded-2xl border border-warm-gray/20">
                            <h3 className="font-display text-xl font-semibold text-dark-gray mb-2">
                                Uskoro još članaka!
                            </h3>
                            <p className="text-medium-gray">
                                Radimo na novim edukativnim sadržajima koji će vam pomoći u razvoju i obrazovanju vašeg deteta.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <div className="border-t border-warm-gray/20">
                <SocialCards images={getImages('social')} />
            </div>

            {/* CTA */}
            <section className="py-16 bg-deep-blue text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-3xl font-bold mb-4">
                        Imate pitanja?
                    </h2>
                    <p className="text-blue-100 mb-8">
                        Kontaktirajte nas za više informacija o našim programima.
                    </p>
                    <Link href="/kontakt" className="btn bg-sunshine-yellow text-dark-gray hover:bg-sun-yellow-light">
                        Kontaktirajte nas
                    </Link>
                </div>
            </section>
        </div>
    );
}
