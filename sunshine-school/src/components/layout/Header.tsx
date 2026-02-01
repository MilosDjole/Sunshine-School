'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
    { href: '/', label: 'POČETNA' },
    { href: '/o-nama', label: 'O NAMA' },
    { href: '/programi', label: 'PROGRAMI' },
    { href: '/galerija', label: 'GALERIJA' },
    { href: '/blog', label: 'BLOG' },
    { href: '/kontakt', label: 'KONTAKT' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <div className="relative w-16 h-16 md:w-20 md:h-20">
                            <Image
                                src="/logo.jpg"
                                alt="Sunshine School - Škola stranih jezika"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 64px, 80px"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation & CTAs */}
                    <div className="hidden lg:flex items-center gap-8">
                        <nav className="flex items-center gap-8" aria-label="Glavna navigacija">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="nav-link text-sm font-medium tracking-wide"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Header CTAs */}
                        <div className="flex items-center gap-3 border-l border-warm-gray pl-8">
                            <Link
                                href="/kontakt"
                                className="group flex items-center gap-2 bg-success-green/10 text-success-green px-4 py-2 rounded-xl border border-success-green/20 hover:bg-success-green hover:text-white transition-all text-xs font-bold"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-green opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success-green"></span>
                                </span>
                                Upis u toku
                            </Link>

                            <Link
                                href="/kontakt"
                                className="btn btn-primary text-xs py-2 px-5 shadow-sm"
                            >
                                Zakaži probni čas
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-warm-gray transition-colors"
                        aria-label={isMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav
                        className="lg:hidden py-4 border-t border-warm-gray animate-slide-up"
                        aria-label="Mobilna navigacija"
                    >
                        <ul className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block py-3 px-4 rounded-lg hover:bg-sunshine-yellow/10 transition-colors font-medium"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-warm-gray flex flex-col gap-3">
                            <Link
                                href="/kontakt"
                                className="btn btn-primary w-full text-center py-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Zakaži besplatan probni čas
                            </Link>
                            <Link
                                href="/kontakt"
                                className="bg-success-green text-white w-full text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                Upis u toku
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
