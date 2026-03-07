export default function sitemap() {
  const baseUrl = 'https://mickaelcode.com';

  // Liste des routes statiques
  const routes = [
    '',
    '/about',
    '/work',
    '/skills',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
