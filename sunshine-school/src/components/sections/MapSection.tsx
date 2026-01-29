import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export default function MapSection() {
    // Google Maps embed URL for Sunshine School, Karađorđeva 44, Smederevo
    const mapEmbedUrl = "https://maps.google.com/maps?q=Sunshine+School,+Kara%C4%91or%C4%91eva+44,+11300+Smederevo&t=&z=16&ie=UTF8&iwloc=&output=embed";

    // Direct Google Maps link
    const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Sunshine+School,+Kara%C4%91or%C4%91eva+44,+11300+Smederevo";

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-gray mb-4">
                        Gde se nalazi Sunshine School u Smederevu
                    </h2>
                    <p className="text-medium-gray max-w-3xl mx-auto">
                        Naša škola se nalazi na pristupačnoj lokaciji u Smederevu, lako dostupnoj roditeljima i deci.
                        Pozovite nas ili nas posetite i upoznajte naše učionice i nastavnike.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Map */}
                    <div className="lg:col-span-2">
                        <div className="map-container rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokacija Sunshine School - Karađorđeva 44, Smederevo"
                            />
                        </div>
                        {/* Open in Google Maps link */}
                        <a
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-deep-blue hover:text-sky-blue transition-colors font-medium"
                        >
                            <ExternalLink size={18} />
                            Otvori u Google Maps
                        </a>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="space-y-4">
                        {/* Address Card */}
                        <div className="bg-warm-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-sunshine-yellow/20 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-sunshine-yellow" />
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-dark-gray mb-1">Adresa</h3>
                                    <p className="text-medium-gray">
                                        Karađorđeva 44<br />
                                        11300 Smederevo<br />
                                        Srbija
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-warm-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-deep-blue/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-deep-blue" />
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-dark-gray mb-1">Telefon</h3>
                                    <a
                                        href="tel:+381664330013"
                                        className="text-deep-blue hover:text-sky-blue transition-colors font-semibold text-lg"
                                    >
                                        066 433 013
                                    </a>
                                    <p className="text-medium-gray text-sm mt-1">
                                        Pozovite nas za više informacija
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours Card */}
                        <div className="bg-warm-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-success-green/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-success-green" />
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-dark-gray mb-1">Radno vreme</h3>
                                    <div className="text-medium-gray text-sm space-y-1">
                                        <p className="flex justify-between">
                                            <span>Ponedeljak - Petak:</span>
                                            <span className="font-medium text-dark-gray">17:00 - 21:00</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span>Subota:</span>
                                            <span className="font-medium text-dark-gray">10:00 - 16:00</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span>Nedelja:</span>
                                            <span className="text-energy-orange">Zatvoreno</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="/kontakt"
                            className="block w-full btn btn-primary text-center mt-6"
                        >
                            Zakaži posetu školi
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
