import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';
import BackgroundDecor from '@/components/BackgroundDecor';

export const metadata = {
  title: 'Projets | Mickael – Création de site internet à Marseille',
  description: 'Portfolio de réalisations web à Marseille : sites vitrines, e-commerce et applications Next.js / React.',
};

import Image from 'next/image';

const projects = [
  { img: '/projects/new_proj1.png', alt: 'Site E-commerce Montres de Luxe' },
  { img: '/projects/new_proj2.png', alt: 'Landing page IA Startup' },
  { img: '/projects/real3.png', alt: 'Site architecture & immobilier' },
  { img: '/projects/gen2.png', alt: 'Portfolio Agence Digitale' },
  { img: '/projects/vcar_desktop.png', imgTablet: '/projects/vcar_tablet.png', imgMobile: '/projects/vcar_mobile.png', alt: 'Plateforme de convoyage V-Car', link: 'https://v-car.company/' },
  { img: '/projects/real6.png', alt: 'Agence branding & créative' }
];

export default function WorkPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto bg-black text-white font-lato">
      <Navbar />
      <SocialSidebar />
      <BackgroundDecor />

      <div className="relative flex flex-col items-center justify-center min-h-screen pt-[100px] lg:pt-0 pb-28 md:pb-10 z-10 w-full">
        <div className="w-full max-w-[1200px] flex flex-col items-center justify-center px-[10vw] sm:px-[10vw] lg:px-0 lg:mt-16 md:pl-20 lg:pl-0">
          
          <h1 className="text-[36px] lg:text-[49px] font-righteous text-white mb-10 w-full text-left lg:px-0">
            Réalisations & <span className="text-aqua">Projets Web</span>
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const isVcar = index === 4;
              const Content = (
                <div 
                  className="relative overflow-hidden rounded-3xl md:rounded-xl border border-white/10 group cursor-pointer aspect-[1/1] sm:aspect-[4/3] bg-[#0a0a0a] hover:border-aqua/40 transition-all duration-700 ease-out shadow-2xl hover:shadow-[0_10px_40px_rgba(0,255,255,0.1)] hover:-translate-y-2 h-full w-full"
                >
                  {/* Desktop View (Background bord à bord) */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={project.img} 
                      alt={project.alt} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover object-top ${isVcar ? 'scale-[1.10] -mt-[4%] pb-[4%] group-hover:scale-115' : 'scale-[1.02] group-hover:scale-110'} transition-transform duration-1000 opacity-90 group-hover:opacity-100`}
                    />
                  </div>

                  {/* Tablet Mockup */}
                  <div className="absolute bottom-[-3%] right-[25%] w-[33%] aspect-[3/4] bg-[#1a1a1a] rounded-t-lg shadow-[-10px_10px_20px_rgba(0,0,0,0.6)] border-[4px] border-b-0 border-[#333] p-[2%] transition-transform duration-700 ease-out group-hover:-translate-y-2 z-10">
                    <div className="relative w-full h-full rounded-t-sm overflow-hidden bg-black">
                      <Image 
                        src={project.imgTablet || project.img} 
                        alt={`Tablette ${project.alt}`} 
                        fill
                        sizes="15vw"
                        className={`object-cover object-top ${isVcar ? 'scale-[1.10] -mt-[4%] pb-[4%]' : 'scale-[1.02]'}`}
                      />
                    </div>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="absolute bottom-[-1%] right-[5%] w-[18%] aspect-[9/19.5] bg-[#1a1a1a] rounded-t-2xl shadow-[-15px_15px_25px_rgba(0,0,0,0.8)] border-[3px] border-b-0 border-[#444] p-[2%] transition-transform duration-700 delay-75 ease-out group-hover:-translate-y-4 z-20">
                    <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[40%] h-[12px] bg-[#1a1a1a] rounded-full z-30" />
                    <div className="relative w-full h-full rounded-t-xl overflow-hidden bg-black">
                      <Image 
                        src={project.imgMobile || project.img} 
                        alt={`Mobile ${project.alt}`} 
                        fill
                        sizes="10vw"
                        className={`object-cover object-top ${isVcar ? 'scale-[1.10] -mt-[4%] pb-[4%]' : 'scale-[1.02]'}`}
                      />
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={index} className="relative w-full h-full">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      {Content}
                    </a>
                  ) : Content}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
