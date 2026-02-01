'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
    images?: string[];
}

export default function HeroSection({ images = [] }: HeroSectionProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Default image if no images provided or folder is empty
    const defaultImage = '/hero/HeroPredstava.jpg';
    const displayImages = images.length > 0 ? images : [defaultImage];

    useEffect(() => {
        if (displayImages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [displayImages.length]);

    return (
        <section className="relative min-h-[600px] lg:min-h-[700px] flex items-end overflow-hidden pb-12 lg:pb-20">
            {/* Background Image(s) - 100% Visibility */}
            <div className="absolute inset-0 z-0">
                {displayImages.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={src}
                            alt="škola stranih jezika za decu u Smederevu – Sunshine School"
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="100vw"
                        />
                    </div>
                ))}

                {/* Enhanced overlay za bolju čitljivost teksta */}
                <div className="absolute inset-0 bg-black/40 z-[1]" />
            </div>

            {/* Content - Cinematic and High-Contrast */}
            <div className="container mx-auto px-4 relative z-10 w-full mb-12 lg:mb-24">
                <div className="max-w-4xl animate-fade-in-up">
                    {/* H1 - Branding Message */}
                    <h1
                        className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-[1.1]"
                        style={{ color: '#FFD700' }}
                    >
                        <span className="block">
                            Sunshine School
                        </span>
                        <span
                            className="block text-2xl md:text-3xl lg:text-4xl font-semibold lowercase"
                            style={{ color: '#FFD700' }}
                        >
                            mesto gde deca uče sa osmehom
                        </span>
                    </h1>

                    {/* Description Paragraph */}
                    <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-bold mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-4xl">
                        Sunshine School je pouzdana škola stranih jezika, matematike i srpskog jezika za decu uzrasta od 3 do 14 godina.
                        Više od 15 godina pomažemo deci u Smederevu da uče kroz razumevanje, podršku i savremene metode rada.
                    </p>

                    <div className="flex flex-wrap gap-4 md:gap-6">
                        <Link
                            href="/kontakt"
                            className="bg-energy-orange hover:bg-orange-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-display text-lg md:text-xl font-black transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(255,107,53,0.5)] inline-flex items-center gap-2 group"
                        >
                            <span>Zakaži besplatan probni čas</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Enhanced Bottom Gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[2] pointer-events-none" />
        </section>
    );
}
