'use client';

export default function TechBento() {
  const techs = [
    {
      name: 'React',
      description: 'Interface basée sur les composants',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 text-aqua">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
      colSpan: 'col-span-1',
      hoverColor: 'hover:border-aqua hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]'
    },
    {
      name: 'Next.js',
      description: 'Le framework React',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128" className="w-10 h-10 text-white">
          <path fill="currentColor" fillRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM44.2494 38.3582H54.02L91.8021 91.5653C83.9961 99.6953 74.3795 105.8 63.8055 106.311L44.2494 38.3582ZM95.0601 38.3582H85.4925L97.7493 55.4326C97.1009 49.3791 96.3403 43.7667 95.0601 38.3582ZM37.7709 38.3582H30.8242V89.6418H37.7709V38.3582Z" clipRule="evenodd" />
        </svg>
      ),
      colSpan: 'col-span-1',
      hoverColor: 'hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
    },
    {
      name: 'Tailwind CSS',
      description: 'Styles basés sur les utilitaires',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="w-12 h-8 text-aqua">
          <path fill="currentColor" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.05.51 3.52 2.01 5.14 3.66C30.57 12.92 33.43 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.51-3.52-2.01-5.14-3.66C36.93 3.28 34.07 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.05.51 3.52 2.01 5.14 3.66C17.07 29.12 19.93 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.51-3.52-2.01-5.14-3.66C23.43 19.48 20.57 16.2 13.5 16.2Z" clipRule="evenodd" />
        </svg>
      ),
      colSpan: 'col-span-2',
      hoverColor: 'hover:border-aqua hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]'
    },
    {
      name: 'Django',
      description: 'Framework web Python haut niveau',
      icon: (
        <svg viewBox="0 0 148 143" className="w-10 h-10 text-tomato">
          <path fill="currentColor" d="M60.435 68.61c0 8.784-3.328 15.65-9.986 20.605-6.657 4.953-15.011 7.431-25.06 7.431H0v-70.33h26.47c10.233 0 18.257 2.375 24.08 7.126 5.819 4.75 8.878 11.233 8.878 19.45 0 2.214-.234 4.19-.705 5.922 1.25-.138 2.308-.204 3.172-.204h8.324l.115-41.97H93.18v81.16H66.6V78.22h-1.62c-2.43 0-5.467.247-9.116.742l4.571-10.354zm-37.14-25.438V78.68h3.333c4.605 0 8.271-1.396 11.002-4.184 2.73-2.791 4.095-6.791 4.095-12.003 0-5.59-1.228-9.85-3.682-12.783-2.457-2.932-6.241-4.4-11.353-4.4h-5.949l2.553-2.138zM140.238 67.4h-28.745v13.064c0 3.864.717 6.641 2.146 8.326 1.433 1.685 3.518 2.528 6.257 2.528 4.76 0 7.747-2.5 8.956-7.502h24.792c-1.373 10.353-5.26 18.06-11.666 23.116-6.4 5.056-14.771 7.585-25.109 7.585-11.352 0-20.18-3.324-26.48-9.973-6.297-6.647-9.444-16.128-9.444-28.441 0-12.434 2.97-22.096 8.905-28.981 5.937-6.887 14.152-10.33 24.64-10.33v40.61h.748zm-22.128-44.573c2.478 0 4.604.887 6.37 2.66 1.768 1.776 2.652 3.903 2.652 6.38 0 2.477-.884 4.59-2.651 6.338-1.767 1.75-3.89 2.625-6.37 2.625-2.483 0-4.608-.875-6.376-2.625-1.767-1.748-2.65-3.86-2.65-6.338 0-2.477.882-4.604 2.65-6.38 1.768-1.773 3.893-2.66 6.375-2.66zm13.197 29.565c-2.022-3.414-4.575-5.946-7.653-7.595-3.08-1.65-6.426-2.473-10.038-2.473-5.655 0-10.354 1.838-14.09 5.513-3.738 3.676-5.836 8.631-6.294 14.869l6.305.65-6.305-.65h38.075zM128.5 73.08h-4.39"/>
        </svg>
      ),
      colSpan: 'col-span-1',
      hoverColor: 'hover:border-tomato hover:shadow-[0_0_15px_rgba(255,99,71,0.3)]'
    },
    {
      name: 'Flask',
      description: 'Framework WSGI léger',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-white">
          <path fill="currentColor" d="M12.062 0l-5.69 13.92H8.34l-1.99-4.88h7.4l-1.98 4.88h1.96L8.038 24l5.417-13.254h-1.92l1.9-4.665h-7.39l1.9-4.665H12.06z"/>
        </svg>
      ),
      colSpan: 'col-span-1',
      hoverColor: 'hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
    },
  ];

  return (
    <div className="w-full h-full pt-[40px] lg:pt-[80px]">
      <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full max-w-[500px] mx-auto lg:mx-0">
        {techs.map((tech) => (
          <div 
            key={tech.name}
            className={`
              flex flex-col items-start justify-between p-6 rounded-2xl
              bg-[#111] bg-opacity-80 backdrop-blur-md 
              border border-white/10
              transition-all duration-300 ease-in-out cursor-pointer group
              ${tech.colSpan}
              ${tech.hoverColor}
              hover:-translate-y-1
            `}
          >
            <div className={`mb-4 transition-transform duration-300 group-hover:scale-110`}>
              {tech.icon}
            </div>
            <div>
              <h3 className="text-xl font-sans font-bold text-white mb-1 group-hover:text-aqua transition-colors">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-400">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
