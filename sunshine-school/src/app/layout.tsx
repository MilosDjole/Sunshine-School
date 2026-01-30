import type { Metadata } from "next";
import { Poppins, Open_Sans, Comic_Neue, Gothic_A1, Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-comic-neue",
  display: "swap",
});

const gothicA1 = Gothic_A1({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-gothic-a1",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunshineschool.rs"),
  title: {
    default: "Sunshine School Smederevo | Škola stranih jezika, matematike i srpskog jezika za decu",
    template: "%s | Sunshine School Smederevo",
  },
  description:
    "Sunshine School je škola stranih jezika i dodatne nastave za decu u Smederevu. Engleski, nemački, srpski, matematika i priprema za završni ispit. Besplatan probni čas.",
  keywords: [
    "škola stranih jezika Smederevo",
    "engleski jezik za decu Smederevo",
    "nemački jezik Smederevo",
    "dodatna nastava Smederevo",
    "priprema za završni ispit Smederevo",
    "matematika časovi Smederevo",
    "srpski jezik Smederevo",
    "škola za decu Smederevo",
  ],
  authors: [{ name: "Sunshine School" }],
  creator: "Sunshine School",
  publisher: "Sunshine School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://sunshineschool.rs",
    siteName: "Sunshine School Smederevo",
    title: "Sunshine School Smederevo | Škola stranih jezika, matematike i srpskog jezika za decu",
    description:
      "Sunshine School je škola stranih jezika i dodatne nastave za decu u Smederevu. Engleski, nemački, srpski, matematika i priprema za završni ispit. Besplatan probni čas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunshine School Smederevo - Škola stranih jezika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunshine School Smederevo | Škola stranih jezika za decu",
    description:
      "Škola stranih jezika i dodatne nastave za decu od 3 do 14 godina u Smederevu.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Replace with actual Google Search Console verification code
    // Get it from: https://search.google.com/search-console
    // google: process.env.GOOGLE_SITE_VERIFICATION || "your-google-verification-code",
  },
  alternates: {
    canonical: "https://sunshineschool.rs",
  },
};

// Schema.org JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "Sunshine School",
  description:
    "Škola stranih jezika i dodatne nastave za decu uzrasta od 3 do 14 godina u Smederevu.",
  url: "https://sunshineschool.rs",
  logo: "https://sunshineschool.rs/logo.png",
  image: "https://sunshineschool.rs/og-image.png",
  telephone: "+38166433013",
  email: "skolasunshine@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Karađorđeva 44",
    addressLocality: "Smederevo",
    postalCode: "11300",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "44.6654",
    longitude: "20.9276",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "10",
  },
  sameAs: [
    "https://www.instagram.com/skola_mysunshine/",
    "https://www.facebook.com/skola.sunshine",
    "https://www.tiktok.com/@sunshine_skola_",
  ],
  areaServed: {
    "@type": "City",
    name: "Smederevo",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Obrazovni programi",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Časovi engleskog jezika za decu",
          description: "Interaktivna nastava engleskog jezika za decu uzrasta 3-14 godina",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Časovi nemačkog jezika",
          description: "Časovi nemačkog jezika od početničkog do naprednog nivoa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Dodatna nastava srpskog jezika",
          description: "Pravopis, gramatika i književnost za učenike osnovne škole",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Dodatna nastava matematike",
          description: "Pomoć u savladavanju gradiva iz matematike za 1-8 razred",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Priprema za završni ispit",
          description: "Specijalizovana priprema za završni ispit za učenike 8. razreda",
        },
      },
    ],
  },
};

// FAQPage Schema (Placeholder for future FAQs)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Koliko traje besplatan probni čas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Besplatan probni čas traje 45 minuta i omogućava detetu i roditeljima da se upoznaju sa načinom rada, nastavnicima i atmosferom u Sunshine School."
      }
    },
    {
      "@type": "Question",
      "name": "Da li su grupe male?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da. Radimo u malim grupama do 8 učenika, kako bismo obezbedili individualni pristup i kvalitetnu pažnju svakom detetu."
      }
    },
    {
      "@type": "Question",
      "name": "Ko predaje deci u Sunshine School?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nastavu izvode isključivo diplomirani i iskusni nastavnici sa višegodišnjim iskustvom u radu sa decom različitog uzrasta."
      }
    },
    {
      "@type": "Question",
      "name": "Da li radite sa predškolcima?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da. Organizujemo nastavu i za decu uzrasta od 3 godine, uz programe prilagođene učenju kroz igru i razvoj osnovnih jezičkih veština."
      }
    },
    {
      "@type": "Question",
      "name": "Gde se nalazi Sunshine School u Smederevu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sunshine School se nalazi na pristupačnoj lokaciji u Smederevu. Tačnu adresu i mapu možete pronaći u kontakt sekciji sajta."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${poppins.variable} ${openSans.variable} ${comicNeue.variable} ${gothicA1.variable} ${montserrat.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
