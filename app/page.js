import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';
import BackgroundDecor from '@/components/BackgroundDecor';

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-lato">
      <Navbar />
      <SocialSidebar />
      <BackgroundDecor isHomePage={true} />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pb-24 lg:pb-0">
        <div className="w-full max-w-[1200px] flex flex-col justify-center px-[10vw] sm:px-[10vw] lg:px-0">
        
        {/* Texts */}
        <div className="relative w-fit">
          <div className="text-[25vw] sm:text-[120px] lg:text-[175px] font-righteous leading-[0.8] tracking-tight">
            Web
          </div>
          <div className="text-[9.5vw] sm:text-[40px] lg:text-[55px] tracking-[3.5vw] sm:tracking-[15px] lg:tracking-[23px] font-righteous text-white/90 pl-[1vw] sm:pl-[5px] lg:pl-[15px] -mt-[1vw] sm:-mt-2 lg:-mt-4">
            Developer
          </div>
        </div>

        {/* Profile Image (Mobile Only - Behind Text) */}
        <div className="absolute top-[100px] left-[60%] sm:left-[65%] -translate-x-1/2 z-[-1] flex lg:hidden opacity-50 pointer-events-none w-[600px] justify-center">
          <Image
            src="/img/profil_portfolio.png"
            alt="Photo de Mickael"
            width={600}
            height={600}
            priority
            className="rounded-[60px] w-full h-auto object-cover"
          />
        </div>

        {/* Small Intro Box */}
        <div className="flex items-stretch mt-6 md:mt-10 mb-4 pl-[3px] md:pl-[5px] lg:pl-[12px] gap-3 md:gap-4">
          <div className="w-[2px] bg-aqua shrink-0" />
          <div className="flex flex-col justify-between py-1">
            <div className="text-[16px] md:text-sm lg:text-base opacity-80">Hello,</div>
            <div className="text-[20px] md:text-lg lg:text-xl font-medium">
              I&apos;m <span className="text-tomato">Mickael</span>
            </div>
            <div className="text-[24px] md:text-2xl lg:text-4xl font-righteous mt-0.5 md:mt-1">
              Full-stack <span className="text-tomato">Web Developer</span>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="ml-[5px] lg:ml-[12px]" style={{ marginTop: '25px' }}>
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

      {/* Profile Image (Desktop Only) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[32px] hidden lg:block opacity-80 hover:opacity-100 transition-opacity duration-500">
        <Image
          src="/img/profil_portfolio.png"
          alt="Photo de Mickael"
          width={800}
          height={800}
          priority
          className="rounded-[60px]"
        />
      </div>
    </div>
  );
}
