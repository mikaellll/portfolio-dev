import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';
import BackgroundDecor from '@/components/BackgroundDecor';
import TechBento from '@/components/TechBento';

export const metadata = {
  title: 'Compétences | Mickael – Expert React & Next.js à Marseille',
  description: 'Expertise technique en développement web : React, Next.js, Django et WordPress pour vos projets à Marseille.'
};

export default function SkillsPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto bg-black text-white font-lato">
      <Navbar />
      <SocialSidebar />
      <BackgroundDecor />

      <div className="relative flex flex-col items-center justify-center min-h-screen pt-[80px] lg:pt-0 pb-28 md:pb-10 z-10 w-full">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 px-[10vw] sm:px-[10vw] lg:px-0">
        
        {/* Skills text */}
        <div className="w-full lg:w-[45%] text-aqua">
          <h1 className="text-[36px] lg:text-[46px] pb-[35px] font-righteous">
            Compétences et Expériences
          </h1>
          <p className="text-white text-justify text-[16px] leading-relaxed">
            Je crée des sites web réactifs performants, qui sont rapides, faciles à utiliser et construits selon les meilleures pratiques. Mon domaine d&apos;expertise principal est le développement front-end, HTML, CSS, JS, la création de petites et moyennes applications web, de fonctionnalités, d&apos;animations, et l&apos;intégration de maquettes interactives.
          </p>
          <br />
          <p className="text-white text-justify text-[16px] leading-relaxed">
            J&apos;ai également de l&apos;expérience en développement avec des CMS open-source populaires comme WordPress.
          </p>
          <br />
          <p className="text-white text-justify text-[16px] leading-relaxed">
            Visitez mon profil{' '}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-aqua hover:text-tomato transition-colors duration-300 pointer"
            >
              LinkedIn
            </a>{' '}
            pour plus de détails ou{' '}
            <a 
              href="/contact"
              className="text-aqua hover:text-tomato transition-colors duration-300 pointer"
            >
              contactez-moi
            </a> directement.
          </p>
        </div>

        {/* Tech Bento Grid */}
        <div className="w-full lg:w-[45%]">
          <TechBento />
        </div>
        
        </div>
      </div>
    </div>
  );
}
