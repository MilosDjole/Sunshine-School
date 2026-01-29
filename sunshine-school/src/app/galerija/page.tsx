import { Metadata } from 'next';
import Image from 'next/image';
import { getMediaItems } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Galerija - Sunshine School Smederevo',
    description: 'Pogledajte fotografije i video snimke sa naših časova i aktivnosti u Sunshine School Smederevo. Upoznajte atmosferu naše škole stranih jezika.',
    alternates: {
        canonical: 'https://sunshineschool.rs/galerija',
    },
    openGraph: {
        title: 'Galerija - Sunshine School Smederevo',
        description: 'Fotografije i video snimke sa časova i aktivnosti u našoj školi.',
        url: 'https://sunshineschool.rs/galerija',
    },
};

export default function GalleryPage() {
    const mediaItems = getMediaItems('gallery');

    return (
        <main className="min-h-screen bg-warm-white py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-dark-gray mb-4">
                        Galerija
                    </h1>
                    <p className="text-medium-gray max-w-2xl mx-auto text-lg">
                        Pogledajte atmosferu sa naših časova, priredbi i druženja.
                    </p>
                </div>

                {/* Gallery Grid */}
                {mediaItems.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-warm-gray/20">
                        <div className="text-6xl mb-4">📸</div>
                        <h3 className="text-xl font-semibold text-dark-gray mb-2">Galerija je trenutno prazna</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            Kada dodate slike ili video snimke u <code>public/gallery</code> folder, one će se pojaviti ovde.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {mediaItems.map((item, index) => (
                            <div
                                key={item.src}
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-100 hover:shadow-xl transition-shadow"
                            >
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        controls
                                        className="w-full h-full object-cover"
                                        preload="metadata"
                                    />
                                ) : (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.src}
                                            alt={`Sunshine School Smederevo - aktivnosti i časovi ${index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            loading={index < 6 ? "eager" : "lazy"}
                                        />
                                    </div>
                                )}

                                {/* Overlay for images (optional, adds polish) */}
                                {item.type === 'image' && (
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
