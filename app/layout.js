import './v4.css';

export const metadata = {
  metadataBase: new URL('https://mickaelcode.com'),
  title: 'Mickael | Full-Stack Web Developer',
  description:
    'Mickael – Développeur web full-stack basé à Marseille. Spécialisé en React, Next.js, Django et WordPress.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mickael | Full-Stack Web Developer',
    description: 'Développeur web à Marseille. Spécialisé en React, Next.js, Django et WordPress.',
    url: 'https://mickaelcode.com',
    siteName: 'MickaelCode',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mickael',
    url: 'https://mickaelcode.com',
    jobTitle: 'Full Stack Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marseille',
      addressCountry: 'France',
    },
    sameAs: [
      // Ajoutez vos réseaux sociaux ici plus tard
      // 'https://github.com/mikaellll',
      // 'https://linkedin.com/in/...'
    ],
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Patua+One&family=Righteous&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
