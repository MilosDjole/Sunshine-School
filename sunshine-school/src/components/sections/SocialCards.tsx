'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

interface SocialCard {
    platform: 'instagram' | 'facebook' | 'tiktok';
    title: string;
    handle: string;
    followers?: string;
    description: string;
    profileUrl: string;
    imageSrc: string;
    buttonText: string;
}

interface SocialCardsProps {
    images?: string[];
}

export default function SocialCards({ images = [] }: SocialCardsProps) {
    // State to keep track of current images for each card
    const [activeIndices, setActiveIndices] = useState<number[]>([0, 1, 2]);
    const [isFading, setIsFading] = useState(false);

    // Function to get distinct random indices
    const getRandomIndices = (count: number, total: number, current: number[]) => {
        if (total <= count) return current; // Not enough images to rotate effectively

        const newIndices: number[] = [];
        const available = Array.from({ length: total }, (_, i) => i);

        // Try to avoid picking currently shown images immediately again if possible
        let pool = available.filter(i => !current.includes(i));
        if (pool.length < count) pool = available; // Fallback if pool is too small

        for (let i = 0; i < count; i++) {
            if (pool.length === 0) pool = available;
            const randomIndex = Math.floor(Math.random() * pool.length);
            newIndices.push(pool[randomIndex]);
            pool.splice(randomIndex, 1);
        }
        return newIndices;
    };

    useEffect(() => {
        if (images.length < 2) return;

        const interval = setInterval(() => {
            setIsFading(true);

            // Wait for fade out, then change images
            setTimeout(() => {
                setActiveIndices(prev => getRandomIndices(3, images.length, prev));
                setIsFading(false);
            }, 500); // 500ms fade out matches CSS transition

        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    // Helper to safely get image using the active index
    const getActiveImage = (cardIndex: number, fallback: string) => {
        const imageIndex = activeIndices[cardIndex];
        if (images && images.length > imageIndex) return images[imageIndex];
        return fallback;
    };

    const socialCards: SocialCard[] = [
        {
            platform: 'instagram',
            title: 'Instagram',
            handle: '@skola_mysunshine',
            followers: 'Pratite nas',
            description: 'Pratite nas za dnevne trenutke iz učionice i zabavne aktivnosti!',
            profileUrl: 'https://www.instagram.com/skola_mysunshine/',
            imageSrc: getActiveImage(0, '/gallery/1.jpg'),
            buttonText: 'Zaprati',
        },
        {
            platform: 'facebook',
            title: 'Facebook',
            handle: 'Suncica Školic',
            followers: 'Pratite nas',
            description: 'Pridružite se našoj zajednici roditelja i saznajte više o našim programima.',
            profileUrl: 'https://www.facebook.com/skola.sunshine',
            imageSrc: getActiveImage(1, '/gallery/2.jpg'),
            buttonText: 'Zapratite',
        },
        {
            platform: 'tiktok',
            title: 'TikTok',
            handle: '@sunshine_skola_',
            followers: 'Pratite nas',
            description: 'Zabavni video sadržaji i edukativni klipovi za decu i roditelje.',
            profileUrl: 'https://www.tiktok.com/@sunshine_skola_',
            imageSrc: getActiveImage(2, '/gallery/3.jpg'),
            buttonText: 'Pregledaj još objava',
        },
    ];

    const platformColors = {
        instagram: {
            gradient: 'from-[#f09433] via-[#dc2743] to-[#bc1888]',
            bg: 'bg-gradient-to-br from-[#f09433]/10 to-[#bc1888]/10',
            icon: 'text-[#E4405F]',
            button: 'bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white',
        },
        facebook: {
            gradient: 'from-[#1877F2] to-[#1877F2]',
            bg: 'bg-[#1877F2]/5',
            icon: 'text-[#1877F2]',
            button: 'bg-[#1877F2] text-white',
        },
        tiktok: {
            gradient: 'from-[#00f2ea] to-[#ff0050]',
            bg: 'bg-gradient-to-br from-[#00f2ea]/10 to-[#ff0050]/10',
            icon: 'text-black',
            button: 'bg-black text-white',
        },
    };

    function PlatformIcon({ platform, className }: { platform: string; className?: string }) {
        switch (platform) {
            case 'instagram':
                return <Instagram className={className} />;
            case 'facebook':
                return <Facebook className={className} />;
            case 'tiktok':
                return (
                    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                );
            default:
                return null;
        }
    }


    return (
        <section className="py-16 bg-warm-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-gray mb-4">
                        Pratite Sunshine School na društvenim mrežama
                    </h2>
                    <p className="text-medium-gray max-w-2xl mx-auto">
                        Pogledajte kako izgledaju naši časovi, aktivnosti i svakodnevni trenuci učenja kroz igru i radost.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {socialCards.map((card) => (
                        <a
                            key={card.platform}
                            href={card.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-card ${card.platform} group cursor-pointer`}
                        >
                            {/* Platform Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${platformColors[card.platform].bg}`}>
                                    <PlatformIcon
                                        platform={card.platform}
                                        className={`w-5 h-5 ${platformColors[card.platform].icon}`}
                                    />
                                </div>
                                <span className="font-display font-semibold text-lg">{card.title}</span>
                            </div>

                            {/* Profile Info */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-sunshine-yellow/20 flex items-center justify-center overflow-hidden">
                                    <span className="text-2xl">☀️</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-dark-gray">SUNSHINE</p>
                                    <p className="text-sm text-medium-gray">{card.followers}</p>
                                </div>
                            </div>

                            {/* Preview Image */}
                            <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-warm-gray">
                                <Image
                                    src={card.imageSrc}
                                    alt={`${card.title} preview`}
                                    fill
                                    className={`object-cover transition-all duration-500 ease-in-out ${isFading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'} group-hover:scale-105`}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                {/* Fallback gradient if no image */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${platformColors[card.platform].gradient} opacity-20`} />
                            </div>

                            {/* Description */}
                            <p className="text-sm text-medium-gray mb-4 line-clamp-2">
                                {card.description}
                            </p>

                            {/* CTA Button (Styled Div) */}
                            <div
                                className={`w-full py-3 px-4 rounded-full font-semibold text-sm text-center transition-all group-hover:shadow-lg ${platformColors[card.platform].button}`}
                            >
                                {card.buttonText}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
