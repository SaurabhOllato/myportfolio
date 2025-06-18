import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particles from "./Projects.jsx";
import { useScroll, useTransform, motion } from "framer-motion";
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
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  const heroRef = useRef(null);
   const fullName = "SaurabhChaurasia";
  const [displayed, setDisplayed] = useState("");

    useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 100); // typing speed

    return () => clearInterval(interval);
  }, []);

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

  const scaleDash = useTransform(scrollY, [0, 300], [1, 3]); // "—" stretch
  const frontX = useTransform(scrollY, [0, 300], [0, -100]); // move left
  const endX = useTransform(scrollY, [0, 300], [0, 100]); // move right

   // Watch scroll inside the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Fade out scroll indicator as user scrolls down
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full min-h-[60vh] lg:min-h-screen px-4 sm:px-6 bg-[#111111] overflow-hidden"
    >
      {/* Header + Hero Container */}
      <div className="relative z-10 flex flex-row max-w-4xl mx-auto items-center justify-between w-full px-6 py-3 sm:h-20">
        {/* Left: Logo */}
        <motion.h1
        className="text-white font text-sm sm:text-xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayed}
      </motion.h1>

        {/* Right: Resume Button */}
        <div>
          <button
            ref={cvButtonRef}
            className=" text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            Resume
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-12rem)] px-6 lg:px-20 pt-10">
        <div className="text-center w-full max-w-3xl mb-8 space-y-4">
          {/* Headline Part 1 */}
          {/* <h1
            ref={textLine1Ref}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#A6A6A6] mb-2 tracking-tight"
          >
            Hello, I'm a
          </h1> */}
          <h1 className="hero-line text-[48px] xs:text-[56px] sm:text-[72px] md:text-[80px] lg:text-[100px] font-bold leading-[0.9] text-[#A6A6A6] tracking-tight flex justify-center">
            <motion.span style={{ x: frontX }}>FRONT</motion.span>
            <motion.span
              className="inline-block mx-4 origin-center"
              style={{ scaleX: scaleDash }}
            >
              —
            </motion.span>
            <motion.span style={{ x: endX }}>END</motion.span>
          </h1>
          <h1 className="hero-line text-[48px] xs:text-[56px] sm:text-[72px] md:text-[80px] lg:text-[100px] font-bold leading-[0.9] text-[#A6A6A6] tracking-tight mt-2 sm:mt-4 flex justify-center">
            DEVELOPER
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
      href="#about"
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;
