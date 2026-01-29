'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { sendContactEmail } from '@/app/actions';

interface FormData {
    parentName: string;
    phone: string;
    email: string;
    childAge: string;
    program: string;
    message: string;
    gdprConsent: boolean;
}

const programs = [
    { value: '', label: 'Izaberite program' },
    { value: 'engleski', label: 'Engleski jezik' },
    { value: 'nemacki', label: 'Nemački jezik' },
    { value: 'srpski', label: 'Srpski jezik' },
    { value: 'matematika', label: 'Matematika' },
    { value: 'prijemni', label: 'Priprema za završni ispit' },
];

const childAges = [
    { value: '', label: 'Uzrast deteta' },
    { value: '3-5', label: '3-5 godina (predškolski)' },
    { value: '6-7', label: '6-7 godina (1-2 razred)' },
    { value: '8-10', label: '8-10 godina (3-5 razred)' },
    { value: '11-14', label: '11-14 godina (6-8 razred)' },
];

export default function ContactCTA() {
    const [formData, setFormData] = useState<FormData>({
        parentName: '',
        phone: '',
        email: '',
        childAge: '',
        program: '',
        message: '',
        gdprConsent: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!formData.parentName || !formData.phone || !formData.gdprConsent) {
            setError('Molimo popunite sva obavezna polja i prihvatite politiku privatnosti.');
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await sendContactEmail(formData);

            if (result.success) {
                setIsSubmitted(true);
                setFormData({
                    parentName: '',
                    phone: '',
                    email: '',
                    childAge: '',
                    program: '',
                    message: '',
                    gdprConsent: false,
                });
            } else {
                setError(result.error || 'Došlo je do greške prilikom slanja. Molimo pokušajte ponovo.');
            }
        } catch (error) {
            setError('Došlo je do greške. Proverite vašu internet konekciju.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <section className="py-16 bg-gradient-to-br from-sunshine-yellow/10 to-deep-blue/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-full bg-success-green/20 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-success-green" />
                        </div>
                        <h2 className="font-display text-3xl font-bold text-dark-gray mb-4">
                            Hvala vam na interesovanju!
                        </h2>
                        <p className="text-medium-gray mb-6">
                            Vaša prijava je uspešno poslata. Kontaktiraćemo vas u najkraćem mogućem roku
                            kako bismo zakazali besplatan probni čas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+381664330013" className="btn btn-primary">
                                Pozovite nas odmah
                            </a>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="btn btn-outline"
                            >
                                Pošaljite novu prijavu
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-gradient-to-br from-sunshine-yellow/10 to-deep-blue/10">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Column - Info */}
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-gray mb-4">
                                Zakažite besplatan probni čas za vaše dete
                            </h2>
                            <p className="text-medium-gray mb-6">
                                Probni čas je potpuno besplatan i bez obaveze.
                                Upoznajte naš način rada i saznajte koji program najbolje odgovara vašem detetu.
                            </p>

                            {/* Benefits */}
                            <ul className="space-y-3 mb-6">
                                {[
                                    'Besplatan probni čas bez obaveze',
                                    'Upoznajte naše profesore',
                                    'Procena nivoa znanja deteta',
                                    'Saveti za dalji razvoj',
                                ].map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-sun-yellow-dark shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-dark-gray">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Phone CTA */}
                            <div className="p-4 bg-white rounded-xl shadow-sm">
                                <p className="text-sm text-medium-gray mb-1">Ili nas pozovite direktno:</p>
                                <a
                                    href="tel:+381664330013"
                                    className="text-2xl font-display font-bold text-deep-blue hover:text-sky-blue transition-colors"
                                >
                                    066 433 013
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Parent Name */}
                                <div>
                                    <label htmlFor="parentName" className="form-label">
                                        Ime i prezime roditelja <span className="text-energy-orange">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="parentName"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="Unesite vaše ime"
                                        required
                                        autoComplete="name"
                                    />
                                </div>

                                {/* Phone & Email Row */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="form-label">
                                            Telefon <span className="text-energy-orange">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-input"
                                            placeholder="06X XXX XXXX"
                                            required
                                            autoComplete="tel"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input"
                                            placeholder="vasa@email.com"
                                            autoComplete="email"
                                        />
                                    </div>
                                </div>

                                {/* Child Age & Program Row */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="childAge" className="form-label">
                                            Uzrast deteta
                                        </label>
                                        <select
                                            id="childAge"
                                            name="childAge"
                                            value={formData.childAge}
                                            onChange={handleChange}
                                            className="form-input"
                                        >
                                            {childAges.map(age => (
                                                <option key={age.value} value={age.value}>{age.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="program" className="form-label">
                                            Program
                                        </label>
                                        <select
                                            id="program"
                                            name="program"
                                            value={formData.program}
                                            onChange={handleChange}
                                            className="form-input"
                                        >
                                            {programs.map(prog => (
                                                <option key={prog.value} value={prog.value}>{prog.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="form-label">
                                        Poruka (opciono)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="form-input resize-none"
                                        placeholder="Dodatne informacije ili pitanja..."
                                    />
                                </div>

                                {/* GDPR Consent */}
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="gdprConsent"
                                        name="gdprConsent"
                                        checked={formData.gdprConsent}
                                        onChange={handleChange}
                                        className="mt-1 w-5 h-5 rounded border-gray-300 text-sunshine-yellow focus:ring-sunshine-yellow"
                                        required
                                    />
                                    <label htmlFor="gdprConsent" className="text-sm text-medium-gray">
                                        Saglasan/a sam sa <a href="/privatnost" className="text-deep-blue hover:underline">politikom privatnosti</a> i
                                        prihvatam da me Sunshine School kontaktira u vezi upita. <span className="text-energy-orange">*</span>
                                    </label>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="p-3 bg-energy-orange/10 border border-energy-orange/30 rounded-lg text-energy-orange text-sm">
                                        {error}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Slanje...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Pošalji prijavu
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
