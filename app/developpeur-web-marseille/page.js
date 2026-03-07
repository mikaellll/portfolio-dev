import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';
import BackgroundDecor from '@/components/BackgroundDecor';
import Link from 'next/link';

export const metadata = {
  title: 'Développeur Web Marseille | Expert Freelance Next.js & React',
  description: 'Mickael, développeur web freelance à Marseille. Création de sites vitrines, e-commerce et applications web sur mesure avec Next.js, React et Django. Contactez-moi pour votre projet local.',
  alternates: {
    canonical: '/developpeur-web-marseille',
  },
};

export default function SeoLandingPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-lato overflow-x-hidden">
      <Navbar />
      <SocialSidebar />
      <BackgroundDecor isHomePage={false} />

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-6xl font-righteous text-tomato mb-8 leading-tight">
          Développeur Web à Marseille : Création de Sites Internet Performance & Design
        </h1>

        <section className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl opacity-90 leading-relaxed mb-12">
            Vous cherchez un <strong>développeur web à Marseille</strong> pour donner vie à votre projet digital ? En tant que freelance spécialisé dans les technologies modernes comme <strong>Next.js, React et Django</strong>, j&apos;accompagne les entreprises marseillaises et de la région PACA dans leur transformation numérique.
          </p>

          <h2 className="text-3xl font-righteous text-aqua mt-16 mb-6">Développeur Web Freelance à Marseille</h2>
          <p className="mb-6">
            Travailler avec un développeur local à Marseille présente des avantages considérables. Que vous soyez basé au Vieux-Port, à la Joliette ou dans les quartiers sud, la proximité facilite les échanges et la compréhension de votre marché local. Je propose des solutions de <strong>développement web sur mesure</strong>, adaptées aux besoins spécifiques des entrepreneurs du 13.
          </p>

          <h2 className="text-3xl font-righteous text-aqua mt-16 mb-6">Création de Site Vitrine Marseille</h2>
          <p className="mb-6">
            Un site vitrine n&apos;est pas qu&apos;une simple carte de visite. C&apos;est votre premier commercial à Marseille. Mes créations sont optimisées pour le SEO local, garantissant une visibilité maximale sur les requêtes liées à votre activité dans la cité phocéenne. 
          </p>
          <ul className="list-disc pl-6 space-y-4 mb-8">
            <li>Design moderne et responsive (adapté aux mobiles)</li>
            <li>Optimisation de la vitesse de chargement (Core Web Vitals)</li>
            <li>Référencement naturel (SEO) optimisé pour Marseille et ses environs</li>
            <li>Interface d&apos;administration simple pour gérer vos contenus</li>
          </ul>

          <h2 className="text-3xl font-righteous text-aqua mt-16 mb-6">Expertise Next.js & React à Marseille</h2>
          <p className="mb-6">
            Pour les projets plus complexes nécessitant une réactivité exemplaire, j&apos;utilise <strong>React et Next.js</strong>. Ces technologies permettent de créer des applications web ultra-rapides, idéales pour le commerce en ligne ou les plateformes SaaS. En tant qu&apos;expert Next.js à Marseille, je m&apos;assure que votre site bénéficie des dernières innovations techniques (Server Components, Streaming, etc.).
          </p>

          <h2 className="text-3xl font-righteous text-aqua mt-16 mb-6">Pourquoi choisir un développeur local ?</h2>
          <p className="mb-6">
            Le choix d&apos;un prestataire en <strong>création de site internet à Marseille</strong> ne doit pas se faire au hasard. Voici pourquoi me confier votre projet :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h3 className="text-xl font-bold mb-3 text-tomato">Réactivité Locale</h3>
              <p>Possibilité de se rencontrer physiquement pour discuter de votre cahier des charges et de l&apos;évolution de votre projet.</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h3 className="text-xl font-bold mb-3 text-tomato">Connaissance du Marché</h3>
              <p>Une expertise SEO ciblée sur le bassin Marseillais pour attirer une clientèle locale qualifiée.</p>
            </div>
          </div>

          <h2 className="text-3xl font-righteous text-aqua mt-16 mb-6">Tarifs Développeur Freelance Marseille</h2>
          <p className="mb-10">
            La transparence est au cœur de mes collaborations. Mes tarifs pour la <strong>création de site web à Marseille</strong> sont calculés au plus juste, selon la complexité technique et le temps de développement nécessaire. Contactez-moi pour obtenir un devis personnalisé et gratuit adapté à vos besoins réels.
          </p>

          <div className="bg-aqua/10 border border-aqua/30 p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-righteous mb-6">Prêt à lancer votre projet à Marseille ?</h2>
            <Link href="/contact">
              <button className="px-10 py-4 bg-tomato text-white font-righteous rounded-full hover:scale-105 transition-transform">
                DEMANDER UN DEVIS GRATUIT
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
