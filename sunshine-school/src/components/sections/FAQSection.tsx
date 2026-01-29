'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: 'Koliko traje besplatan probni čas?',
        answer: 'Besplatan probni čas traje 45 minuta i omogućava detetu i roditeljima da se upoznaju sa načinom rada, nastavnicima i atmosferom u Sunshine School.'
    },
    {
        question: 'Da li su grupe male?',
        answer: 'Da. Radimo u malim grupama do 8 učenika, kako bismo obezbedili individualni pristup i kvalitetnu pažnju svakom detetu.'
    },
    {
        question: 'Ko predaje deci u Sunshine School?',
        answer: 'Nastavu izvode isključivo diplomirani i iskusni nastavnici sa višegodišnjim iskustvom u radu sa decom različitog uzrasta.'
    },
    {
        question: 'Da li radite sa predškolcima?',
        answer: 'Da. Organizujemo nastavu i za decu uzrasta od 3 godine, uz programe prilagođene učenju kroz igru i razvoj osnovnih jezičkih veština.'
    },
    {
        question: 'Gde se nalazi Sunshine School u Smederevu?',
        answer: 'Sunshine School se nalazi na pristupačnoj lokaciji u Smederevu. Tačnu adresu i mapu možete pronaći u kontakt sekciji sajta.'
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-warm-white/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-black text-dark-gray mb-4">
                            Često postavljana pitanja roditelja
                        </h2>
                        <div className="w-20 h-1.5 bg-sunshine-yellow mx-auto rounded-full" />
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-warm-gray/20 overflow-hidden shadow-sm transition-all hover:border-sunshine-yellow/40"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span className="font-display font-bold text-lg text-dark-gray pr-8">
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-sun-yellow-dark shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-medium-gray shrink-0" />
                                    )}
                                </button>

                                {openIndex === index && (
                                    <div id={`faq-answer-${index}`} className="px-6 pb-6 animate-fade-in">
                                        <p className="text-medium-gray leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
