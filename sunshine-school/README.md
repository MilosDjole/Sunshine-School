# Sunshine School Smederevo

Moderan, brz i SEO-optimizovan web sajt za školu stranih jezika Sunshine School u Smederevu.

## 🚀 Brzi Start

1.  **Instalacija zavisnosti**:
    ```bash
    npm install
    ```

2.  **Pokretanje razvojnog servera**:
    ```bash
    npm run dev
    ```
    Otvorite [http://localhost:3000](http://localhost:3000) u svom pretraživaču.

3.  **Build za produkciju**:
    ```bash
    npm run build
    npm start
    ```

## 🛠 Tehnologije

-   **Framework**: Next.js 14 (App Router)
-   **Jezik**: TypeScript
-   **Stilizacija**: Tailwind CSS
-   **Fontovi**: Poppins, Open Sans, Comic Neue (via `next/font`)
-   **Ikone**: Lucide React
-   **Mape**: Google Maps Embed (No API Key required)

## 📁 Struktura Projekta

```
src/
├── app/                 # Glavne stranice i rute
│   ├── blog/            # Blog sekcija
│   ├── kontakt/         # Kontakt stranica
│   ├── o-nama/          # O nama stranica
│   ├── programi/        # Stranice pojedinačnih programa
│   └── page.tsx         # Početna stranica
├── components/          # React komponente
│   ├── layout/          # Header, Footer, TopBar
│   ├── sections/        # Sekcije početne stranice (Hero, Mape, itd.)
│   └── ...
└── lib/                 # Pomoćne funkcije i konfiguracija
```

## 🎨 Dizajn Sistem

Sajt koristi prilagođenu Tailwind konfiguraciju sa Sunshine School paletom boja:
-   Primary: `sunshine-yellow` (#FFD700)
-   Secondary: `deep-blue` (#1976D2)
-   Accent: `energy-orange` (#FF6B35)

## 🔍 SEO Optimizacija

Sajt je u potpunosti optimizovan za lokalni SEO (Smederevo):
-   Schema.org markup za `EducationalOrganization` i `LocalBusiness`
-   Pravilna hijerarhija naslova (H1, H2, H3)
-   Meta tagovi za svaku stranicu
-   Open Graph tagovi za društvene mreže
-   Sitemap.xml i robots.txt konfiguracija

## 📝 Sledeći Koraci

1.  **Slike**: Zamenite placeholder slike u `/public/hero` i `/public/social` folderima sa pravim fotografijama škole.
2.  **CMS (Opciono)**: Integracija sa Sanity.io za lako upravljanje blogom i sadržajem (struktura je spremna za ovo).
3.  **Analitika**: Povezivanje sa Google Analytics i Google Search Console.
