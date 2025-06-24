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
import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import GridItem from "./GridItem";
import { Link } from "react-router-dom";

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
  const yHeading = useTransform(smoothScroll, [0, 0.4], [80, 0]);
  const opacityHeading = useTransform(smoothScroll, [0.1, 0.4], [0, 1]);

  // const opacity = useTransform(smoothScroll, [0.2, 0.4, 0.8], [0, 1, 1]);
 

  const sectionRef = useRef(null);

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

  const projectsData = [
    {
    id: 1,
    title: "iTunes-Inspired Music UI",
    subtitle: "Responsive UI design for a music platform using HTML, CSS, and Bootstrap",
    category: "ui",
    img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750226041/project1_1_gq5w30.jpg",
    tags: ["HTML", "CSS", "Bootstrap", "Responsive UI"],
    links: {
      live: "https://musicitune.netlify.app/",
      
    },
  },
  {
    id: 2,
    title: "Mediplus Clinic UI",
    subtitle: "Responsive UI design for a clinic platform using HTML, CSS, and Bootstrap",
    category: "ui",
    img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750226041/mediaplus_tyw2y0.jpg",
    tags: ["HTML", "CSS", "Bootstrap", "Responsive"],
    links: {
      live: "https://mediplus-website.netlify.app/",
     
    },
  },
  {
    id: 3,
    title: "Online Food Ordering UI",
    subtitle: "Static website for online delivering using clean HTML/CSS design",
    category: "ui",
    img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750226041/project2_2_wlfcms.jpg",
    tags: ["HTML", "CSS", "Bootstrap", "Landing Page"],
    links: {
      live: "https://foodieperson.netlify.app/",
    },
  },
    {
      id: 4,
      title: "Zwigato – Food Ordering UI",
      subtitle: "Responsive food ordering website built with React, Redux, and Tailwind CSS, featuring dynamic cart functionality",
      category: "frontend",
      img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750757377/IMG_0257_c907nk.jpg",
      tags: ["React", "Redux", "tailwindcss"],
      links: {
        live: "https://zwigato-react-redux.netlify.app/",

      },
    },
    {
      id: 5,
      title: "Movie DB Project",
      subtitle: "Interactive movie database application built with React and filtering functionality with api integration",
      category: "frontend",
      img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750758081/WhatsApp_Image_2025-06-24_at_3.10.01_PM_ebumex.jpg",
      tags: ["React", "Api", "tailwindcss" ],
      links: {
        live: "https://movie-db-project-react.netlify.app/",
      },
    },
    {
      id: 6,
      title: "Expance Tracker",
      subtitle: "Expense tracker application built with React, and Tailwind CSS, featuring dynamic expense management",
      category: "frontend",
      img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750226041/IMG_6559_ovcsko.jpg",
      tags: ["React",  "tailwindcss" , "javascript"],
      links: {
        live: "https://headgearwebsite.netlify.app/",
        code: "#",
    },
  },
    {
      id: 7,
      title: "Freelance Portfolio ",
      subtitle: "Portfolio website built with basic html,tailwindcss, javascript and framer motion for college student. ",
       category: ["ui", "freelance"], 
      img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750757379/IMG_0256_fx8jbc.jpg",
      tags: ["Html", "tailwindcss", "javascript", "Framer Motion"],
      links: {
        live: "https://amangaud.netlify.app/",
        
      },
    },
    {
      id: 8,
     title: "Freelance Portfolio & Gift Order Site",
     subtitle: "Responsive portfolio website built using React and Tailwind CSS, integrated with Airtable to manage customized gift orders via WhatsApp.",
       category: ["frontend", "freelance"], 
      img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750758082/WhatsApp_Image_2025-06-24_at_3.10.02_PM_1_mieyqz.jpg",
      tags: ["React", "tailwindcss", "Airtable" ,"Framer Motion"],
      links: {
        live: "https://suhaniscreations.vercel.app/",
        
      },
    },
    {
      id: 9,
     title: "Freelance Portfolio of a Construction Company",
     subtitle: "Responsive portfolio website built using React and Tailwind CSS, and framer motion for animations",
       category: ["frontend", "freelance"], 
      img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750757323/IMG_0255_aunru7.jpg",
      tags: ["React", "tailwindcss" ,"Framer Motion"],
      links: {
        live: "https://struxora.vercel.app/",
        
      },
    },
    {
      id: 10,
     title: "Freelance Portfolio of a Video Editor",
     subtitle: "Portfolio website built with basic html,tailwindcss, and javascript.",
       category: ["ui", "freelance"], 
      img: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750758081/WhatsApp_Image_2025-06-24_at_3.10.02_PM_xpvu2d.jpg",
      tags: ["React", "tailwindcss" ,"javascript" ],
      links: {
        live: "https://vivekpersonalportfolio.vercel.app/",
      },
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#111111] px-8  min-h-screen text-[#AAAAAA] py-10 lg:pb-20 relative "
    >
      <div className="max-w-5xl text-center  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="sticky top-0 bg-[#111111] z-50 py-1">
          <Link
            to="/"
            className="inline-block mb-6 text-indigo-400 hover:text-white transition duration-300 text-sm sm:text-base"
          >
            ← Back to Portfolio
          </Link>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-4xl font-bold mb-6 text-[#A6A6A6]"
            style={{
              y: yHeading,
              opacity: opacityHeading,
            }}
          >
            My Work
          </motion.h2>
        </div>

        <motion.div
          className="max-w-5xl mx-auto flex justify-center gap-3 flex-wrap mb-16"
          ref={filterButtonsRef}
          // style={{
          //   y: yCategory,
          //   opacity: opacityCategory,
          // }}
        >
          {["all", "ui", "frontend", "freelance"].map((cat, idx) => (
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
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={gridRef}
          // style={{
          //   y: yPortfolio,
          //   opacityPortfolio,
          //   scale: useTransform(smoothScroll, [0, 0.5], [0.98, 1]),
          // }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {projectsData.map((project) => (
            <GridItem key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
