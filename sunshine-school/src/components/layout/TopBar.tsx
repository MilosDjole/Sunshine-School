'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-dark-gray text-white py-2 text-sm">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
                {/* Left side - Contact info */}
                <div className="flex items-center gap-4 md:gap-6">
                    <a
                        href="tel:+381664330013"
                        className="flex items-center gap-2 hover:text-sunshine-yellow transition-colors"
                        aria-label="Pozovite nas"
                    >
                        <Phone size={14} />
                        <span className="hidden sm:inline">+381 66 433 013</span>
                        <span className="sm:hidden">066 433 013</span>
                    </a>
                    <a
                        href="mailto:skolasunshine@gmail.com"
                        className="flex items-center gap-2 hover:text-sunshine-yellow transition-colors"
                        aria-label="Pišite nam"
                    >
                        <Mail size={14} />
                        <span className="hidden md:inline">skolasunshine@gmail.com</span>
                    </a>
                </div>

                {/* Right side - Language switcher */}
                <div className="flex items-center gap-3">
                    <span className="text-medium-gray text-xs hidden sm:inline">Jezik:</span>
                    <div className="flex items-center gap-4">
                        <button
                            className="relative w-7 h-5 hover:scale-110 transition-transform shadow-sm"
                            aria-label="Srpski jezik"
                        >
                            <Image src="/flags/rs.png" alt="Srbija" fill sizes="32px" className="object-cover rounded-sm" />
                        </button>
                        <button
                            className="relative w-7 h-5 hover:scale-110 transition-transform shadow-sm opacity-60 hover:opacity-100"
                            aria-label="English language"
                        >
                            <Image src="/flags/gb.png" alt="English" fill sizes="32px" className="object-cover rounded-sm" />
                        </button>
                        <button
                            className="relative w-7 h-5 hover:scale-110 transition-transform shadow-sm opacity-60 hover:opacity-100"
                            aria-label="Deutsch"
                        >
                            <Image src="/flags/de.png" alt="Deutsch" fill sizes="32px" className="object-cover rounded-sm" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
