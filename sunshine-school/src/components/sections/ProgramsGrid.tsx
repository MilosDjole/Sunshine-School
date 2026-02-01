import Link from 'next/link';
import Image from 'next/image';

interface Program {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    color: string;
    bgColor: string;
    ages: string;
}

const programs: Program[] = [
    {
        id: 'engleski',
        title: 'Engleski jezik',
        description: 'Interaktivna nastava engleskog jezika za decu svih uzrasta. Komunikativni pristup i učenje kroz igru.',
        icon: <div className="relative w-16 h-10 shadow-sm"><Image src="/flags/gb.png" alt="English" fill sizes="64px" className="object-cover rounded-sm" /></div>,
        href: '/programi/engleski-jezik',
        color: 'text-deep-blue',
        bgColor: 'bg-deep-blue/10',
        ages: '3-14 godina',
    },
    {
        id: 'nemacki',
        title: 'Nemački jezik',
        description: 'Časovi nemačkog jezika od početničkog do naprednog nivoa prilagođeni deci.',
        icon: <div className="relative w-16 h-10 shadow-sm"><Image src="/flags/de.png" alt="Deutsch" fill sizes="64px" className="object-cover rounded-sm" /></div>,
        href: '/programi/nemacki-jezik',
        color: 'text-energy-orange',
        bgColor: 'bg-energy-orange/10',
        ages: '6-14 godina',
    },
    {
        id: 'srpski',
        title: 'Srpski jezik',
        description: 'Dodatna nastava srpskog jezika. Pravopis, gramatika, književnost i priprema za testove.',
        icon: <div className="relative w-16 h-10 shadow-sm"><Image src="/flags/rs.png" alt="Srbija" fill sizes="64px" className="object-cover rounded-sm" /></div>,
        href: '/programi/srpski-jezik',
        color: 'text-success-green',
        bgColor: 'bg-success-green/10',
        ages: '5-8 razred',
    },
    {
        id: 'matematika',
        title: 'Matematika',
        description: 'Pomoć u savladavanju gradiva iz matematike. Individualni pristup i rad na slabim tačkama.',
        icon: <div className="relative w-16 h-16 shadow-sm"><Image src="/icons/matematika.png" alt="Matematika" fill sizes="64px" className="object-cover rounded-2xl" /></div>,
        href: '/programi/matematika',
        color: 'text-[#9C27B0]',
        bgColor: 'bg-[#9C27B0]/10',
        ages: '5-8 razred',
    },
    {
        id: 'zavrsni',
        title: 'Priprema za završni ispit',
        description: 'Specijalizovana priprema za završni ispit. Testovi iz prethodnih godina i simulacije ispita.',
        icon: <div className="relative w-16 h-16 shadow-sm"><Image src="/icons/zavrsni-ispit.jpg" alt="Završni ispit" fill sizes="64px" className="object-cover rounded-2xl" /></div>,
        href: '/programi/zavrsni-ispit',
        color: 'text-sunshine-yellow',
        bgColor: 'bg-sunshine-yellow/20',
        ages: '8. razred',
    },
];

export default function ProgramsGrid() {
    return (
        <section className="pt-8 pb-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-gray mb-4">
                        Naši programi za decu u Smederevu
                    </h2>
                    <p className="text-medium-gray max-w-2xl mx-auto">
                        Naši programi su pažljivo osmišljeni kako bi deci pružili znanje, sigurnost i samopouzdanje u učenju, uz stalno praćenje napretka.
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program) => (
                        <Link
                            key={program.id}
                            href={program.href}
                            className="group card p-6 hover:shadow-card-hover"
                        >
                            {/* Icon */}
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                {program.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-display font-semibold text-xl text-dark-gray mb-2 group-hover:text-deep-blue transition-colors">
                                {program.title}
                            </h3>

                            {/* Age Badge */}
                            <span className="inline-block bg-warm-gray text-medium-gray text-xs font-medium px-3 py-1 rounded-full mb-3">
                                {program.ages}
                            </span>

                            {/* Description */}
                            <p className="text-medium-gray text-sm leading-relaxed mb-4">
                                {program.description}
                            </p>

                            {/* Learn More Link */}
                            <div className="flex items-center gap-2 text-deep-blue font-medium text-sm group-hover:gap-3 transition-all">
                                <span>Saznaj više</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-medium-gray mb-4">
                        Niste sigurni koji program je pravi za vaše dete?
                    </p>
                    <Link href="/kontakt" className="btn btn-primary">
                        Zakažite besplatne konsultacije
                    </Link>
                </div>
            </div>
        </section>
    );
}
