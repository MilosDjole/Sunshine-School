import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
    { href: '/o-nama', label: 'O nama' },
    { href: '/programi', label: 'Programi' },
    { href: '/galerija', label: 'Galerija' },
    { href: '/blog', label: 'Blog' },
    { href: '/kontakt', label: 'Kontakt' },
];

const programs = [
    { href: '/programi/engleski-jezik', label: 'Engleski jezik' },
    { href: '/programi/nemacki-jezik', label: 'Nemački jezik' },
    { href: '/programi/srpski-jezik', label: 'Srpski jezik' },
    { href: '/programi/matematika', label: 'Matematika' },
    { href: '/programi/zavrsni-ispit', label: 'Priprema za završni ispit' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-gray text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <div className="relative w-32 h-32">
                                <Image
                                    src="/logo.png"
                                    alt="Sunshine School"
                                    fill
                                    className="object-contain"
                                    sizes="128px"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-300 text-sm mb-4">
                            Škola stranih jezika i dodatne nastave za decu uzrasta od 3 do 14 godina u Smederevu.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/skola_mysunshine/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sunshine-yellow hover:text-dark-gray transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/skola.sunshine"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sunshine-yellow hover:text-dark-gray transition-all"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@sunshine_skola_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sunshine-yellow hover:text-dark-gray transition-all"
                                aria-label="TikTok"
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-display font-semibold mb-4 text-sunshine-yellow">
                            Brzi linkovi
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-sunshine-yellow transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-lg font-display font-semibold mb-4 text-sunshine-yellow">
                            Programi
                        </h3>
                        <ul className="space-y-2">
                            {programs.map((program) => (
                                <li key={program.href}>
                                    <Link
                                        href={program.href}
                                        className="text-gray-300 hover:text-sunshine-yellow transition-colors text-sm"
                                    >
                                        {program.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-display font-semibold mb-4 text-sunshine-yellow">
                            Kontakt
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-sunshine-yellow shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">
                                    Karađorđeva 44<br />
                                    11300 Smederevo, Srbija
                                </span>
                            </li>
                            <li>
                                <a
                                    href="tel:+381664330013"
                                    className="flex items-center gap-3 text-gray-300 hover:text-sunshine-yellow transition-colors text-sm"
                                >
                                    <Phone size={18} className="text-sunshine-yellow shrink-0" />
                                    +381 66 433 013
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:skolasunshine@gmail.com"
                                    className="flex items-center gap-3 text-gray-300 hover:text-sunshine-yellow transition-colors text-sm"
                                >
                                    <Mail size={18} className="text-sunshine-yellow shrink-0" />
                                    skolasunshine@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock size={18} className="text-sunshine-yellow shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">
                                    Pon - Pet: 17:00 - 21:00<br />
                                    Sub: 10:00 - 16:00
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400">
                        <p>
                            © {currentYear} Sunshine School Smederevo. Sva prava zadržana.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/privatnost" className="hover:text-sunshine-yellow transition-colors">
                                Politika privatnosti
                            </Link>
                            <Link href="/uslovi" className="hover:text-sunshine-yellow transition-colors">
                                Uslovi korišćenja
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
