import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import MapSection from '@/components/sections/MapSection';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
    title: 'Kontakt | Sunshine School Smederevo - Zakažite Probni Čas',
    description: 'Kontaktirajte Sunshine School u Smederevu. Adresa: Karađorđeva 44, 11300 Smederevo. Telefon: 066 433 013. Email: skolasunshine@gmail.com. Radno vreme: Pon-Pet 17:00-21:00, Sub 10:00-16:00. Zakažite probni čas!',
    alternates: {
        canonical: 'https://sunshineschool.rs/kontakt',
    },
    openGraph: {
        title: 'Kontaktirajte Sunshine School Smederevo',
        description: 'Kontaktirajte nas u Smederevu. Karađorđeva 44. Telefon: 066 433 013.',
        url: 'https://sunshineschool.rs/kontakt',
    },
};

const contactInfo = [
    {
        icon: <MapPin className="w-6 h-6" />,
        title: 'Adresa',
        content: 'Karađorđeva 44\n11300 Smederevo, Srbija',
        link: 'https://www.google.com/maps/search/?api=1&query=Sunshine+School,+Kara%C4%91or%C4%91eva+44,+11300+Smederevo',
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: 'Telefon',
        content: '066 433 013',
        link: 'tel:+38166433013',
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email',
        content: 'skolasunshine@gmail.com',
        link: 'mailto:skolasunshine@gmail.com',
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: 'Radno vreme',
        content: 'Pon-Pet: 17:00-21:00\nSub: 10:00-16:00',
        link: null,
    },
];

export default function KontaktPage() {
    const breadcrumbSchema = {
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
                "name": "Kontakt",
                "item": "https://sunshineschool.rs/kontakt"
            }
        ]
    };

    return (
        <main className="pt-24 pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Hero Section */}
            <section className="bg-warm-white py-16 md:py-24">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-gray mb-6">
                            Tu smo za vas
                        </h1>
                        <p className="text-xl text-medium-gray leading-relaxed mb-8">
                            Imate pitanja o našim programima ili želite da zakažete besplatan probni čas?
                            Naš tim je spreman da odgovori na sva vaša pitanja.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-custom -mt-12 md:-mt-16">
                <div className="max-w-6xl mx-auto">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-dark-gray/5 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-sky-blue/10 rounded-xl flex items-center justify-center text-deep-blue mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-display font-bold text-dark-gray mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-medium-gray whitespace-pre-line mb-6 flex-grow">
                                    {item.content}
                                </p>
                                {item.link ? (
                                    <a
                                        href={item.link}
                                        target={item.link.startsWith('http') ? '_blank' : undefined}
                                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="text-deep-blue font-semibold hover:text-sky-blue transition-colors flex items-center gap-2 group"
                                    >
                                        Pronađite nas
                                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                ) : null}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* More Info */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-dark-gray/5">
                                <h2 className="text-2xl font-display font-bold text-dark-gray mb-6">
                                    Besplatan probni čas
                                </h2>
                                <p className="text-medium-gray mb-8">
                                    Pre upisa, svako dete ima pravo na besplatan probni čas. Ovo je idealna prilika
                                    da se upoznamo, odredimo nivo znanja i da dete oseti atmosferu u našoj školi.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/kontakt" className="btn btn-primary">
                                        Zakaži probni čas
                                    </Link>
                                    <a href="tel:+38166433013" className="btn btn-secondary">
                                        Pozovi: 066 433 013
                                    </a>
                                </div>
                            </div>

                            <div className="bg-deep-blue rounded-2xl p-8 shadow-lg text-white">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                        <MessageSquare size={24} />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold">Pišite nam</h2>
                                </div>
                                <p className="text-sky-blue/80 mb-8 leading-relaxed">
                                    Odgovaramo na sve upite u najkraćem mogućem roku.
                                    Slobodno nam pošaljite poruku putem email-a, SMS-a ili Vibera.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-sunshine-yellow rounded-full"></div>
                                        <span>Odgovaramo u roku od 24h</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-sunshine-yellow rounded-full"></div>
                                        <span>Dostupni na Viberu i WhatsApp-u</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map */}
                        <div className="lg:sticky lg:top-24">
                            <MapSection />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <ContactCTA />
            </div>
        </main>
    );
}
