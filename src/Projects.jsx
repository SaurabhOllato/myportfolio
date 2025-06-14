import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Branding Project", description: "Logo, identity, and brand guidelines." },
  { title: "Web App UI", description: "Modern and responsive UI for a SaaS app." },
  { title: "E-commerce Site", description: "Built with React and Stripe API." },
  { title: "Portfolio Site", description: "Personal portfolio with animations." },
  { title: "Mobile UI Kit", description: "Figma kit for mobile app designs." },
];

export default function HorizontalProjects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      xPercent: -100 * (container.children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + container.scrollWidth,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <section id="horizontal-projects" className="relative w-full h-screen overflow-hidden bg-black text-white">
      <div
        ref={containerRef}
        className="horizontal-scroll flex h-full items-center space-x-10 px-10 will-change-transform"
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="min-w-[300px] sm:min-w-[400px] h-[300px] bg-white text-black rounded-xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
