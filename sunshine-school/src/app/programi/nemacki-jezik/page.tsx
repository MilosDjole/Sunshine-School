import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Škola nemačkog jezika u Smederevu za decu i tinejdžere',
    description: 'Sunshine School organizuje kvalitetne časove nemačkog jezika za decu u Smederevu. Od početničkog do naprednog nivoa uz interaktivan rad, male grupe i iskusne profesore. Besplatan probni čas.',
    keywords: ['časovi nemačkog jezika Smederevo', 'nemački za decu Smederevo', 'škola nemačkog jezika Smederevo', 'učenje nemačkog jezika Smederevo', 'nemački jezik Smederevo'],
    alternates: {
        canonical: 'https://sunshineschool.rs/programi/nemacki-jezik',
    },
    openGraph: {
        title: 'Časovi nemačkog jezika za decu u Smederevu — Sunshine School',
        description: 'Kvalitetna nastava nemačkog jezika za decu 6-14 godina. Interaktivni časovi, mali grupni rad, iskusni profesori.',
        url: 'https://sunshineschool.rs/programi/nemacki-jezik',
    },
};

const levels = [
    { level: 'A1', title: 'Početni nivo', description: 'Osnove nemačkog jezika, jednostavna komunikacija.' },
    { level: 'A2', title: 'Elementarni nivo', description: 'Svakodnevna komunikacija i proširenje vokabulara.' },
    { level: 'B1', title: 'Srednji nivo', description: 'Složenija gramatika i konverzacija na razne teme.' },
];

// Structured Data for Course
const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Časovi nemačkog jezika za decu",
    "description": "Kvalitetni časovi nemačkog jezika za decu i tinejdžere u Smederevu. Od početničkog do naprednog nivoa uz interaktivne metode i učenje kroz igru.",
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
        "audienceType": "Children ages 6-14"
    },
    "courseCode": "DE-001",
    "inLanguage": "sr-RS",
    "teaches": "German Language",
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
            "name": "Nemački jezik",
            "item": "https://sunshineschool.rs/programi/nemacki-jezik"
        }
    ]
};

export default function NemackiJezikPage() {
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
                <section className="bg-gradient-to-br from-energy-orange/10 to-sunshine-yellow/10 py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-3 bg-energy-orange/10 text-energy-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <div className="relative w-8 h-5 shadow-sm overflow-hidden rounded-sm">
                                    <Image src="/flags/de.png" alt="Deutsch" fill sizes="32px" className="object-cover" />
                                </div>
                                <span>Nemački jezik</span>
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-gray mb-6">
                                Škola nemačkog jezika u Smederevu za decu i tinejdžere
                            </h1>
                            <p className="text-lg text-medium-gray mb-8 max-w-2xl mx-auto">
                                Kvalitetni časovi nemačkog jezika za decu i tinejdžere u Smederevu.
                                Od početničkog do naprednog nivoa uz interaktivne metode i učenje kroz igru.
                            </p>
                            <Link href="/kontakt" className="btn btn-primary">
                                Zakaži besplatan probni čas
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Levels */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="font-display text-3xl font-bold text-dark-gray mb-12 text-center">
                            Nivoi nemačkog jezika
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {levels.map((item) => (
                                <div key={item.level} className="card p-6 text-center border-2 border-energy-orange/20 hover:border-energy-orange/50 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-energy-orange text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                        {item.level}
                                    </div>
                                    <h3 className="font-display font-semibold text-xl text-dark-gray mb-2">{item.title}</h3>
                                    <p className="text-medium-gray text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-warm-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto prose prose-lg">
                            <h2>Zašto učiti nemački u Sunshine School?</h2>
                            <p>
                                Nemački jezik je jedan od najvažnijih jezika u Evropi i otvara vrata
                                studiranju i karijeri u Nemačkoj, Austriji i Švajcarskoj. U Sunshine School
                                u Smederevu nudimo kvalitetne časove nemačkog za decu od 6 do 14 godina.
                            </p>
                            <h3>Naša metodologija</h3>
                            <ul>
                                <li>Komunikativni pristup sa fokusom na govor</li>
                                <li>Autentični materijali i audio zapisi</li>
                                <li>Zanimljive aktivnosti prilagođene uzrastu</li>
                                <li>Male grupe za maksimalnu pažnju</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-energy-orange text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="font-display text-3xl font-bold mb-4">
                            Započnite učenje nemačkog danas!
                        </h2>
                        <p className="text-orange-100 mb-8">
                            Kontaktirajte nas za više informacija ili zakazivanje probnog časa.
                        </p>
                        <Link href="/kontakt" className="btn bg-white text-energy-orange hover:bg-warm-white">
                            Kontaktirajte nas
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
