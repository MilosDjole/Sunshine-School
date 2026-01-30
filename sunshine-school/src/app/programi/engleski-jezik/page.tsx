import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Users, Clock, Award, BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Časovi engleskog jezika za decu u Smederevu',
    description: 'Sunshine School nudi kvalitetne časove engleskog jezika za decu u Smederevu uzrasta od 3 do 14 godina. Interaktivna nastava, mali grupni rad (do 8 učenika), iskusni profesori. Besplatan probni čas!',
    keywords: ['časovi engleskog jezika Smederevo', 'engleski za decu Smederevo', 'škola engleskog jezika Smederevo', 'učenje engleskog Smederevo', 'engleski jezik za decu Smederevo'],
    alternates: {
        canonical: 'https://sunshineschool.rs/programi/engleski-jezik',
    },
    openGraph: {
        title: 'Časovi engleskog jezika za decu u Smederevu — Sunshine School',
        description: 'Interaktivna nastava engleskog za decu 3-14 godina. Mali grupni rad, iskusni profesori, komunikativni pristup.',
        url: 'https://sunshineschool.rs/programi/engleski-jezik',
    },
};

const benefits = [
    { icon: <Users className="w-6 h-6" />, text: 'Male grupe (do 8 učenika)' },
    { icon: <Award className="w-6 h-6" />, text: 'Diplomirani profesori' },
    { icon: <BookOpen className="w-6 h-6" />, text: 'Interaktivna nastava' },
    { icon: <Clock className="w-6 h-6" />, text: 'Fleksibilni termini' },
];

const ageGroups = [
    {
        title: 'Engleski za predškolce',
        ages: '3-6 godina',
        description: 'Učenje kroz igru, pesme i kreativne aktivnosti. Fokus na izgovoru i osnovnom vokabularu.',
    },
    {
        title: 'Engleski za osnovce',
        ages: '7-10 godina',
        description: 'Razvijanje svih jezičkih veština: govor, slušanje, čitanje i pisanje. Priprema za školske testove.',
    },
    {
        title: 'Engleski za tinejdžere',
        ages: '11-14 godina',
        description: 'Napredna gramatika, konverzacija i razvijanje komunikacijskih veština.',
    },
];

const faqs = [
    {
        question: 'Koliko traje čas engleskog u Sunshine School?',
        answer: 'Časovi traju 45 minuta za predškolce i 90 minuta za starije uzraste. Održavaju se dva puta nedeljno.',
    },
    {
        question: 'Kakve su grupe za engleski jezik?',
        answer: 'Grupe imaju maksimalno 8 učenika, što omogućava individualni pristup svakom detetu i više vremena za konverzaciju.',
    },
    {
        question: 'Da li se izdaju sertifikati?',
        answer: 'Da, na kraju školske godine učenici dobijaju sertifikat o završenom nivou.',
    },
    {
        question: 'Koliko košta čas engleskog u Smederevu?',
        answer: 'Mesečna školarina zavisi od programa i učestalosti časova. Kontaktirajte nas za aktuelni cenovnik i mogućnost popusta za braću i sestre.',
    },
];

// Structured Data for Course
const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Časovi engleskog jezika za decu",
    "description": "Kvalitetni časovi engleskog jezika za decu uzrasta od 3 do 14 godina. Komunikativni pristup, učenje kroz igru, interaktivna nastava. Male grupe do 8 učenika.",
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
    "educationalLevel": "Preschool, Elementary, Middle School",
    "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student",
        "audienceType": "Children ages 3-14"
    },
    "courseCode": "EN-001",
    "inLanguage": "sr-RS",
    "teaches": "English Language, Communication, Speaking Skills",
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
            "name": "Engleski jezik",
            "item": "https://sunshineschool.rs/programi/engleski-jezik"
        }
    ]
};

