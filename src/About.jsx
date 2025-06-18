// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useRef } from "react";

// const About = () => {
//   const ref = useRef(null);
//   const timelineRef = useRef(null);

//   // Smooth scroll progress with spring physics
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const smoothScroll = useSpring(scrollYProgress, {
//     damping: 20,
//     stiffness: 200,
//   });

//   const { scrollYProgress: timelineScroll } = useScroll({
//     target: timelineRef,
//     offset: ["start end", "end start"],
//   });
//   const smoothTimelineScroll = useSpring(timelineScroll, {
//     damping: 20,
//     stiffness: 100,
//   });

//   // Animations for about section
//   const yHeading = useTransform(smoothScroll, [0, 1], [100, 0]);
//   const yParagraph = useTransform(smoothScroll, [0, 1], [150, 0]);
//   const opacity = useTransform(smoothScroll, [0.2, 0.4, 0.8], [0, 1, 1]);
//   const scale = useTransform(smoothScroll, [0, 0.5], [0.95, 1]);

//   // Timeline animations
//   const timelineTitleY = useTransform(smoothTimelineScroll, [0, 1], [100, 0]);
//   const timelineTitleOpacity = useTransform(
//     smoothTimelineScroll,
//     [0.2, 0.4, 0.8],
//     [0, 1, 1]
//   );

//   const workData = [
//     {
//       year: "2022",
//       title: "Frontend Developer",
//       company: "Ollato",
//       description: "Built UI with React and Tailwind.",
//       icon: "💻",
//     },
//     {
//       year: "2023",
//       title: "Freelance Projects",
//       company: "Multiple Clients",
//       description: "Created modern websites and portfolios.",
//       icon: "🚀",
//     },
//     {
//       year: "2024",
//       title: "Intern - React Developer",
//       company: "TechX",
//       description: "Worked on reusable components and animations.",
//       icon: "⚛️",
//     },
//   ];

//   return (
//     <>
//       {/* About Section */}
//       <section
//         ref={ref}
//         className="min-h-screen flex items-center justify-center bg-[#111111] text-[#737373] overflow-hidden relative px-4 sm:px-8"
//       >
//         <motion.div
//           className="absolute inset-0 bg-[#111111]"
//           style={{
//             scale: useTransform(smoothScroll, [0, 1], [1.1, 1]),
//             opacity: useTransform(smoothScroll, [0, 1], [0.5, 0]),
//           }}
//         />
        
//         <div className="max-w-3xl px-4 relative z-10">
//           <motion.h2
//             className="text-6xl md:text-8xl font-bold mb-6 text-[#A6A6A6] "
//             style={{ 
//               y: yHeading, 
//               opacity,
//               scale 
//             }}
//           >
//             About Me
//           </motion.h2>
//           <motion.p 
//             className="text-lg md:text-xl leading-relaxed"
//             style={{ 
//               y: yParagraph, 
//               opacity,
//               scale: useTransform(smoothScroll, [0, 0.5], [0.98, 1])
//             }}
//           >
//             I'm Saurabh Chaurasia, a passionate frontend developer who enjoys
//             crafting clean and interactive user interfaces. I specialize in
//             building modern web experiences that are both functional and
//             visually appealing. I also work with React to develop dynamic,
//             component-based applications, and I'm currently expanding my skill
//             set by learning backend development. I have a working knowledge of
//             PHP and Laravel, which helps me understand full-stack workflows and
//             build more complete web solutions.
//           </motion.p>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section
//         ref={timelineRef}
//         className="min-h-screen bg-[#111111] text-[#a0a0a0]  px-4 relative overflow-hidden  sm:px-8"
//       >
//         <motion.div
//           className="absolute inset-0 bg-[#111111]"
//           style={{
//             scale: useTransform(smoothTimelineScroll, [0, 1], [1.1, 1]),
//             opacity: useTransform(smoothTimelineScroll, [0, 1], [0.5, 0]),
//           }}
//         />
        
//         <div className="max-w-3xl mx-auto relative z-10">
//           {/* <motion.h2
//             className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
//             style={{
//               y: timelineTitleY,
//               opacity: timelineTitleOpacity,
//             }}
//           >
//             Professional Journey
//           </motion.h2> */}

//           <div className="relative max-w-4xl mx-auto">
//             <motion.div 
//               className="absolute left-0 top-0 h-full w-0.5 bg-blue-500 origin-top"
//               style={{
//                 scaleY: useTransform(smoothTimelineScroll, [0, 1], [0, 1]),
//               }}
//             />
            
//             <div className="space-y-16 pl-8">
//               {workData.map((item, index) => {
//                 const itemProgress = useTransform(
//                   smoothTimelineScroll,
//                   [index * 0.25, index * 0.25 + 0.5],
//                   [0, 1]
//                 );
                
//                 const y = useTransform(itemProgress, [0, 1], [50, 0]);
//                 const opacity = useTransform(itemProgress, [0, 1], [0, 1]);
//                 const scale = useTransform(itemProgress, [0, 1], [0.9, 1]);

//                 return (
//                   <motion.div
//                     key={index}
//                     className="relative"
//                     style={{ y, opacity, scale }}
//                   >
//                     <motion.div
//                       className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg border-4 border-[#0b0b0b]"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       {item.icon}
//                     </motion.div>
//                     <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
//                       <div className="flex items-baseline gap-2">
//                         <span className="text-blue-400 font-bold">{item.year}</span>
//                         <span className="text-white text-xl font-semibold">
//                           {item.title}
//                         </span>
//                       </div>
//                       <p className="text-blue-300 font-medium mt-1">{item.company}</p>
//                       <p className="text-gray-400 mt-3">{item.description}</p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const timelineRef = useRef(null);

  // Smooth scroll progress with spring physics
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothScroll = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 200,
  });

  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const smoothTimelineScroll = useSpring(timelineScroll, {
    damping: 20,
    stiffness: 100,
  });

  // Animations for about section
  // const yHeading = useTransform(smoothScroll, [0, 1], [100, 0]);
   const yHeading = useTransform(smoothScroll, [0, 0.4], [80, 0]);           // Enters earlier, less dramatic

  // const yParagraph = useTransform(smoothScroll, [0, 1], [150, 0]);
  const yParagraph = useTransform(smoothScroll, [0.2, 0.6], [150, 0]);         // Comes after heading

  const opacity =  useTransform(smoothScroll, [0.1, 0.4], [0, 1]);
  const opacitySkills = useTransform(smoothScroll, [0.2, 0.5], [0, 1]);

  const scale = useTransform(smoothScroll, [0, 0.5], [0.95, 1]);

  // Timeline animations
  const timelineTitleY = useTransform(smoothTimelineScroll, [0, 1], [100, 0]);
  const timelineTitleOpacity = useTransform(
    smoothTimelineScroll,
    [0.2, 0.4, 0.8],
    [0, 1, 1]
  );

  const workData = [
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Ollato",
      description: "Built UI with React and Tailwind.",
      icon: "💻",
    },
    {
      year: "2023",
      title: "Freelance Projects",
      company: "Multiple Clients",
      description: "Created modern websites and portfolios.",
      icon: "🚀",
    },
    {
      year: "2024",
      title: "Intern - React Developer",
      company: "TechX",
      description: "Worked on reusable components and animations.",
      icon: "⚛️",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section
        ref={ref}
        id="about"
        className="min-h-screen flex items-center justify-center bg-[#111111] text-[#737373] overflow-hidden relative px-8 sm:px-8"
      >
        <motion.div
          className="absolute inset-0 bg-[#111111]"
          style={{
            scale: useTransform(smoothScroll, [0, 1], [1.1, 1]),
            opacity: useTransform(smoothScroll, [0, 1], [0.5, 0]),
          }}
        />

        <div className="max-w-4xl relative z-10 text-center">
          <motion.h2
            className="text-6xl sm:text-6xl md:text-7xl font-bold mb-6 text-[#A6A6A6]"
            style={{
              y: yHeading,
              opacity,
              scale,
            }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl leading-relaxed mt-4 text-[#c0c0c0] text-justify"
            style={{
              y: yParagraph,
              opacitySkills,
            scale: useTransform(smoothScroll, [0, 0.5], [0.98, 1]),
            }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          >
            I'm Saurabh Chaurasia, a passionate frontend developer who enjoys
            crafting clean and interactive user interfaces. I specialize in
            building modern web experiences that are both functional and
            visually appealing. I also work with React to develop dynamic,
            component-based applications, and I'm currently expanding my skill
            set by learning backend development. I have a working knowledge of
            PHP and Laravel, which helps me understand full-stack workflows and
            build more complete web solutions.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={timelineRef}
        className="h-fit lg:min-h-screen bg-[#111111] text-[#a0a0a0] px-8 sm:px-8 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-[#111111]"
          style={{
            scale: useTransform(smoothTimelineScroll, [0, 1], [1.1, 1]),
            opacity: useTransform(smoothTimelineScroll, [0, 1], [0.5, 0]),
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative">
            <motion.div
              className="absolute left-0 top-0 h-full w-0.5 bg-blue-500 origin-top"
              style={{
                scaleY: useTransform(smoothTimelineScroll, [0, 1], [0, 1]),
              }}
            />

            <div className="space-y-16 pl-10 sm:pl-14">
              {workData.map((item, index) => {
                const itemProgress = useTransform(
                  smoothTimelineScroll,
                  [index * 0.25, index * 0.25 + 0.5],
                  [0, 1]
                );

                const y = useTransform(itemProgress, [0, 1], [50, 0]);
                const opacity = useTransform(itemProgress, [0, 1], [0, 1]);
                const scale = useTransform(itemProgress, [0, 1], [0.9, 1]);

                return (
                  <motion.div
                    key={index}
                    className="relative"
                    style={{ y, opacity, scale }}
                  >
                    <motion.div
                      className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg border-4 border-[#0b0b0b]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
                      <div className="flex items-baseline gap-2">
                        <span className="text-blue-400 font-bold">{item.year}</span>
                        <span className="text-white text-xl font-semibold">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-blue-300 font-medium mt-1">{item.company}</p>
                      <p className="text-gray-400 mt-3">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
