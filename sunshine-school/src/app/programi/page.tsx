import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Programi - Časovi stranih jezika i dodatna nastava u Smederevu',
    description: 'Sunshine School nudi časove engleskog, nemačkog, srpskog jezika, matematike i pripremu za završni ispit za decu od 3 do 14 godina u Smederevu. Besplatan probni čas za sve programe.',
    alternates: {
        canonical: 'https://sunshineschool.rs/programi',
    },
    openGraph: {
        title: 'Obrazovni programi - Sunshine School Smederevo',
        description: 'Širok spektar programa za decu od 3 do 14 godina. Engleski, nemački, srpski, matematika i priprema za završni ispit.',
        url: 'https://sunshineschool.rs/programi',
    },
};

const programs = [
    {
        id: 'engleski',
        title: 'Engleski jezik',
        shortDesc: 'Interaktivna nastava za uzrast 3-14 godina',
        description: 'Komunikativni pristup, učenje kroz igru, interaktivna nastava. Male grupe do 8 učenika.',
        icon: <div className="relative w-16 h-10 shadow-sm"><Image src="/flags/gb.png" alt="English" fill sizes="64px" className="object-cover rounded-sm" /></div>,
        href: '/programi/engleski-jezik',
        color: 'deep-blue',
        bgGradient: 'from-deep-blue/10 to-sky-blue/10',
        ages: '3-14 godina',
        popular: true,
    },
    {
        id: 'nemacki',
        title: 'Nemački jezik',
        shortDesc: 'Od početničkog do naprednog nivoa',
        description: 'Interaktivni časovi nemačkog jezika, fokus na komunikaciju i praktičnu primenu jezika kroz igru.',
        icon: <div className="relative w-16 h-10 shadow-sm"><Image src="/flags/de.png" alt="Deutsch" fill sizes="64px" className="object-cover rounded-sm" /></div>,
        href: '/programi/nemacki-jezik',
        color: 'energy-orange',
        bgGradient: 'from-energy-orange/10 to-sunshine-yellow/10',
        ages: '6-14 godina',
        popular: false,
    },
    {
        id: 'srpski',
        title: 'Srpski jezik',
        shortDesc: 'Dodatna nastava za 5-8. razred',
        description: 'Pravopis, gramatika, književnost i priprema za školske testove. Individualni pristup.',
        icon: <div className="relative w-16 h-10 shadow-sm"><Image src="/flags/rs.png" alt="Srbija" fill sizes="64px" className="object-cover rounded-sm" /></div>,
        href: '/programi/srpski-jezik',
        color: 'success-green',
        bgGradient: 'from-success-green/10 to-deep-blue/10',
        ages: '5-8 razred',
        popular: false,
    },
    {
        id: 'matematika',
        title: 'Matematika',
        shortDesc: 'Pomoć za učenike od 5. do 8. razreda',
        description: 'Rad na slabim tačkama, priprema za kontrolne i testove, razvijanje logičkog razmišljanja.',
        icon: <div className="relative w-16 h-16 shadow-sm"><Image src="/icons/matematika.png" alt="Matematika" fill sizes="64px" className="object-cover rounded-2xl" /></div>,
        href: '/programi/matematika',
        color: '[#9C27B0]',
        bgGradient: 'from-[#9C27B0]/10 to-deep-blue/10',
        ages: '5-8 razred',
        popular: false,
    },
    {
        id: 'zavrsni',
        title: 'Priprema za završni ispit',
        shortDesc: 'Intenzivna priprema za 8. razred',
        description: 'Sveobuhvatna priprema iz matematike i srpskog jezika. Testovi iz prethodnih godina, simulacije ispita.',
        icon: <div className="relative w-16 h-16 shadow-sm"><Image src="/icons/zavrsni-ispit.jpg" alt="Završni ispit" fill sizes="64px" className="object-cover rounded-2xl" /></div>,
        href: '/programi/zavrsni-ispit',
        color: 'sunshine-yellow',
        bgGradient: 'from-sunshine-yellow/20 to-energy-orange/10',
        ages: '8. razred',
        popular: true,
    },
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
            "name": "Programi",
            "item": "https://sunshineschool.rs/programi"
        }
    ]
};

export default function ProgramiPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <div className="min-h-screen">
                {/* Hero */}
                <section className="bg-gradient-to-br from-sunshine-yellow/10 to-deep-blue/10 py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-gray mb-6">
                                Naši obrazovni programi
                            </h1>
                            <p className="text-lg text-medium-gray">
                                Sunshine School nudi širok spektar programa za decu od 3 do 14 godina.
                                Svi naši programi su prilagođeni uzrastu i individualnim potrebama svakog učenika.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Programs Grid */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {programs.map((program) => (
                                <Link
                                    key={program.id}
                                    href={program.href}
                                    className={`group relative card p-6 bg-gradient-to-br ${program.bgGradient} border-2 border-transparent hover:border-${program.color}/30 transition-all`}
                                >
                                    {program.popular && (
                                        <span className="absolute top-4 right-4 bg-sunshine-yellow text-dark-gray text-xs font-bold px-3 py-1 rounded-full">
                                            Popularno
                                        </span>
                                    )}

                                    <div className={`text-${program.color} mb-4`}>
                                        {program.icon}
                                    </div>

                                    <h2 className="font-display text-2xl font-semibold text-dark-gray mb-2 group-hover:text-deep-blue transition-colors">
                                        {program.title}
                                    </h2>

                                    <span className="inline-block bg-white/80 text-medium-gray text-xs font-medium px-3 py-1 rounded-full mb-3">
                                        {program.ages}
                                    </span>

                                    <p className="text-medium-gray mb-4">
                                        {program.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-deep-blue font-medium group-hover:gap-3 transition-all">
                                        <span>Saznaj više</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-warm-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="font-display text-3xl font-bold text-dark-gray mb-4">
                            Niste sigurni koji program je pravi?
                        </h2>
                        <p className="text-medium-gray mb-8 max-w-2xl mx-auto">
                            Zakažite besplatne konsultacije i pomoći ćemo vam da izaberete program
                            koji najbolje odgovara potrebama vašeg deteta.
                        </p>
                        <Link href="/kontakt" className="btn btn-primary">
                            Zakažite konsultacije
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
