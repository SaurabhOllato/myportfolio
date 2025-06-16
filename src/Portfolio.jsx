// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Portfolio() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null); // 👈 Add this

//   useEffect(() => {
//     const items = sectionRef.current.querySelectorAll(
//       ".portfolio-item, .section-header"
//     );

//     items.forEach((item, index) => {
//       gsap.fromTo(
//         item,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.6,
//           delay: index * 0.1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: item,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     });
//   }, []);

//   useEffect(() => {
//     const filterButtons = sectionRef.current.querySelectorAll(".filter-btn");
//     const portfolioGrid = sectionRef.current.querySelector("#portfolioGrid");

//     const handleClick = (e) => {
//       const filterValue = e.currentTarget.getAttribute("data-filter");
//       const items = portfolioGrid.querySelectorAll(".portfolio-item");

//       filterButtons.forEach((btn) =>
//         btn.classList.remove("text-indigo-600", "bg-indigo-50")
//       );
//       e.currentTarget.classList.add("text-indigo-600", "bg-indigo-50");

//       items.forEach((item) => {
//         const category = item.getAttribute("data-category");
//         const match = category.includes(filterValue) || filterValue === "all";
//         item.style.display = match ? "block" : "none";
//       });
//     };

//     filterButtons.forEach((btn) =>
//       btn.addEventListener("click", handleClick)
//     );

//     return () => {
//       filterButtons.forEach((btn) =>
//         btn.removeEventListener("click", handleClick)
//       );
//     };
//   }, []);

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="bg-[#111111] min-h-screen text-[#AAAAAA] py-16 relative"
//     >
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-12 section-header " ref={headingRef}>
//           <h2 className="text-4xl md:text-6xl font-bold text-[#AAAAAA] mb-4">
//           Portfolio
//           </h2>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             Explore my creative projects across different categories
//           </p>
//         </div>

//         <div className="flex justify-center gap-4 flex-wrap mb-12">
//           {["all", "branding", "logo", "uiux", "web", "design"].map((cat, idx) => (
//             <button
//               key={cat}
//               className={`filter-btn px-4 py-2 rounded-full transition-all duration-300 font-medium ${
//                 idx === 0
//                   ? "text-indigo-600 bg-indigo-50"
//                   : "hover:text-indigo-600 hover:bg-indigo-50"
//               }`}
//               data-filter={cat}
//             >
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </button>
//           ))}
//         </div>

