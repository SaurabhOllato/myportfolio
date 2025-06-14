import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particles from "./Projects.jsx";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // const heroRef = useRef(null);
  const textLine1Ref = useRef(null);
  const textLine2Ref = useRef(null);
  const textLine3Ref = useRef(null);
  const underlineRef = useRef(null);
  const ballRef = useRef(null);
  const navItemsRef = useRef([]);
  const logoRef = useRef(null);
  const cvButtonRef = useRef(null);



   const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    tl.fromTo(
      ".hero-line",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative w-full min-h-screen bg-[#111111] overflow-hidden">
      {/* Particles Background */}
      {/* <Particles className="absolute inset-0 z-0" /> */}
      
      {/* Animated gradient overlay */}
      {/* <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0F0F1A] via-[#1C1C2E] to-[#1A1A1A]" /> */}

      {/* Header + Hero Container */}
      <div className="relative z-10 flex flex-col sm:flex-row h-auto sm:h-20 w-full">
        {/* Left Column: Logo */}
        <div className="w-full sm:w-1/3 text-white flex items-center justify-between px-6 py-3 sm:py-0 sm:justify-end">
       
          <h1 className="font">SaurabhChaurasia</h1>
        </div>

        {/* Right Column: Nav + CV Button */}
        <div className="w-full sm:w-1/2 hidden lg:flex flex-row items-center justify-end px-6 gap-4 py-3 sm:py-0">
          {/* <nav>
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 font-medium text-white">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <li key={item}>
                  <a 
                    ref={el => navItemsRef.current[index] = el}
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-purple-400 transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav> */}
          <button
            ref={cvButtonRef}
            className="bg-[#] text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            Resume
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-5rem)] px-6 lg:px-20 pt-10">
        <div className="text-center w-full max-w-3xl mb-8 space-y-4">
          {/* Headline Part 1 */}
          {/* <h1
            ref={textLine1Ref}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#A6A6A6] mb-2 tracking-tight"
          >
            Hello, I'm a
          </h1> */}
            <h1 className="hero-line text-[64px] sm:text-[100px] font-bold leading-none  text-[#A6A6A6] tracking-tight">
          FRONT <span className="inline-block">—</span> END
        </h1>
        <h1 className="hero-line text-[64px] sm:text-[100px] font-bold leading-none  text-[#A6A6A6] tracking-tight">
          DEVELOPER
        </h1>

          {/* Headline Part 2 */}
         

          {/* Subheading */}
        <div className="hero-line text-sm md:text-base max-w-md text-gray-400">
        {/* <p>
          I am a developer focused on creating bold, responsive, and elegant
          digital experiences. I work with brands and agencies to build unique
          web interfaces.
        </p> */}
      </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            {/* <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
              View Projects
            </button>
            <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400/10 transition-all duration-300">
              Contact Me
            </button> */}
          </div>
        </div>
      </div>

      {/* Floating ball cursor */}
      <svg 
        ref={ballRef}
        id="ball" 
        viewBox="0 0 20 20" 
        width="20" 
        height="20"
        className="fixed z-50 pointer-events-none mix-blend-difference"
      >
        <circle cx="10" cy="10" r="8" fill="#fff" />
      </svg>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;