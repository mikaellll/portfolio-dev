import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';
import BackgroundDecor from '@/components/BackgroundDecor';
import CanvasDots from '@/components/CanvasDots';

export const metadata = {
  title: 'À Propos | Mickael – Développeur Full-Stack à Marseille',
  description: 'Découvrez mon parcours de développeur web freelance à Marseille. Expert en React, Next.js et solutions digitales innovantes.',
};

export default function AboutPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-lato p-4">
      <Navbar />
      <SocialSidebar />
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-[60px] lg:pt-0 pb-28 md:pb-0">
        <div className="w-full max-w-[1200px] flex flex-col justify-center px-[10vw] sm:px-[10vw] lg:px-0">
        
        <div className="text-[40px] md:text-[49px] lg:text-[55px] text-aqua tracking-[11px] font-righteous mb-6 pl-[5px] lg:pl-[15px]">
          À Propos
        </div>
        
        <div className="flex items-stretch pl-[5px] lg:pl-[15px] mb-4 gap-2 lg:gap-4">
          {/* Vertical line  */}
          <div className="w-[1.5px] bg-aqua min-w-[1.5px] shrink-0" />
          
          <div className="flex flex-col gap-4 w-full max-w-[400px]">
            <div className="text-[18px] lg:text-[21px] text-gray-300 pr-4">
              Je suis un Développeur Full-stack basé à Marseille. J&apos;ai une véritable passion pour les effets UI, les animations et la création d&apos;expériences utilisateur intuitives et dynamiques.
            </div>
            
            <div className="text-[15px] lg:text-[18px] space-y-4 text-gray-300 pr-4">
              <p>
                Personne très organisée, apte à résoudre des problèmes, avec une grande attention aux détails. Fan d&apos;arts martiaux mixtes (MMA), d&apos;activités de plein air, de séries télévisées et de littérature française. Un père de famille de deux enfants.
              </p>
              <p>
                Intéressé par l&apos;ensemble du spectre full-stack et par le fait de travailler sur des projets ambitieux avec des personnes positives.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="ml-[5px] lg:ml-[25px]" style={{ marginTop: '25px' }}>
          <Link href="/contact" className="inline-block">
          <button 
            className="w-[141px] h-[33px] border-2 border-aqua bg-aqua text-black font-righteous rounded-full hover:bg-tomato hover:border-tomato hover:text-white transition-all duration-300 uppercase text-sm tracking-wider" 
            type="button"
          >
            contact
          </button>
          </Link>
        </div>
        </div>
      </div>

      {/* Animated Dots */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 opacity-30 lg:opacity-100 pointer-events-none">
        <CanvasDots />
      </div>
    </div>
  );
}
