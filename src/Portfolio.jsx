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

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const filterButtonsRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // Header animation
    gsap.from(headingRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });

    // Filter buttons animation
    gsap.from(filterButtonsRef.current.children, {
      y: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: filterButtonsRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Portfolio items animation
    const items = gridRef.current.querySelectorAll(".portfolio-item");
    
    items.forEach((item, index) => {
      const img = item.querySelector("img");
      const content = item.querySelector("div[class*='absolute']");
      
      // Initial state
      gsap.set(img, { scale: 1.1 });
      gsap.set(content, { y: 30, opacity: 0 });
      
      // Scroll animation
      gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
      
      // Hover animation
      item.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1, duration: 0.7, ease: "power2.out" });
        gsap.to(content, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
      });
      
      item.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1.1, duration: 0.7, ease: "power2.out" });
        gsap.to(content, { y: 30, opacity: 0, duration: 0.3, ease: "power2.in" });
      });
    });
  }, []);

  const handleFilterClick = (e, cat) => {
    const filterButtons = filterButtonsRef.current.children;
    const items = gridRef.current.querySelectorAll(".portfolio-item");
    
    // Animate filter buttons
    gsap.to(filterButtons, {
      color: "#AAAAAA",
      backgroundColor: "transparent",
      duration: 0.3
    });
    
    gsap.to(e.currentTarget, {
      color: "#FFFFFF",
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      duration: 0.3
    });
    
    // Animate grid items
    items.forEach((item) => {
      const category = item.getAttribute("data-category");
      const match = category.includes(cat) || cat === "all";
      
      if (match) {
        gsap.fromTo(item, 
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            ease: "power2.out",
            display: "block"
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
          }
        });
      }
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#111111] min-h-screen text-[#AAAAAA] py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
              transform: `scale(${Math.random() * 2 + 1})`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={headingRef}>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A curated collection of my creative work and professional projects
          </p>
        </div>

        <div 
          className="flex justify-center gap-3 flex-wrap mb-16"
          ref={filterButtonsRef}
        >
          {["all", "branding", "logo", "uiux", "web", "design"].map((cat, idx) => (
            <button
              key={cat}
              onClick={(e) => handleFilterClick(e, cat)}
              className={`filter-btn px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm sm:text-base ${
                idx === 0 ? "text-white bg-indigo-500/20" : "text-[#AAAAAA] hover:text-white hover:bg-indigo-500/10"
              }`}
              data-filter={cat}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={gridRef}
        >
          {[
            {
              id: 1,
              title: "Branding Project",
              subtitle: "Complete brand identity system",
              category: "branding,design",
              img: "https://source.unsplash.com/random/600x600/?branding"
            },
            {
              id: 2,
              title: "Web Application",
              subtitle: "Responsive SaaS platform",
              category: "web,uiux",
              img: "https://source.unsplash.com/random/600x600/?webdesign"
            },
            {
              id: 3,
              title: "Logo Design",
              subtitle: "Minimalist brand mark",
              category: "logo,branding",
              img: "https://source.unsplash.com/random/600x600/?logo"
            },
            {
              id: 4,
              title: "UI/UX Design",
              subtitle: "Mobile app interface",
              category: "uiux,design",
              img: "https://source.unsplash.com/random/600x600/?appdesign"
            },
            {
              id: 5,
              title: "Website Redesign",
              subtitle: "Corporate website",
              category: "web,design",
              img: "https://source.unsplash.com/random/600x600/?website"
            },
            {
              id: 6,
              title: "Visual Identity",
              subtitle: "Brand collateral",
              category: "branding,design",
              img: "https://source.unsplash.com/random/600x600/?brandidentity"
            },
            {
              id: 7,
              title: "Dashboard UI",
              subtitle: "Analytics interface",
              category: "uiux,web",
              img: "https://source.unsplash.com/random/600x600/?dashboard"
            },
            {
              id: 8,
              title: "Packaging Design",
              subtitle: "Product packaging",
              category: "design,branding",
              img: "https://source.unsplash.com/random/600x600/?packaging"
            },
            {
              id: 9,
              title: "Mobile UI Kit",
              subtitle: "Design system components",
              category: "uiux,design",
              img: "https://source.unsplash.com/random/600x600/?uikit"
            }
          ].map((item) => (
            <div
              key={item.id}
              className="portfolio-item opacity-0 translate-y-10 group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 shadow-lg transition-all duration-500 hover:border-indigo-500/30 hover:shadow-indigo-500/10"
              data-id={item.id}
              data-category={item.category}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.subtitle}</p>
                    <button className="mt-3 text-xs font-medium px-3 py-1.5 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-300">
                      View Project
                    </button>
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