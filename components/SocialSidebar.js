export default function SocialSidebar() {
  return (
    <div className="absolute top-[271px] right-[13px] z-50 hidden lg:flex flex-col gap-[22px]">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin-in text-[33px] text-white hover:text-tomato transition-colors duration-300 pointer-cursor" aria-hidden="true" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github text-[33px] text-white hover:text-tomato transition-colors duration-300 pointer-cursor" aria-hidden="true" />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-x-twitter text-[33px] text-white hover:text-tomato transition-colors duration-300 pointer-cursor" aria-hidden="true" />
      </a>
    </div>
  );
}
