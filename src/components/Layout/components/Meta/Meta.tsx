import Head from 'next/head';

/**
 * Meta component.
 *
 * Global metadata for the <head>.
 */
const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      httpEquiv="X-UA-Compatible"
      content="IE=edge"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
    />
    <link
      rel="preconnect"
      href={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}`}
    />
    <link
      rel="dns-prefetch"
      href={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}`}
    />
    <meta
      name="description"
      content="Description"
    />
    <meta
      name="keywords"
      content="Keywords"
    />
    <title>Next.js PWA Example</title>

    <link
      rel="manifest"
      href="/manifest.json"
    />
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="/img/icons/favicon1.ico"
    />
    <link
      href="/img/icons/favicon-16x16.png"
      rel="icon"
      type="image/png"
      sizes="16x16"
    />
    <link
      href="/img/icons/favicon-32x32.png"
      rel="icon"
      type="image/png"
      sizes="32x32"
    />
    <link
      rel="apple-touch-icon"
      href="/apple-icon.png"
    />
    <meta
      name="theme-color"
      content="#317EFB"
    />
  </Head>
);

export default Meta;