//         <div
//           className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           id="portfolioGrid"
//         >
//           {[
//             {
//               id: 1,
//               title: "Branding Project",
//               subtitle: "Brand Identity Design",
//               category: "branding,design",
//               img: "https://i.pinimg.com/736x/8b/51/4a/8b514a4b658b439f170e99b8f5474fb0.jpg",
//             },
//             {
//               id: 2,
//               title: "Web Project",
//               subtitle: "Responsive Web Design",
//               category: "web,uiux",
//               img: "https://images.unsplash.com/photo-1519315901367-f34ff9154487",
//             },
//             {
//               id: 3,
//               title: "Logo Design",
//               subtitle: "Brand Identity",
//               category: "logo,branding",
//               img: "https://images.unsplash.com/photo-1519315901367-f34ff9154487",
//             },
//             {
//               id: 4,
//               title: "UI/UX Project",
//               subtitle: "User Interface Design",
//               category: "branding,uiux",
//               img: "https://i.pinimg.com/736x/f7/60/72/f76072d1d73b5c5ca9a64079fafd1c8b.jpg",
//             },
//             {
//               id: 5,
//               title: "Web Design",
//               subtitle: "Modern Website",
//               category: "web,design",
//               img: "https://images.unsplash.com/photo-1547658719-da2b51169166",
//             },
//             {
//               id: 6,
//               title: "Logo Design",
//               subtitle: "Minimal Brand Identity",
//               category: "logo,design",
//               img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
//             },
//           ].map((item) => (
//             <div
//               key={item.id}
//               className="portfolio-item group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-500 hover:shadow-xl"
//               data-id={item.id}
//               data-category={item.category}
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                   <div>
//                     <h3 className="text-white text-xl font-bold mb-1">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-300">{item.subtitle}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const ref = useRef(null);
  const timelineRef = useRef(null);

  // Smooth scroll progress with spring physics
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothScroll = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
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
  const yHeading = useTransform(smoothScroll, [0, 1], [100, 0]);
  const yParagraph = useTransform(smoothScroll, [0, 1], [150, 0]);
  const opacity = useTransform(smoothScroll, [0.2, 0.4, 0.8], [0, 1, 1]);
  const scale = useTransform(smoothScroll, [0, 0.5], [0.95, 1]);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const filterButtonsRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // animation setup...

    const items = gridRef.current.querySelectorAll(".portfolio-item");

    const cleanupFns = [];

    items.forEach((item) => {
      const img = item.querySelector("img");
      const content = item.querySelector("div[class*='absolute']");

      gsap.set(img, { scale: 1.1 });
      gsap.set(content, { y: 30, opacity: 0 });

      gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      const handleMouseEnter = () => {
        gsap.to(img, { scale: 1, duration: 0.7, ease: "power2.out" });
        gsap.to(content, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(img, { scale: 1.1, duration: 0.7, ease: "power2.out" });
        gsap.to(content, {
          y: 30,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      // cleanup
      cleanupFns.push(() => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  const handleFilterClick = (e, cat) => {
    const filterButtons = filterButtonsRef.current.children;
    const items = gridRef.current.querySelectorAll(".portfolio-item");

    // Animate filter buttons
    gsap.to(filterButtons, {
      color: "#AAAAAA",
      backgroundColor: "transparent",
      duration: 0.3,
    });

    gsap.to(e.currentTarget, {
      color: "#FFFFFF",
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      duration: 0.3,
    });

    // Animate grid items
    items.forEach((item) => {
      const category = item.getAttribute("data-category");
      const match = category.includes(cat) || cat === "all";

      if (match) {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            display: "block",
          }
        );
      } else {
        gsap.to(item, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
          display: "none",
          onComplete: () => {
            item.style.display = "none";
          },
        });
      }
    });
  };

  const projectCategories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "uiux", name: "UI/UX Design" },
    { id: "branding", name: "Branding" },
    { id: "mobile", name: "Mobile Apps" },
  ];

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Full-stack online store with payment integration",
      category: "web",
      img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749815459/pexels-carolinefeelgood-3363681_kegpgl.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        live: "#",
        code: "#",
      },
    },
    {
      id: 2,
      title: "Dashboard UI Kit",
      subtitle: "Design system for analytics applications",
      category: "uiux",
      img: "https://source.unsplash.com/random/600x600/?dashboard",
      tags: ["Figma", "Design System", "UI Components"],
      links: {
        live: "#",
        code: "#",
      },
    },
    {
      id: 3,
      title: "Corporate Branding",
      subtitle: "Complete visual identity for tech startup",
      category: "branding",
      img: "https://source.unsplash.com/random/600x600/?branding",
      tags: ["Logo", "Typography", "Color Palette"],
      links: {
        live: "#",
        code: "#",
      },
    },
    {
      id: 4,
      title: "Fitness Mobile App",
      subtitle: "Workout tracking and nutrition planning",
      category: "mobile",
      img: "https://source.unsplash.com/random/600x600/?fitness",
      tags: ["React Native", "Firebase", "Health API"],
      links: {
        live: "#",
        code: "#",
      },
    },
    {
      id: 5,
      title: "Portfolio Website",
      subtitle: "Minimalist designer portfolio",
      category: "web",
      img: "https://source.unsplash.com/random/600x600/?portfolio",
      tags: ["GSAP", "Three.js", "Responsive"],
      links: {
        live: "#",
        code: "#",
      },
    },
    {
      id: 6,
      title: "SAAS Product UI",
      subtitle: "User interface for productivity tool",
      category: "uiux",
      img: "https://source.unsplash.com/random/600x600/?saas",
      tags: ["User Flows", "Wireframes", "Prototyping"],
      links: {
        live: "#",
        code: "#",
      },
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#111111] min-h-screen text-[#AAAAAA] py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-900/10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(40px)",
              transform: `scale(${Math.random() * 2 + 1})`,
            }}
          />
        ))}
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-24"
          style={{
            y: yHeading,
            opacity,
            scale,
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My <span className="text-indigo-400">Work</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-indigo-500 mx-auto mb-8"
            style={{ y: yParagraph }}
          />
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ y: yParagraph }}
          >
            Selected projects showcasing my skills in design and development
          </motion.p>
        </motion.div>

        <div
          className="flex justify-center gap-3 flex-wrap mb-16"
          ref={filterButtonsRef}
        >
          {["all", "branding", "logo", "uiux", "web", "design"].map(
            (cat, idx) => (
              <button
                key={cat}
                onClick={(e) => handleFilterClick(e, cat)}
                className={`filter-btn px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm sm:text-base ${
                  idx === 0
                    ? "text-white bg-indigo-500/20"
                    : "text-[#AAAAAA] hover:text-white hover:bg-indigo-500/10"
                }`}
                data-filter={cat}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            )
          )}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={gridRef}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="portfolio-item group relative overflow-hidden rounded-xl bg-gradient-to-b from-white/5 to-white/[0.01] backdrop-blur-sm border border-white/5 shadow-lg transition-all duration-500 hover:border-indigo-500/50 hover:shadow-indigo-500/10"
              data-category={project.category}
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Project tags */}
                <div className="portfolio-tags absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project content overlay */}
                <div className="portfolio-content absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.subtitle}
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-300"
                        >
                          Live Demo <FiExternalLink className="text-sm" />
                        </a>
                      )}
                      {project.links.code && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
                        >
                          Code <FiGithub className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
