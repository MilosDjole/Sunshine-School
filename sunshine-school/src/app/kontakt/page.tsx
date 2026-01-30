import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
    title: 'Kontakt - Sunshine School Smederevo',
    description: 'Kontaktirajte Sunshine School u Smederevu. Adresa: Karađorđeva 44, 11300 Smederevo. Telefon: 066 433 013. Email: skolasunshine@gmail.com. Radno vreme: Pon-Pet 17:00-21:00, Sub 10:00-16:00. Zakažite probni čas!',
    alternates: {
        canonical: 'https://sunshineschool.rs/kontakt',
    },
    openGraph: {
        title: 'Kontakt - Sunshine School Smederevo',
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
                                < a href = "tel:+38166433013" className = "btn btn-secondary" >
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
            "name": "Kontakt",
            "item": "https://sunshineschool.rs/kontakt"
        }
    ]
};

export default function KontaktPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <div className="min-h-screen">
                {/* Hero */}
                <section className="bg-gradient-to-br from-deep-blue/10 to-sunshine-yellow/10 py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-gray mb-6">
                                Kontaktirajte nas
                            </h1>
                            <p className="text-lg text-medium-gray">
                                Imate pitanja ili želite zakazati probni čas? Kontaktirajte nas putem telefona,
                                emaila ili popunite formu ispod. Radujemo se vašem javljanju!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="bg-warm-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                                    <div className="w-14 h-14 rounded-full bg-sunshine-yellow/20 text-sunshine-yellow flex items-center justify-center mx-auto mb-4">
                                        {info.icon}
                                    </div>
                                    <h3 className="font-display font-semibold text-dark-gray mb-2">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-deep-blue hover:text-sky-blue transition-colors whitespace-pre-line"
                                        >
                                            {info.content}
                                        </a>
                                    ) : (
                                        <p className="text-medium-gray whitespace-pre-line">{info.content}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <ContactCTA />

                {/* Map Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="font-display text-3xl font-bold text-dark-gray mb-8 text-center">
                            Gde se nalazimo
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                                <iframe
                                    src="https://maps.google.com/maps?q=Sunshine+School,+Kara%C4%91or%C4%91eva+44,+11300+Smederevo&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sunshine School lokacija - Karađorđeva 44, Smederevo"
                                />
                            </div>
                            <div className="flex flex-wrap gap-4 justify-center mt-6">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Sunshine+School,+Kara%C4%91or%C4%91eva+44,+11300+Smederevo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Otvori u Google Maps
                                </a>
                                <a href="tel:+381664330013" className="btn btn-secondary">
                                    Pozovi: 066 433 013
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Media */}
                <section className="py-16 bg-warm-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="font-display text-2xl font-bold text-dark-gray mb-6">
                            Pratite nas na društvenim mrežama
                        </h2>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://www.instagram.com/skola_mysunshine/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md hover:scale-110 transition-all text-[#E4405F]"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.facebook.com/skola.sunshine"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md hover:scale-110 transition-all text-[#1877F2]"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@sunshine_skola_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md hover:scale-110 transition-all text-black"
                                aria-label="TikTok"
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
