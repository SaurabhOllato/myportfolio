// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

// export default function Contact() {
//   const topControls = useAnimation();
//   const bottomControls = useAnimation();

//   // Start animations
//   useEffect(() => {
//     topControls.start({
//       x: ["-100%", "100%"],
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 15,
//           ease: "linear",
//         },
//       },
//     });

//     bottomControls.start({
//       x: ["100%", "-100%"],
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 15,
//           ease: "linear",
//         },
//       },
//     });
//   }, [topControls, bottomControls]);

//   // Handle hover state for both scrollers
//   const handleHoverStart = (controls) => {
//     controls.stop();
//   };

//   const handleHoverEnd = (controls, direction) => {
//     controls.start({
//       x: [direction === "top" ? "-100%" : "100%", direction === "top" ? "100%" : "-100%"],
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 15,
//           ease: "linear",
//         },
//       },
//     });
//   };

//   return (
//     <section className="relative overflow-hidden  border-y border-[#333] bg-[#111111] text-white py-20 px-4 min-h-screen flex flex-col">
//       {/* Top Infinite Scroller */}
//       <motion.div
//         className="absolute whitespace-nowrap  top-10 left-0 text-6xl sm:text-7xl md:text-8xl font-bold text-[#555] select-none"
//         animate={topControls}
//         onHoverStart={() => handleHoverStart(topControls)}
//         onHoverEnd={() => handleHoverEnd(topControls, "top")}
//         whileHover={{ color: "#fff" }} // Color changes to white on hover
//       >
//         LET'S TALK — LET'S COLLABORATE — LET'S TALK — LET'S COLLABORATE —
//       </motion.div>

//       {/* Bottom Infinite Scroller */}
//       {/* <motion.div
//         className="absolute whitespace-nowrap bottom-10 left-0 text-6xl sm:text-7xl md:text-8xl font-bold text-[#555] select-none"
//         animate={bottomControls}
//         onHoverStart={() => handleHoverStart(bottomControls)}
//         onHoverEnd={() => handleHoverEnd(bottomControls, "bottom")}
//         whileHover={{ color: "#fff" }} // Color changes to white on hover
//       >
//         GET IN TOUCH — AVAILABLE FOR WORK — GET IN TOUCH — AVAILABLE FOR WORK —
//       </motion.div> */}

//       {/* Main Content (unchanged from your original) */}
//       <div className="relative z-10 flex flex-col items-center justify-center flex-grow space-y-10">
//         <h2 className="text-xl sm:text-2xl text-center">
//           oluwadareseyii@gmail.com
//         </h2>

//         <div className="flex gap-4 flex-wrap justify-center">
//           {["TWITTER", "INSTAGRAM", "GITHUB", "LINKEDIN"].map((item) => (
//             <button
//               key={item}
//               className="border border-gray-500 px-4 py-1 rounded-full hover:bg-gray-800 transition"
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         <div className="w-full flex justify-between text-sm text-gray-500 mt-20 px-4">
//           <div>
//             GIRGAON, MUMBAI <span className="text-white font-semibold">04</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

export default function Contact() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const x = useMotionValue(0);
  const marqueeRef = useRef(null);
  const sectionRef = useRef(null);

  // Marquee animation
  const speed = 80; // pixels per second
  const direction = 1;
  const isHovering = useRef(false);
  const lastTime = useRef(0);

  useAnimationFrame((t) => {
    if (!marqueeRef.current) return;

    if (lastTime.current === 0) {
      lastTime.current = t;
      return;
    }

    const delta = t - lastTime.current;
    lastTime.current = t;

    if (!isHovering.current) {
      const moveBy = (speed * delta) / 1000 * direction;
      // const width = marqueeRef.current.scrollWidth;
      const width = marqueeRef.current.scrollWidth / 2; 
      const currentX = x.get();
      const nextX = currentX + moveBy;

      x.set(nextX >= width ? -width : nextX);
    }
  });

  // Social links data
  const socialLinks = [
    { 
      name: "TWITTER", 
      icon: <FiTwitter className="text-xl" />,
      url: "https://twitter.com/yourusername"
    },
    { 
      name: "INSTAGRAM", 
      icon: <FiInstagram className="text-xl" />,
      url: "https://instagram.com/yourusername"
    },
    { 
      name: "GITHUB", 
      icon: <FiGithub className="text-xl" />,
      url: "https://github.com/yourusername"
    },
    { 
      name: "LINKEDIN", 
      icon: <FiLinkedin className="text-xl" />,
      url: "https://linkedin.com/in/yourusername"
    },
    { 
      name: "UPWORK", 
      icon: <SiUpwork className="text-xl" />,
      url: "https://upwork.com/freelancers/yourusername"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-[#111111] text-[#737373] py-20 px-4 md:px-8 flex flex-col"
      id="contact"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-900/10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Top Infinite Scroller */}
       <div className="relative h-24 md:h-32 border-y border-[#222] overflow-hidden cursor-pointer">
      <motion.div
        ref={marqueeRef}
        className="absolute top-0 left-0 whitespace-nowrap text-5xl sm:text-6xl md:text-7xl font-bold text-[#737373] hover:text-[#A6A6A6] select-none h-full flex items-center"
        style={{ x }}
        onMouseEnter={() => {
          isHovering.current = true;
          document.body.style.cursor = "grab";
        }}
        onMouseLeave={() => {
          isHovering.current = false;
          document.body.style.cursor = "default";
        }}
        onMouseDown={() => {
          document.body.style.cursor = "grabbing";
        }}
        onMouseUp={() => {
          document.body.style.cursor = "grab";
        }}
      >
        {/* Duplicate the content once for seamless looping */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {[...Array(6)].map((_, j) => (
              <span key={j} className="mx-4 md:mx-8">
                GET IN TOUCH <span className="text-[#A6A6A6]">—</span> AVAILABLE FOR WORK <span className="text-[#A6A6A6]">—</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-20 md:mt-32 space-y-10 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <FiMail className="text-3xl mb-4 text-indigo-400" />
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-medium">
            <a 
              href="mailto:oluwadareseyii@gmail.com" 
              className="hover:text-[#A6A6A6] transition-colors duration-300"
            >
              saurabhchaurasiabbf@gmail.com
            </a>
          </h2>
          <p className="text-gray-400 mt-4 text-center max-w-md">
            Feel free to reach out or just to say hello!
          </p>
        </motion.div>

        <motion.div 
          className="flex gap-4 md:gap-6 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {socialLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`border px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                hoveredItem === item.name 
                  ? "bg-indigo-500/10 border-indigo-400 text-white"
                  : "border-gray-700 hover:border-gray-600 text-gray-300"
              }`}
              whileHover={{ 
                y: -3,
                scale: 1.05
              }}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-20 md:mt-32 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 md:mb-0">
            GIRGAON, MUMBAI <span className="text-white font-medium">04</span>
          </div>
          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
            <p className="text-xs mt-1">Designed & Built with ❤️</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}