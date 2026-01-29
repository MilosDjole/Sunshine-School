import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, PenTool, FileText, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pripremna i dodatna nastava srpskog jezika u Smederevu za osnovce',
    description: 'Pomoć u savladavanju gradiva iz srpskog jezika za učenike osnovne škole u Smederevu. Individualni pristup, iskusni profesori, poboljšanje ocena. Pravopis, gramatika i književnost.',
    keywords: ['dodatna nastava srpski jezik Smederevo', 'časovi srpskog jezika Smederevo', 'gramatika srpski Smederevo', 'pravopis Smederevo', 'srpski jezik za osnovce Smederevo'],
    alternates: {
        canonical: 'https://sunshineschool.rs/programi/srpski-jezik',
    },
    openGraph: {
        title: 'Dodatna nastava srpskog jezika za osnovce u Smederevu — Sunshine School',
        description: 'Profesionalna pomoć u savladavanju gradiva iz srpskog jezika za učenike 5-8 razreda. Pravopis, gramatika, književnost.',
        url: 'https://sunshineschool.rs/programi/srpski-jezik',
    },
};

const topics = [
    { icon: <PenTool className="w-6 h-6" />, title: 'Pravopis i gramatika', description: 'Pravilno pisanje, interpunkcija i gramatička pravila.' },
    { icon: <BookOpen className="w-6 h-6" />, title: 'Književnost', description: 'Analiza književnih dela, lektira i pisanje eseja.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Pisanje sastava', description: 'Tehnike pisanja, struktura teksta i stilsko izražavanje.' },
];

// Structured Data for Course
const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Dodatna nastava srpskog jezika",
    "description": "Profesionalna pomoć u savladavanju gradiva iz srpskog jezika za učenike od 5. do 8. razreda. Pravopis, gramatika, književnost i priprema za kontrolne zadatke.",
    "provider": {
        "@type": "EducationalOrganization",
        "name": "Sunshine School",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Karađorđeva 44",
            "addressLocality": "Smederevo",
            "postalCode": "11300",
            "addressCountry": "RS"
        }
    },
    "educationalLevel": "Elementary, Middle School",
    "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student",
        "audienceType": "Students grades 5-8"
    },
    "courseCode": "SR-001",
    "inLanguage": "sr-RS",
    "teaches": "Serbian Language, Grammar, Literature",
    "areaServed": {
        "@type": "City",
        "name": "Smederevo"
    }
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
            "name": "Programi",
            "item": "https://sunshineschool.rs/programi"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Srpski jezik",
            "item": "https://sunshineschool.rs/programi/srpski-jezik"
        }
    ]
};

export default function SrpskiJezikPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-br from-success-green/10 to-deep-blue/10 py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 bg-success-green/10 text-success-green px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <div className="relative w-8 h-5 shadow-sm overflow-hidden rounded-sm">
                                <Image src="/flags/rs.png" alt="Srbija" fill sizes="32px" className="object-cover" />
                            </div>
                            <span>Srpski jezik — Dodatna nastava</span>
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-gray mb-6">
                            Dodatna nastava i časovi srpskog jezika u Smederevu za osnovce
                        </h1>
                        <p className="text-lg text-medium-gray mb-8 max-w-2xl mx-auto">
                            Profesionalna pomoć u savladavanju gradiva iz srpskog jezika za učenike od 5. do 8. razreda.
                            Pravopis, gramatika, književnost i priprema za kontrolne zadatke.
                        </p>
                        <Link href="/kontakt" className="btn btn-primary">
                            Zakaži konsultacije
                        </Link>
                    </div>
                </div>
            </section>

            {/* Topics */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-3xl font-bold text-dark-gray mb-12 text-center">
                        Šta pokrivamo
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {topics.map((topic, index) => (
                            <div key={index} className="card p-6 text-center">
                                <div className="w-14 h-14 rounded-full bg-success-green/10 text-success-green flex items-center justify-center mx-auto mb-4">
                                    {topic.icon}
                                </div>
                                <h3 className="font-display font-semibold text-lg text-dark-gray mb-2">{topic.title}</h3>
                                <p className="text-medium-gray text-sm">{topic.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-warm-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl font-bold text-dark-gray mb-8 text-center">
                            Kako pomažemo vašem detetu
                        </h2>
                        <div className="space-y-4">
                            {[
                                'Identifikacija slabih tačaka i rad na njima',
                                'Priprema za kontrolne i pismene zadatke',
                                'Pomoć pri izradi domaćih zadataka',
                                'Razvijanje ljubavi prema čitanju',
                                'Poboljšanje pismenosti i izražavanja',
                                'Redovna komunikacija sa roditeljima o napretku',
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-success-green shrink-0" />
                                    <span className="text-dark-gray">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-success-green text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-3xl font-bold mb-4">
                        Poboljšajte ocene iz srpskog jezika
                    </h2>
                    <p className="text-green-100 mb-8">
                        Zakažite konsultacije i napravite plan za poboljšanje ocena.
                    </p>
                    <Link href="/kontakt" className="btn bg-white text-success-green hover:bg-warm-white">
                        Zakažite termin
                    </Link>
                </div>
            </section>
        </div>
        </>
    );
}
