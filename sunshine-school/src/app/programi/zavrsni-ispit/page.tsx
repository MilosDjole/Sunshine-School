import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, FileText, Clock, Users, CheckCircle, Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Priprema za završni ispit u Smederevu',
    description: 'Specijalizovana i intenzivna priprema za završni ispit iz matematike i srpskog jezika za učenike 8. razreda u Smederevu. Testovi iz prethodnih godina, simulacije ispita, individualni pristup. Maksimalno 8 učenika po grupi.',
    keywords: ['priprema za završni ispit Smederevo', 'završni ispit matematika Smederevo', 'završni ispit srpski Smederevo', 'mala matura Smederevo', 'priprema za završni ispit 8 razred Smederevo'],
    alternates: {
        canonical: 'https://sunshineschool.rs/programi/zavrsni-ispit',
    },
    openGraph: {
        title: 'Priprema za završni ispit u Smederevu — Sunshine School',
        description: 'Intenzivna priprema za završni ispit iz matematike i srpskog jezika. Testovi iz prethodnih godina, simulacije, mali grupni rad.',
        url: 'https://sunshineschool.rs/programi/zavrsni-ispit',
    },
};

const features = [
    { icon: <FileText className="w-6 h-6" />, title: '40+ časova', desc: 'Po predmetu tokom pripreme' },
    { icon: <GraduationCap className="w-6 h-6" />, title: '5 probnih testova', desc: 'Simulacija pravih uslova' },
    { icon: <Users className="w-6 h-6" />, title: 'Max 8 učenika', desc: 'U grupi za maksimalnu pažnju' },
    { icon: <Clock className="w-6 h-6" />, title: 'Fleksibilni termini', desc: 'Prilagođeno vašem rasporedu' },
];

const curriculum = [
    { subject: 'Matematika', topics: ['Algebra i jednačine', 'Geometrija', 'Funkcije', 'Verovatnoća', 'Zadaci iz prethodnih godina'] },
    { subject: 'Srpski jezik', topics: ['Gramatika', 'Pravopis', 'Književnost', 'Analiza teksta', 'Pisanje eseja'] },
];

// Structured Data for Course
const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Priprema za završni ispit",
    "description": "Specijalizovana i intenzivna priprema za završni ispit iz matematike i srpskog jezika. Testovi iz prethodnih godina, simulacije ispita i individualni pristup svakom učeniku.",
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
    "educationalLevel": "Middle School",
    "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student",
        "audienceType": "8th grade students"
    },
    "courseCode": "FINAL-001",
    "inLanguage": "sr-RS",
    "teaches": "Mathematics, Serbian Language, Exam Preparation",
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
            "name": "Priprema za završni ispit",
            "item": "https://sunshineschool.rs/programi/zavrsni-ispit"
        }
    ]
};

export default function ZavrsniIspitPage() {
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
                <section className="bg-gradient-to-br from-sunshine-yellow/20 to-energy-orange/10 py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-3 bg-sunshine-yellow text-dark-gray px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                                <div className="relative w-6 h-6">
                                    <Image src="/icons/zavrsni-ispit.jpg" alt="Završni ispit" fill sizes="24px" className="object-cover rounded-md" />
                                </div>
                                <span>Za učenike 8. razreda</span>
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-gray mb-6">
                                Priprema za završni ispit u Smederevu
                            </h1>
                            <p className="text-lg text-medium-gray mb-8 max-w-2xl mx-auto">
                                Specijalizovana i intenzivna priprema za završni ispit iz matematike i srpskog jezika.
                                Testovi iz prethodnih godina, simulacije ispita i individualni pristup svakom učeniku.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link href="/kontakt" className="btn btn-primary text-lg px-8">
                                    Prijavite se sada
                                </Link>
                                <a href="tel:+38166433013" className="btn btn-secondary text-lg px-8">
                                    Pozovite: 066 433 013
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-12 bg-white border-b border-warm-gray">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-14 h-14 rounded-full bg-sunshine-yellow/20 text-sunshine-yellow flex items-center justify-center mx-auto mb-3">
                                        {feature.icon}
                                    </div>
                                    <div className="font-display font-semibold text-dark-gray">{feature.title}</div>
                                    <div className="text-sm text-medium-gray">{feature.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Program Details */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="font-display text-3xl font-bold text-dark-gray mb-12 text-center">
                            Program pripreme za završni ispit
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {curriculum.map((item, index) => (
                                <div key={index} className="card p-6">
                                    <h3 className="font-display text-xl font-semibold text-dark-gray mb-4 flex items-center gap-2">
                                        {item.subject === 'Matematika' ? '📐' : '📖'} {item.subject}
                                    </h3>
                                    <ul className="space-y-2">
                                        {item.topics.map((topic, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-success-green shrink-0" />
                                                <span className="text-medium-gray">{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What's Included */}
                <section className="py-16 bg-warm-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="font-display text-3xl font-bold text-dark-gray mb-8 text-center">
                                Šta uključuje priprema?
                            </h2>
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Obrada kompletnog gradiva',
                                        'Rešavanje testova iz prethodnih godina',
                                        'Simulacija završnog ispita',
                                        'Analiza grešaka i slabih tačaka',
                                        'Materijali za rad kod kuće',
                                        'Strategije rešavanja zadataka',
                                        'Upravljanje vremenom na ispitu',
                                        'Redovno izveštavanje roditelja',
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-sunshine-yellow flex items-center justify-center text-sm font-bold text-dark-gray">
                                                ✓
                                            </div>
                                            <span className="text-dark-gray">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Us */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="font-display text-3xl font-bold text-dark-gray mb-6">
                                Zašto Sunshine School za završni ispit?
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6 mt-8">
                                {[
                                    { stat: '99%', label: 'Upisalo željenu školu' },
                                    { stat: '15+', label: 'Godina iskustva' },
                                    { stat: '500+', label: 'Uspešnih učenika' },
                                ].map((item, index) => (
                                    <div key={index} className="bg-sunshine-yellow/10 rounded-xl p-6">
                                        <div className="font-display text-4xl font-bold text-sunshine-yellow mb-2">{item.stat}</div>
                                        <div className="text-medium-gray">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-dark-gray text-white">
                    <div className="container mx-auto px-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-sunshine-yellow mb-4">
                            <Calendar className="w-6 h-6" />
                            <span className="font-semibold">Upis u toku!</span>
                        </div>
                        <h2 className="font-display text-3xl font-bold mb-4">
                            Osigurajte mesto za svoje dete
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Broj mesta je ograničen na 8 učenika po grupi. Prijavite se na vreme
                            i osigurajte kvalitetnu pripremu za završni ispit.
                        </p>
                        <Link href="/kontakt" className="btn btn-primary text-lg px-8">
                            Prijavite se odmah
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
