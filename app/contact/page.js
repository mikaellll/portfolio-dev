import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';
import BackgroundDecor from '@/components/BackgroundDecor';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Mickael – Développeur Full-Stack',
  description: 'Contactez Mickael pour vos projets de développement web.',
};

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto bg-black text-white font-lato">
      <Navbar />
      <SocialSidebar />
      <BackgroundDecor />

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center z-10 pt-[80px] lg:pt-0 pb-28 md:pb-10">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-[10vw] sm:px-[10vw] lg:px-0">
        
        {/* Left: Info */}
        <div className="w-full lg:w-[45%] max-w-[500px]">
          <h1 className="font-righteous text-[36px] lg:text-[48px] text-white mb-2">
            Contactez<span className="text-aqua">-moi</span>
          </h1>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-aqua to-tomato mb-6" />
          <p className="font-lato text-[16px] text-[#a0a0a0] leading-relaxed mb-10" style={{ marginBottom: '2.5rem' }}>
            Vous avez un projet en tête ? Une question ? N&apos;hésitez pas à
            me contacter, je vous répondrai dans les plus brefs délais.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-[48px] h-[48px] flex items-center justify-center border border-aqua/20 rounded-full bg-aqua/5 shrink-0 transition-all duration-300 group-hover:bg-aqua/10 group-hover:border-aqua">
                <i className="fa-solid fa-envelope text-[20px] text-aqua" />
              </div>
              <div>
                <span className="block font-lato text-[12px] text-gray-400 uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:contact@mickael.art" className="font-lato text-[15px] text-white hover:text-aqua transition-colors duration-300">
                  contact@mickaelcode.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-[48px] h-[48px] flex items-center justify-center border border-aqua/20 rounded-full bg-aqua/5 shrink-0 transition-all duration-300 group-hover:bg-aqua/10 group-hover:border-aqua">
                <i className="fa-solid fa-location-dot text-[20px] text-aqua" />
              </div>
              <div>
                <span className="block font-lato text-[12px] text-gray-400 uppercase tracking-widest mb-1">Localisation</span>
                <span className="font-lato text-[15px] text-white">Marseille, France</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-[48px] h-[48px] flex items-center justify-center border border-aqua/20 rounded-full bg-aqua/5 shrink-0 transition-all duration-300 group-hover:bg-aqua/10 group-hover:border-aqua">
                <i className="fa-solid fa-clock text-[20px] text-aqua" />
              </div>
              <div>
                <span className="block font-lato text-[12px] text-gray-400 uppercase tracking-widest mb-1">Disponibilité</span>
                <span className="font-lato text-[15px] text-white">Lun – Ven, 9h – 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-[50%] max-w-[650px]">
          <ContactForm />
        </div>
        
        </div>
      </div>
    </div>
  );
}
