import Script from "next/script";

// GA4 Measurement ID (gtag). Stream ID in GA4 admin: 13389845836
const MEASUREMENT_ID = "G-PR6J5Q849V";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', {
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}
