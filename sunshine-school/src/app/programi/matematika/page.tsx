import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator, TrendingUp, Target, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Dodatna nastava matematike u Smederevu za učenike 5-8 razreda',
    description: 'Sunshine School pruža dodatnu nastavu matematike u Smederevu za učenike od 5. do 8. razreda. Pomoć u savladavanju gradiva, priprema za testove, individualan rad sa iskusnim profesorima.',
    keywords: ['dodatna nastava matematike Smederevo', 'časovi matematike za osnovce Smederevo', 'priprema za test iz matematike Smederevo', 'matematika za decu Smederevo'],
    alternates: {
        canonical: 'https://sunshineschool.rs/programi/matematika',
    },
    openGraph: {
        title: 'Dodatna nastava matematike za osnovce u Smederevu — Sunshine School',
        description: 'Pomoć u savladavanju gradiva iz matematike za učenike 5-8 razreda. Individualni pristup, rad na slabim tačkama, priprema za testove.',
        url: 'https://sunshineschool.rs/programi/matematika',
    },
};

const grades = [
    { range: '5-6 razred', focus: 'Razlomci, decimalni brojevi, procenti, uglovi' },
    { range: '7-8 razred', focus: 'Algebra, jednačine, funkcije, priprema za završni ispit' },
];

// Structured Data for Course
const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Dodatna nastava matematike",
    "description": "Pomoć u savladavanju gradiva iz matematike za učenike od 5. do 8. razreda. Individualni pristup, rad na slabim tačkama i priprema za testove.",
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
    "courseCode": "MATH-001",
    "inLanguage": "sr-RS",
    "teaches": "Mathematics, Algebra, Geometry",
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
            "name": "Matematika",
            "item": "https://sunshineschool.rs/programi/matematika"
        }
    ]
};

export default function MatematikaPage() {
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
            <section className="bg-gradient-to-br from-[#9C27B0]/10 to-deep-blue/10 py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 bg-[#9C27B0]/10 text-[#9C27B0] px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <div className="relative w-8 h-8 shadow-sm">
                                <Image src="/icons/matematika.png" alt="Matematika" fill sizes="32px" className="object-cover rounded-md" />
                            </div>
                            <span>Matematika za 5-8 razred</span>
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-gray mb-6">
                            Dodatna nastava i časovi matematike u Smederevu za osnovce
                        </h1>
                        <p className="text-lg text-medium-gray mb-8 max-w-2xl mx-auto">
                            Pomoć u savladavanju gradiva iz matematike za učenike od 5. do 8. razreda.
                            Individualni pristup, rad na slabim tačkama i priprema za testove.
                        </p>
                        <Link href="/kontakt" className="btn btn-primary">
                            Zakaži konsultacije
                        </Link>
                    </div>
                </div>
            </section>

            {/* Grade Groups */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-3xl font-bold text-dark-gray mb-12 text-center">
                        Programi po razredima
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {grades.map((grade, index) => (
                            <div key={index} className="card p-6 border-2 border-[#9C27B0]/20 hover:border-[#9C27B0]/50 transition-colors">
                                <div className="w-14 h-14 rounded-full bg-[#9C27B0]/10 text-[#9C27B0] flex items-center justify-center mb-4">
                                    <Calculator className="w-6 h-6" />
                                </div>
                                <h3 className="font-display font-semibold text-lg text-dark-gray mb-2">{grade.range}</h3>
                                <p className="text-medium-gray text-sm">{grade.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="py-16 bg-warm-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl font-bold text-dark-gray mb-8 text-center">
                            Naš pristup nastavi matematike
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: <Target className="w-6 h-6" />, title: 'Dijagnoza znanja', desc: 'Identifikujemo praznine u znanju i kreiramo individualni plan.' },
                                { icon: <TrendingUp className="w-6 h-6" />, title: 'Postepeno napredovanje', desc: 'Gradimo znanje korak po korak, od osnova do složenijih tema.' },
                                { icon: <Calculator className="w-6 h-6" />, title: 'Praktični zadaci', desc: 'Mnogo vežbanja sa zadacima sličnim onima na testovima.' },
                                { icon: <CheckCircle className="w-6 h-6" />, title: 'Praćenje napretka', desc: 'Redovno izveštavanje roditelja o napretku deteta.' },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#9C27B0]/10 text-[#9C27B0] flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark-gray mb-1">{item.title}</h3>
                                        <p className="text-medium-gray text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#9C27B0] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-3xl font-bold mb-4">
                        Matematika ne mora biti teška!
                    </h2>
                    <p className="text-purple-100 mb-8">
                        Zakažite konsultacije i napravimo plan za bolje ocene iz matematike.
                    </p>
                    <Link href="/kontakt" className="btn bg-white text-[#9C27B0] hover:bg-warm-white">
                        Zakažite termin
                    </Link>
                </div>
            </section>
        </div>
        </>
    );
}
