'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SubSliderProps {
    images: string[];
    interval?: number;
    delay?: number;
}

function SubSlider({ images, interval = 5000, delay = 0 }: SubSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timeout = setTimeout(() => {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, interval);
            return () => clearInterval(timer);
        }, delay);

        return () => clearTimeout(timeout);
    }, [images.length, interval, delay]);

    if (images.length === 0) {
        return (
            <div className="absolute inset-0 flex items-center justify-center bg-warm-gray text-4xl">
                ☀️
            </div>
        );
    }

    return (
        <div className="absolute inset-0 w-full h-full">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={src}
                        alt="Sunshine School Activity"
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>
    );
}

interface AboutHeroProps {
    images: string[];
}

export default function AboutHero({ images }: AboutHeroProps) {
    // Distribute images into 3 pools
    const pool1 = images.filter((_, i) => i % 3 === 0);
    const pool2 = images.filter((_, i) => i % 3 === 1);
    const pool3 = images.filter((_, i) => i % 3 === 2);

    return (
        <section className="bg-gradient-to-br from-sunshine-yellow/10 to-warm-white py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-gray mb-2">
                            O Sunshine školi
                        </h1>
                        <p
                            className="text-xl md:text-2xl text-deep-blue mb-8"
                            style={{
                                fontFamily: "'Lucida Handwriting', 'Segoe Script', 'Apple Chancery', cursive",
                                fontWeight: 500
                            }}
                        >
                            Learn with us - Shine with us
                        </p>
                        <p className="text-lg text-medium-gray mb-6 leading-relaxed">
                            Sunshine School je moderna škola stranih jezika i dodatne nastave u Smederevu,
                            specijalizovana za rad sa decom uzrasta od 3 do 14 godina. Već više od 15 godina
                            pomažemo deci da sa lakoćom uče engleski i nemački jezik, savladaju srpski jezik
                            i matematiku.
                        </p>
                        <p className="text-medium-gray mb-8 leading-relaxed">
                            Kroz našu školu prošlo je preko 2.000 zadovoljnih učenika,
                            a naš pristup zasniva se na individualnom radu i savremenim metodama nastave.
                        </p>
                        <Link href="/kontakt" className="btn btn-primary text-lg px-8 py-4 shadow-yellow-glow">
                            Zakažite besplatan probni čas
                        </Link>
                    </div>

                    {/* Advanced Grid Slider */}
                    <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 h-[400px] md:h-[500px]">
                        {/* Left Column: 2 small boxes */}
                        <div className="flex flex-col gap-3">
                            <div className="relative flex-1 rounded-2xl overflow-hidden bg-warm-gray shadow-lg border-2 border-white">
                                <SubSlider images={pool1} interval={6000} delay={0} />
                            </div>
                            <div className="relative flex-1 rounded-2xl overflow-hidden bg-warm-gray shadow-lg border-2 border-white">
                                <SubSlider images={pool2} interval={7000} delay={1500} />
                            </div>
                        </div>

                        {/* Right Column: 1 large tall box */}
                        <div className="relative rounded-2xl overflow-hidden bg-warm-gray shadow-xl border-2 border-white">
                            <SubSlider images={pool3} interval={5500} delay={3000} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
