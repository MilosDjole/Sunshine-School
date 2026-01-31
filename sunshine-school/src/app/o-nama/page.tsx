import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, Award, Target, CheckCircle } from 'lucide-react';
import AboutHero from '@/components/sections/AboutHero';
import { getImages } from '@/lib/utils'; // Note: User requested gallery images for O Nama page

export const metadata: Metadata = {
    title: 'Sunshine School Smederevo | Škola stranih jezika i dodatne nastave za decu',
    description: 'Sunshine School je škola stranih jezika u Smederevu za decu od 3 do 14 godina. Engleski, nemački, srpski, matematika i priprema za završni ispit. Besplatan probni čas.',
    alternates: {
        canonical: 'https://sunshineschool.rs/o-nama',
    },
};

const values = [
    { icon: <Heart className="w-8 h-8" />, title: 'Ljubav prema radu', description: 'Posao koji radimo volimo i to se vidi u svakom času, svakom osmehu i svakom uspehu naših učenika.' },
    { icon: <Users className="w-8 h-8" />, title: 'Individualni pristup', description: 'Svako dete je jedinstveno. Grupe su male, a nastava prilagođena uzrastu, znanju i tempu učenja.' },
    { icon: <Award className="w-8 h-8" />, title: 'Kvalitet nastave', description: 'Časove izvode isključivo diplomirani i iskusni nastavnici, uz kontinuirano stručno usavršavanje.' },
    { icon: <Target className="w-8 h-8" />, title: 'Fokus na rezultate', description: 'Redovno pratimo napredak učenika i zajedno sa roditeljima gradimo put ka sigurnom znanju i uspehu.' },
];

const stats = [
    { value: '2.000+', label: 'Zadovoljnih učenika' },
    { value: '15+', label: 'Godina iskustva' },
    { value: '10+', label: 'Diplomiranih nastavnika' },
    { value: '5.0', label: 'Google ocena' },
];

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
            "name": "O nama",
            "item": "https://sunshineschool.rs/o-nama"
        }
    ]
};

export default function ONamaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <div className="min-h-screen">
                {/* Hero */}
                <AboutHero images={getImages('gallery')} />

                {/* Stats */}
                <section className="py-12 bg-deep-blue text-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="font-display text-4xl md:text-5xl font-bold text-sunshine-yellow mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-blue-100">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="font-display text-3xl font-bold text-dark-gray mb-6 text-center">
                                Naša misija
                            </h2>
                            <p className="text-lg text-medium-gray mb-8 leading-relaxed">
                                Naša misija u Sunshine School Smederevo je da svakom detetu pružimo
                                kvalitetno obrazovanje koje razvija znanje, samopouzdanje i ljubav prema učenju.
                                Verujemo da svako dete ima potencijal da napreduje kada mu se pristupi sa
                                razumevanjem, strpljenjem i profesionalnom podrškom.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed">
                                Zato stvaramo okruženje u kojem su učenje, igra i napredak prirodan proces, a ne obaveza.
                            </p>
                            <div className="bg-sunshine-yellow/10 rounded-2xl p-8 border border-sunshine-yellow/20">
                                <blockquote className="text-xl italic text-dark-gray">
                                    "Svako dete ima potencijal da zasija. Naš posao je da mu pomognemo da ga otkrije."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-16 bg-warm-white">
                    <div className="container mx-auto px-4">
                        <h2 className="font-display text-3xl font-bold text-dark-gray mb-12 text-center">
                            Naše vrednosti
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 rounded-full bg-sunshine-yellow/20 text-sunshine-yellow flex items-center justify-center mx-auto mb-4">
                                        {value.icon}
                                    </div>
                                    <h3 className="font-display font-semibold text-lg text-dark-gray mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-medium-gray text-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="font-display text-3xl font-bold text-dark-gray mb-8 text-center">
                                Zašto roditelji iz Smedereva biraju Sunshine School?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    'Isključivo diplomirani nastavnici sa iskustvom',
                                    'Male grupe (do 8 učenika)',
                                    'Savremena oprema i prijatno okruženje',
                                    'Redovno informisanje roditelja o napretku deteta',
                                    'Fleksibilni termini prilagođeni porodicama',
                                    'Centralna lokacija u Smederevu',
                                    'Više od 2.000 zadovoljnih učenika',
                                    'Besplatan probni čas bez obaveze',
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-warm-white p-4 rounded-xl">
                                        <CheckCircle className="w-5 h-5 text-success-green shrink-0" />
                                        <span className="text-dark-gray">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Timeline */}
                <section className="py-16 bg-warm-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="font-display text-3xl font-bold text-dark-gray mb-12 text-center">
                                Naša priča u Smederevu
                            </h2>
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-sunshine-yellow before:to-transparent">
                                {[
                                    { year: '2009', text: 'Otvaranje prve učionice u centru Smedereva' },
                                    { year: '2012', text: 'Proširenje kapaciteta i uvođenje nemačkog jezika' },
                                    { year: '2015', text: 'Više od 1.000 upisanih učenika' },
                                    { year: '2018', text: 'Pokretanje pripreme za završni ispit' },
                                    { year: '2022', text: 'Modernizacija učionica i nastavnih materijala' },
                                    { year: '2024', text: 'Preko 2.000 zadovoljnih učenika' },
                                ].map((milestone, index) => (
                                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sunshine-yellow text-dark-gray font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                            {index + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white p-4 rounded-xl shadow-sm border border-warm-gray">
                                            <div className="flex items-center justify-between space-x-2 mb-1">
                                                <div className="font-bold text-dark-gray">{milestone.year}.</div>
                                            </div>
                                            <div className="text-medium-gray text-sm">{milestone.text}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-sunshine-yellow">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="font-display text-3xl font-bold text-dark-gray mb-6">
                            Spremni da nas upoznate?
                        </h2>
                        <p className="text-dark-gray text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            Ako tražite školu u kojoj se znanje gradi postepeno, sa pažnjom i razumevanjem,
                            Sunshine School je pravo mesto za vaše dete.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center items-center">
                            <Link href="/kontakt" className="btn bg-dark-gray text-white hover:bg-gray-800 text-lg px-8 py-4">
                                👉 Zakažite besplatan probni čas
                            </Link>
                            <a href="tel:+38166433013" className="btn bg-white text-dark-gray hover:bg-warm-white text-lg px-8 py-4 border-2 border-dark-gray/10">
                                📞 Pozovite: 066 433 013
                            </a>
                        </div>
                        <p className="mt-6 text-dark-gray/60 font-medium italic">
                            Rado ćemo odgovoriti na sva vaša pitanja.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
