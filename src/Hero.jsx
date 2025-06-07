import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particles from "./Particles.jsx";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textLine1Ref = useRef(null);
  const textLine2Ref = useRef(null);
  const textLine3Ref = useRef(null);
  const underlineRef = useRef(null);
  const ballRef = useRef(null);
  const navItemsRef = useRef([]);
  const logoRef = useRef(null);
  const cvButtonRef = useRef(null);

  useEffect(() => {
    // Master timeline for coordinated animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Logo animation
    tl.from(logoRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
    });

    // Navigation items animation
    tl.from(navItemsRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      stagger: 0.1,
    }, "-=0.5");

    // CV button animation
    tl.from(cvButtonRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
    }, "-=0.4");

    // Text animations
    tl.from(textLine1Ref.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    })
    .from(textLine2Ref.current, {
      opacity: 0,
      y: 40,
      duration: 1,
    }, "-=0.3")
    .from(underlineRef.current, {
      scaleX: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    }, "-=0.8")
    .from(textLine3Ref.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
    }, "-=0.6");

    // Floating ball animation
    gsap.to(ballRef.current, {
      x: "random(-100, 100, 5)",
      y: "random(-100, 100, 5)",
      duration: 3,
      repeat: -1,
      repeatRefresh: true,
      ease: "sine.inOut"
    });

    // Scroll-triggered animations
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Mouse move parallax effect
    heroRef.current.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      gsap.to(textLine2Ref.current, {
        x: x * 20 - 10,
        y: y * 20 - 10,
        duration: 1.5,
        ease: "power1.out"
      });
      
      gsap.to(ballRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      });
    });

    return () => {
      heroRef.current?.removeEventListener("mousemove");
    };
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
          {/* <img 
            ref={logoRef}
            src="assets/LOGO.png" 
            alt="Logo" 
            className="lg:w-20 lg:h-20 w-10 h-10 transition-all duration-300 hover:scale-110" 
          /> */}
          <h1>portfolio</h1>
        </div>

        {/* Right Column: Nav + CV Button */}
        <div className="w-full sm:w-2/3 hidden lg:flex flex-row items-center justify-between px-6 gap-4 py-3 sm:py-0">
          <nav>
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
          </nav>
          <button
            ref={cvButtonRef}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-5rem)] px-6 lg:px-20 pt-10">
        <div className="text-center w-full max-w-3xl">
          {/* Headline Part 1 */}
          <h1
            ref={textLine1Ref}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 tracking-tight"
          >
            Hello, I'm a
          </h1>

          {/* Headline Part 2 */}
          <div className="relative inline-block">
            <h2
              ref={textLine2Ref}
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-gray-100 to-indigo-300 tracking-tight"
            >
              Web Dev<span className="text-white">e</span>loper
            </h2>

            {/* Animated underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1.5 w-full overflow-hidden">
              <span
                ref={underlineRef}
                className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transform origin-left"
              ></span>
            </div>
          </div>

          {/* Subheading */}
          <p
            ref={textLine3Ref}
            className="mt-6 text-gray-400 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Crafting digital experiences with
            <span className="text-purple-400 font-semibold mx-1">clean code</span> &
            <span className="text-purple-400 font-semibold mx-1">thoughtful design</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
              View Projects
            </button>
            <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400/10 transition-all duration-300">
              Contact Me
            </button>
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
        <div className="animate-bounce w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-purple-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;