export default function EngleskiJezikPage() {
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
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-deep-blue/10 to-sky-blue/10 py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-3 bg-deep-blue/10 text-deep-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <div className="relative w-8 h-5 shadow-sm overflow-hidden rounded-sm">
                                    <Image src="/flags/gb.png" alt="English" fill sizes="32px" className="object-cover" />
                                </div>
                                <span>Engleski jezik — Najpopularniji program</span>
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-gray mb-6">
                                Časovi engleskog jezika za decu u Smederevu
                            </h1>
                            <p className="text-lg text-medium-gray mb-8 max-w-2xl mx-auto">
                                Sunshine School nudi kvalitetne časove engleskog jezika za decu uzrasta od 3 do 14 godina.
                                Naš komunikativni pristup i interaktivna nastava čine učenje zabavnim i efikasnim.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link href="/kontakt" className="btn btn-primary">
                                    Zakaži besplatan probni čas
                                </Link>
                                <a href="tel:+38166433013" className="btn btn-secondary">
                                    Pozovi: 066 433 013
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-12 bg-white border-b border-warm-gray">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3 justify-center">
                                    <div className="text-deep-blue">{benefit.icon}</div>
                                    <span className="font-medium text-dark-gray">{benefit.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="font-display text-3xl font-bold text-dark-gray mb-6 text-center">
                                Zašto birati časove engleskog u Sunshine School Smederevu?
                            </h2>
                            <div className="prose prose-lg max-w-none text-medium-gray">
                                <p>
                                    U Sunshine School u Smederevu verujemo da je učenje engleskog jezika najuspešnije kada je
                                    zabavno i interaktivno. Naši diplomirani profesori koriste savremene metode nastave koje
                                    motivišu decu i podstiču njihovu radoznalost.
                                </p>
                                <p>
                                    Sa više od 15 godina iskustva u radu sa decom, razvili smo programe koji su prilagođeni
                                    svakom uzrastu. Od učenja kroz igru za najmlađe, do napredne gramatike i konverzacije
                                    za starije učenike — svako dete dobija program koji odgovara njihovim potrebama.
                                </p>
                            </div>

                            {/* Checklist */}
                            <div className="mt-8 grid md:grid-cols-2 gap-4">
                                {[
                                    'Komunikativni pristup — fokus na govor',
                                    'Učenje kroz igru i pesme',
                                    'Native speaker audio materijali',
                                    'Redovno praćenje napretka',
                                    'Besplatni probni čas',
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-success-green shrink-0" />
                                        <span className="text-dark-gray">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Age Groups */}
                <section className="py-16 bg-warm-white">
                    <div className="container mx-auto px-4">
                        <h2 className="font-display text-3xl font-bold text-dark-gray mb-12 text-center">
                            Programi engleskog jezika po uzrastima
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {ageGroups.map((group, index) => (
                                <div key={index} className="card p-6 text-center">
                                    <div className="w-16 h-16 rounded-full bg-deep-blue/10 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-3xl">🎓</span>
                                    </div>
                                    <h3 className="font-display font-semibold text-xl text-dark-gray mb-2">
                                        {group.title}
                                    </h3>
                                    <span className="inline-block bg-sunshine-yellow/20 text-dark-gray text-sm font-medium px-3 py-1 rounded-full mb-3">
                                        {group.ages}
                                    </span>
                                    <p className="text-medium-gray text-sm">
                                        {group.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="font-display text-3xl font-bold text-dark-gray mb-8 text-center">
                                Često postavljana pitanja
                            </h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-warm-white rounded-xl p-6">
                                        <h3 className="font-display font-semibold text-dark-gray mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-medium-gray">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-deep-blue text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="font-display text-3xl font-bold mb-4">
                            Spremni da započnete?
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Zakažite besplatan probni čas engleskog jezika u našoj školi u Smederevu
                            i uverite se u kvalitet naše nastave.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/kontakt" className="btn bg-sunshine-yellow text-dark-gray hover:bg-sun-yellow-light">
                                Zakaži probni čas
                            </Link>
                            <Link href="/programi" className="btn bg-white/10 text-white hover:bg-white/20">
                                Ostali programi <ArrowRight className="w-4 h-4 ml-2 inline" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
