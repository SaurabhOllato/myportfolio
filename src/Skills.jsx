// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Skills() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const columnsRef = useRef(null);
//   const toolsRef = useRef(null);
//   const linesRef = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center",
//           end: "bottom center",
//           scrub: 1,
//         },
//       });

//       tl.from(titleRef.current, {
//         y: 100,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out",
//       })
//         .from(columnsRef.current, {
//           y: 150,
//           opacity: 0,
//           duration: 1,
//         }, "-=0.6")
//         .from(linesRef.current, {
//           scaleY: 0,
//           transformOrigin: "bottom",
//           duration: 1,
//           stagger: 0.2,
//         }, "-=0.8")
//         .from(toolsRef.current, {
//           y: 100,
//           opacity: 0,
//           duration: 1,
//         }, "-=0.5");

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const frontendSkills = [
//     { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" },
//     { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" },
//     { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
//     { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
//     { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
//   ];

//   const backendSkills = [
//     { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
//     { name: "Express", icon: <i class="devicon-express-original-wordmark"></i> },
//     { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
//     { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" }
//   ];

//   const tools = [
//     { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
//     { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original-wordmark.svg" },
//     { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
//     { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" },
//     { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" },
//     { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
//   ];

//   const skillVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: (i) => ({
//       y: 0,
//       opacity: 1,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5,
//         type: "spring",
//         stiffness: 100
//       }
//     })
//   };

//    const marqueeRef = useRef(null);

//  useEffect(() => {
//   if (marqueeRef.current) {
//     const textWidth = marqueeRef.current.scrollWidth;
//     const viewportWidth = window.innerWidth;

//     gsap.to(".marquee-text", {
//       x: `-${textWidth - viewportWidth}px`, // scroll whole width
//       ease: "none",
//       scrollTrigger: {
//         trigger: "#marquee",
//         start: "top bottom",
//         end: "bottom+=1000 top", // increased scroll distance
//         scrub: 6, // higher scrub makes it slower & smoother
//       },
//     });
//   }
// }, []);


//   return (
//     <section ref={sectionRef} className="bg-[#111111] text-[#AAAAAA] relative mx-auto py-16 px-4 min-h-screen">
//       <div className="max-w-4xl mx-auto relative z-10">
        
//         {/* Title */}
//         <div ref={titleRef} className="relative">
//           <h5 className="text-2xl sm:text-6xl font-semibold mb-10 border-b-2 border-indigo-500 pb-2 text-center mx-auto lg:w-[500px]">
//             MY SKILLS
//           </h5>
//           {/* Lines */}
//           <div
//             ref={(el) => (linesRef.current[0] = el)}
//             className="absolute w-[2px] h-[50px] bg-indigo-600 left-1/4 top-full origin-bottom"
//           />
//           <div
//             ref={(el) => (linesRef.current[1] = el)}
//             className="absolute w-[2px] h-[415px] lg:h-[50px] bg-indigo-600 right-1/4 top-full origin-bottom"
//           />
//           <div
//             ref={(el) => (linesRef.current[2] = el)}
//             className="absolute w-[2px] h-[224px] lg:h-[270px] bg-indigo-600 left-1/2 top-full origin-bottom"
//           />
//         </div>

//         {/* Columns */}
//         <div ref={columnsRef} className="grid md:grid-cols-2 gap-10 mt-16 w-full px-4">
//           <div className="frontend-skills">
//             <h2 className="text-sm lg:text-xl font-semibold text-center mb-4">Frontend</h2>
//             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
//               {frontendSkills.map((skill, i) => (
//                 <motion.div
//                   key={skill.name}
//                   custom={i}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, margin: "-100px" }}
//                   variants={skillVariants}
//                   whileHover={{ scale: 1.1 }}
//                   className="flex flex-col items-center"
//                 >
//                   <img src={skill.icon} alt={skill.name} className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer" />
//                   <span className="text-xs mt-2 text-gray-600">{skill.name}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div className="backend-skills">
//             <h2 className="text-sm lg:text-xl font-semibold text-center mb-4">Backend</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
//               {backendSkills.map((skill, i) => (
//                 <motion.div
//                   key={skill.name}
//                   custom={i + frontendSkills.length}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, margin: "-100px" }}
//                   variants={skillVariants}
//                   whileHover={{ scale: 1.1 }}
//                   className="flex flex-col items-center"
//                 >
//                   <img src={skill.icon} alt={skill.name} className="w-10 h-10 sm:w-12 sm:h-12" />
//                   <span className="text-xs mt-2 text-gray-600">{skill.name}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Tools Section */}
//         <div ref={toolsRef} className="mt-20">
//           <h2 className="text-xl font-semibold text-center mb-4">Tools</h2>
//           <div className="mt-12 flex flex-wrap justify-center gap-6 px-4 max-w-6xl mx-auto">
//             {tools.map((tool, i) => (
//               <motion.div
//                 key={tool.name}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-100px" }}
//                 variants={skillVariants}
//                 whileHover={{ scale: 1.1 }}
//                 className="flex flex-col items-center"
//               >
//                 <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
//                 <span className="text-xs mt-2 text-gray-600">{tool.name}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
// {/* <section
//   id="marquee"
//   ref={marqueeRef}
//   className="relative py-20 mt-20 border-y border-[#333] whitespace-nowrap top-10 left-0 text-6xl sm:text-7xl md:text-8xl font-bold text-[#555] select-none"
// >
//   <div className="marquee-wrapper">
//     <h2 className="marquee-text font-bold text-[40px] md:text-[60px] uppercase whitespace-nowrap">
//       Innovative Developer • Creative Thinker • Problem Solver • Innovative Developer • Creative Thinker • Problem Solver •
//     </h2>
//   </div>
// </section> */}


//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

const tools = [
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original-wordmark.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

export default function HexagonGrid() {
  const skillRef = useRef();
  const toolsRef = useRef();

  useEffect(() => {
    const animateItems = (container) => {
      const hexes = container.querySelectorAll(".hex");
      gsap.fromTo(
        hexes,
        { opacity: 0, rotateY: -90 },
        {
          opacity: 1,
          rotateY: 0,
          stagger: 0.1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          },
        }
      );
    };

    animateItems(skillRef.current);
    animateItems(toolsRef.current);
  }, []);

  return (
    <section className="py-16 bg-[#0e0e0e] text-white px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">🚀 My Skills</h2>

      {/* Skills Grid */}
      <div
        ref={skillRef}
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mb-16"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="hex relative w-28 h-32 flex items-center justify-center transform transition-transform hover:rotate-3"
          >
            <div className="absolute w-full h-full bg-indigo-500/20 blur-xl rounded-[10%] scale-110" />
            <div className="w-24 h-28 bg-[#1a1a1a] border border-white/10 rounded-[10%] flex flex-col items-center justify-center shadow-md hover:shadow-indigo-500/30">
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2" />
              <p className="text-sm text-center">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">🛠 Tools I Use</h2>
      <div
        ref={toolsRef}
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"
      >
        {tools.map((tool, i) => (
          <div
            key={i}
            className="hex relative w-28 h-32 flex items-center justify-center transform transition-transform hover:rotate-3"
          >
            <div className="absolute w-full h-full bg-pink-500/20 blur-xl rounded-[10%] scale-110" />
            <div className="w-24 h-28 bg-[#1a1a1a] border border-white/10 rounded-[10%] flex flex-col items-center justify-center shadow-md hover:shadow-pink-500/30">
              <img src={tool.icon} alt={tool.name} className="w-10 h-10 mb-2" />
              <p className="text-sm text-center">{tool.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
