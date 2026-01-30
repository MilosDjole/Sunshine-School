import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Uslovi korišćenja - Sunshine School Smederevo',
    description: 'Uslovi korišćenja web sajta Sunshine School Smederevo. Pravila i uslovi za korišćenje naših usluga i sajta.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function UsloviPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="font-display text-4xl font-bold text-dark-gray mb-8">
                    Uslovi korišćenja
                </h1>

                <div className="prose prose-lg max-w-none text-medium-gray space-y-6">
                    <p className="text-sm text-medium-gray mb-8">
                        <strong>Poslednja izmena:</strong> 27. januar 2026.
                    </p>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            1. Prihvatanje uslova
                        </h2>
                        <p>
                            Pristupanjem i korišćenjem web sajta Sunshine School Smederevo (sunshineschool.rs),
                            prihvatate i saglašavate se sa ovim uslovima korišćenja. Ako se ne slažete sa ovim uslovima,
                            molimo vas da ne koristite naš sajt.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            2. Informacije o školi
                        </h2>
                        <div className="bg-warm-white p-6 rounded-xl">
                            <p className="mb-2"><strong>Sunshine School Smederevo</strong></p>
                            <p className="mb-2">Karađorđeva 44, 11300 Smederevo, Srbija</p>
                            <p className="mb-2">Email: <a href="mailto:skolasunshine@gmail.com" className="text-deep-blue hover:underline">skolasunshine@gmail.com</a></p>
                            <p>Telefon: <a href="tel:+38166433013" className="text-deep-blue hover:underline">+381 66 433 013</a></p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            3. Korišćenje sajta
                        </h2>
                        <p>Sajt možete koristiti za:</p>
                        <ul>
                            <li>Pregled informacija o našim programima i uslugama</li>
                            <li>Zakazivanje probnih časova i konsultacija</li>
                            <li>Kontaktiranje našeg tima</li>
                            <li>Pregled galerije i blog sadržaja</li>
                        </ul>
                        <p className="mt-4">
                            Zabranjeno je koristiti sajt za bilo koju nezakonitu svrhu ili na način koji bi mogao
                            oštetiti, onesposobiti, preopteretiti ili ugroziti naš sajt ili bilo koju treću stranu.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            4. Intelektualna svojina
                        </h2>
                        <p>
                            Sav sadržaj na ovom sajtu, uključujući tekstove, grafike, logotipe, ikone, slike,
                            audio zapise i softver, je vlasništvo Sunshine School Smederevo ili njenih dobavljača
                            i zaštićen je zakonima o autorskim pravima i drugim zakonima o intelektualnoj svojini.
                        </p>
                        <p className="mt-4">
                            Zabranjeno je kopiranje, reprodukovanje, distribucija, prenos, prikazivanje ili javno
                            izvođenje bilo kog dela sajta bez prethodne pismene saglasnosti Sunshine School Smederevo.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            5. Tačnost informacija
                        </h2>
                        <p>
                            Nastojimo da sve informacije na sajtu budu tačne i ažurne. Međutim, ne garantujemo
                            tačnost, potpunost ili aktuelnost svih informacija. Zadržavamo pravo da u bilo kom
                            trenutku izmenimo sadržaj sajta bez prethodne obaveštenosti.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            6. Linkovi ka drugim sajtovima
                        </h2>
                        <p>
                            Naš sajt može sadržati linkove ka drugim web sajtovima koji nisu pod našom kontrolom.
                            Ne preuzimamo odgovornost za sadržaj, politiku privatnosti ili prakse bilo kog trećeg sajta.
                            Preporučujemo vam da pažljivo pročitate uslove korišćenja i politiku privatnosti svakog
                            sajta koji posetite.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            7. Ograničenje odgovornosti
                        </h2>
                        <p>
                            Sunshine School Smederevo ne snosi odgovornost za bilo kakve direktne, indirektne,
                            slučajne, posebne ili posledične štete koje proizilaze iz korišćenja ili nemogućnosti
                            korišćenja našeg sajta, uključujući gubitak podataka ili dobiti.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            8. Kolačići (Cookies)
                        </h2>
                        <p>
                            Naš sajt koristi kolačiće za poboljšanje funkcionalnosti i korisničkog iskustva.
                            Korišćenjem sajta, pristajete na korišćenje kolačića u skladu sa našom
                            <Link href="/privatnost" className="text-deep-blue hover:underline"> politikom privatnosti</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            9. Promene uslova
                        </h2>
                        <p>
                            Zadržavamo pravo da u bilo kom trenutku izmenimo ove uslove korišćenja.
                            Sve izmene će biti objavljene na ovoj stranici sa datumom poslednje izmene.
                            Nastavak korišćenja sajta nakon izmena predstavlja prihvatanje novih uslova.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            10. Primenjivo pravo
                        </h2>
                        <p>
                            Ovi uslovi korišćenja se tumače i primenjuju u skladu sa zakonima Republike Srbije.
                            Svi sporovi koji proizilaze iz ili su povezani sa ovim uslovima biće rešavani pred
                            nadležnim sudovima u Smederevu, Srbija.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            11. Kontakt
                        </h2>
                        <p>
                            Ako imate pitanja u vezi sa ovim uslovima korišćenja, možete nas kontaktirati:
                        </p>
                        <div className="bg-warm-white p-6 rounded-xl mt-4">
                            <p className="mb-2">Email: <a href="mailto:skolasunshine@gmail.com" className="text-deep-blue hover:underline">skolasunshine@gmail.com</a></p>
                            <p>Telefon: <a href="tel:+38166433013" className="text-deep-blue hover:underline">+381 66 433 013</a></p>
                        </div>
                    </section>

                    <div className="mt-12 pt-8 border-t border-warm-gray">
                        <Link href="/" className="btn btn-primary">
                            Nazad na početnu stranicu
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}