import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Politika privatnosti - Sunshine School Smederevo',
    description: 'Politika privatnosti Sunshine School Smederevo. Informacije o načinu prikupljanja, korišćenja i zaštite ličnih podataka u skladu sa GDPR propisima.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function PrivatnostPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="font-display text-4xl font-bold text-dark-gray mb-8">
                    Politika privatnosti
                </h1>

                <div className="prose prose-lg max-w-none text-medium-gray space-y-6">
                    <p className="text-sm text-medium-gray mb-8">
                        <strong>Poslednja izmena:</strong> 27. januar 2026.
                    </p>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            1. Uvod
                        </h2>
                        <p>
                            Sunshine School Smederevo (&ldquo;mi&rdquo;, &ldquo;nas&rdquo;, &ldquo;naš&rdquo;) poštuje vašu privatnost i posvećena je zaštiti vaših ličnih podataka.
                            Ova politika privatnosti objašnjava kako prikupljamo, koristimo, čuvamo i štitimo vaše lične podatke u skladu sa
                            Opštom uredbom o zaštiti podataka (GDPR) i drugim primenjivim propisima Republike Srbije.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            2. Podaci koje prikupljamo
                        </h2>
                        <p>Prikupljamo sledeće kategorije ličnih podataka:</p>
                        <ul>
                            <li><strong>Kontakt podaci:</strong> ime, prezime, email adresa, broj telefona</li>
                            <li><strong>Podaci o detetu:</strong> uzrast, razred, program koji zanima</li>
                            <li><strong>Tehnički podaci:</strong> IP adresa, tip pretraživača, informacije o uređaju</li>
                            <li><strong>Komunikacija:</strong> poruke koje nam šaljete putem kontakt forme</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            3. Kako koristimo vaše podatke
                        </h2>
                        <p>Vaše lične podatke koristimo za:</p>
                        <ul>
                            <li>Odgovaranje na vaše upite i zahteve</li>
                            <li>Zakazivanje probnih časova i konsultacija</li>
                            <li>Komunikaciju o našim programima i uslugama</li>
                            <li>Poboljšanje naših usluga i sajta</li>
                            <li>Ispunjenje zakonskih obaveza</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            4. Pravni osnov za obradu podataka
                        </h2>
                        <p>
                            Obrađujemo vaše lične podatke na osnovu:
                        </p>
                        <ul>
                            <li><strong>Pristanak:</strong> kada nam eksplicitno date saglasnost</li>
                            <li><strong>Izvršenje ugovora:</strong> za pružanje naših usluga</li>
                            <li><strong>Zakonita obaveza:</strong> kada je to potrebno po zakonu</li>
                            <li><strong>Opravdani interes:</strong> za poboljšanje naših usluga</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            5. Deljenje podataka
                        </h2>
                        <p>
                            Vaše lične podatke ne prodajemo, ne iznajmljujemo niti delimo sa trećim stranama, osim:
                        </p>
                        <ul>
                            <li>Kada je to potrebno za pružanje usluga (npr. email servisi)</li>
                            <li>Kada to zahteva zakon</li>
                            <li>Sa vašim eksplicitnim pristankom</li>
                        </ul>
                        <p>
                            Koristimo pouzdane pružaoce usluga koji su obavezani da štite vaše podatke u skladu sa GDPR propisima.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            6. Čuvanje podataka
                        </h2>
                        <p>
                            Čuvamo vaše lične podatke samo onoliko dugo koliko je potrebno za svrhe navedene u ovoj politici,
                            ili koliko zahteva zakon. Kada podaci više nisu potrebni, bezbedno ih brišemo.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            7. Vaša prava
                        </h2>
                        <p>U skladu sa GDPR propisima, imate pravo na:</p>
                        <ul>
                            <li><strong>Pristup podacima:</strong> možete zatražiti kopiju vaših ličnih podataka</li>
                            <li><strong>Ispravku:</strong> možete zatražiti ispravku netačnih podataka</li>
                            <li><strong>Brisanje:</strong> možete zatražiti brisanje vaših podataka (&ldquo;pravo na zaborav&rdquo;)</li>
                            <li><strong>Ograničenje obrade:</strong> možete zatražiti ograničenje obrade vaših podataka</li>
                            <li><strong>Prenosivost:</strong> možete zatražiti prenos vaših podataka</li>
                            <li><strong>Prigovor:</strong> možete se usprotiviti obradi vaših podataka</li>
                            <li><strong>Povlačenje pristanka:</strong> možete povući pristanak u bilo kom trenutku</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            8. Sigurnost podataka
                        </h2>
                        <p>
                            Preduzimamo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka od
                            neovlašćenog pristupa, gubitka, uništenja ili promene. Međutim, nijedan metod prenosa preko
                            interneta ili elektronskog skladištenja nije 100% siguran.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            9. Kolačići (Cookies)
                        </h2>
                        <p>
                            Naš sajt koristi kolačiće za poboljšanje korisničkog iskustva. Možete kontrolisati kolačiće
                            kroz podešavanja vašeg pretraživača. Više informacija o kolačićima možete pronaći u našoj
                            <Link href="/uslovi" className="text-deep-blue hover:underline"> politici kolačića</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            10. Promene politike privatnosti
                        </h2>
                        <p>
                            Zadržavamo pravo da ažuriramo ovu politiku privatnosti. O svim značajnim promenama
                            obavestićemo vas putem sajta ili emaila.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-dark-gray mb-4">
                            11. Kontakt
                        </h2>
                        <p>
                            Za sva pitanja u vezi sa ovom politikom privatnosti ili za ostvarivanje vaših prava,
                            možete nas kontaktirati:
                        </p>
                        <div className="bg-warm-white p-6 rounded-xl mt-4">
                            <p className="mb-2"><strong>Sunshine School Smederevo</strong></p>
                            <p className="mb-2">Karađorđeva 44, 11300 Smederevo, Srbija</p>
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