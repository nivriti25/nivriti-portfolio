export default function About() {
  return (
    <section 
      id="about" 
      className="bg-[#f2fbff] py-24 px-6 md:px-12 border-t border-brand-mid/20"
    >
      <div className="max-w-7xl mx-auto">
        

        {/* Card Wrapper Container */}
        <div className="card-wrapper p-8 md:p-16 relative overflow-hidden bg-[#cfeaff] rounded-3xl border border-[#b7daff] shadow-sm select-none">
          
          {/* Handshake Sticker SVG */}
          <div className="absolute top-6 right-8 w-16 h-16 md:w-24 md:h-24 text-brand rotate-[10deg] animate-bounce-slow">
            <svg 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full filter drop-shadow-[2px_2px_0px_#145AB5]"
            >
              <circle cx="50" cy="50" r="45" fill="#f2fbff" stroke="#145AB5" strokeWidth="4" />
              <path 
                d="M30 55 C 35 48, 45 48, 50 55 C 55 60, 65 60, 70 55 M 35 50 L 40 45 M 65 50 L 60 45" 
                stroke="#145AB5" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
              <path 
                d="M42 35 C42 35 48 30 50 38 C52 30 58 35 58 35" 
                stroke="#145AB5" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
            </svg>
          </div>

          {/* Large Stylized Summary Paragraph */}
          <p className="font-inter text-2xl md:text-3xl font-semibold leading-snug text-text-dark max-w-4xl mb-12">
            From building full-stack <span className="text-brand">Web Applications</span> to designing intuitive <span className="text-brand">User Interfaces,</span> I bring clean design and <span className="bg-brand text-white px-3 py-0.5 rounded-md inline-block rotate-[-1deg] shadow-[2px_2px_0px_#084594] text-nowrap">production-ready code</span> directly to your digital space.
          </p>

          {/* 2-Column Detail Text & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-text-dark/80 text-base md:text-lg leading-relaxed font-medium">
            <div className="lg:col-span-7 space-y-4">
              <p>
                I'm a pre-final year Computer Science student specialising in the Internet of Things, which basically means I love thinking about how software talks to the physical world. But my real obsession right now? Building things on the web and teaching machines to think.
              </p>
              <p>
                I'm diving deep into full stack web development and AI engineering—two fields that, when combined, feel like they can build almost anything. I'm still early in that journey, learning fast, and this space is where I'll document every project I ship along the way.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img 
                src="/profile.jpg" 
                alt="Nivriti Portrait" 
                className="w-full max-w-sm aspect-[3/4] object-cover rounded-2xl border-2 border-brand shadow-[6px_6px_0px_#084594] hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}