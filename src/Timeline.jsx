import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workData = [
  {
    year: "2022",
    title: "Frontend Developer",
    company: "Ollato",
    description: "Built UI with React and Tailwind.",
  },
  {
    year: "2023",
    title: "Freelance Projects",
    company: "Multiple Clients",
    description: "E-commerce and portfolio websites.",
  },
  {
    year: "2024",
    title: "React Developer Intern",
    company: "TechX",
    description: "Worked on UI animations and APIs.",
  },
];

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".timeline-item");

    items.forEach((item) => {
      gsap.from(item, {
        y: 80,
        autoAlpha: 0, // handles both opacity and visibility
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section
      ref={timelineRef}
      className="min-h-screen bg-[#111111] text-white py-16 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>

      <div className="max-w-4xl mx-auto space-y-10 border-l-4 border-blue-500 pl-6">
        {workData.map((item, index) => (
          <div
            key={index}
            className="timeline-item relative " // remove opacity-0 if it was added before
          >
            <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
            <h3 className="text-xl font-semibold">
              {item.year} - {item.title}
            </h3>
            <p className="text-gray-700 font-medium">{item.company}</p>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
