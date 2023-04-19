import Script from 'next/script';

const GoogleAnalytics = () => (
  <>
    {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
    <Script
      id="google-analytics"
      strategy="afterInteractive"
    >
      {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', '${process.env.GOOGLE_TAG_MANAGER_ID}');
              `}
    </Script>
    )}
    {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
      strategy="afterInteractive"
    />
    )}
  </>
);

export default GoogleAnalytics;
