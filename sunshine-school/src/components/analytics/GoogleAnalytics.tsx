'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-W8QZ4GPZN4";

    if (!gaId) {
        // Analytics disabled - return null in production or show placeholder in dev
        if (process.env.NODE_ENV === 'development') {
            console.log('Google Analytics: NEXT_PUBLIC_GA_ID not set');
        }
        return null;
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaId}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    );
}