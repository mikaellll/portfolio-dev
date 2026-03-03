export default function BackgroundDecor({ isHomePage }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <div className="absolute top-[-162px] left-[1005px] text-[#565656] opacity-[0.15] text-[218px] font-black font-roboto">DEVELOP</div>
      <div className="absolute top-[145px] left-[23px] text-[#565656] opacity-[0.15] text-[218px] font-black font-roboto">WEB</div>
      <div className="absolute top-[355px] left-[23px] text-[#565656] opacity-[0.15] text-[218px] font-black font-roboto">DEVELOPER</div>
      <div className="absolute top-[568px] left-[23px] text-[#565656] opacity-[0.15] text-[218px] font-black w-[1042px] font-roboto">Full-stack</div>
      
      <div className="absolute top-[529px] left-[-192px] w-[410px] h-[345px] border-2 border-aqua opacity-[0.12] rotate-[23deg]" />
      <div 
        className={
          isHomePage 
            ? "absolute top-[12px] right-[10%] lg:right-[15%] w-[215px] h-[232px] border-2 border-aqua opacity-[0.12] rotate-[23deg] z-40"
            : "absolute top-[12px] left-[90%] w-[215px] h-[232px] border-2 border-aqua opacity-[0.12] rotate-[23deg] z-40"
        } 
      />
    </div>
  );
}
