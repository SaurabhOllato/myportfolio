import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const introLines = [
  "I’ve crafted intuitive UI/UX for real clients.",
  "Designed creative solutions for freelancers & startups.",
  "Built responsive websites and product dashboards.",
];

const projectThumbs = [
  "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750226041/project1_1_gq5w30.jpg",
  "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750226041/project2_2_wlfcms.jpg",
  "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750226041/IMG_6559_ovcsko.jpg",
];

export default function LandingShowcase() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 180,
  });

  const yHeading = useTransform(smoothScroll, [0, 0.4], [80, 0]);
  const opacityHeading = useTransform(smoothScroll, [0.1, 0.4], [0, 1]);
  const scale = useTransform(smoothScroll, [0, 0.5], [0.95, 1]);

  const yIntro = useTransform(smoothScroll, [0.1, 0.5], [100, 0]);
  const opacityIntro = useTransform(smoothScroll, [0.1, 0.5], [0, 1]);

  const yGrid = useTransform(smoothScroll, [0.3, 0.7], [80, 0]);
  const opacityGrid = useTransform(smoothScroll, [0.3, 0.7], [0, 1]);

  const introLineTransforms = introLines.map((_, i) => ({
    y: useTransform(smoothScroll, [0.1 + i * 0.1, 0.3 + i * 0.1], [50, 0]),
    opacity: useTransform(smoothScroll, [0.1 + i * 0.1, 0.3 + i * 0.1], [0, 1]),
  }));

  const imageTransforms = projectThumbs.map((_, i) => ({
  y: useTransform(smoothScroll, [0.3 + i * 0.1, 0.6 + i * 0.1], [80, 0]),
  opacity: useTransform(smoothScroll, [0.3 + i * 0.1, 0.6 + i * 0.1], [0, 1]),
  rotate: useTransform(smoothScroll, [0.3 + i * 0.1, 0.6 + i * 0.1], [i % 2 === 0 ? -5 : 5, 0]),
  scale: useTransform(smoothScroll, [0.3 + i * 0.1, 0.6 + i * 0.1], [0.95, 1]),
}));

  return (
    <section
      ref={ref}
      className="relative bg-[#111111] text-gray-100 py-24 px-6 sm:px-10 overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
      >
        {/* <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-3xl opacity-50"></div> */}
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-6xl font-bold text-center mb-14 text-[#A6A6A6]"
          style={{ y: yHeading, opacity: opacityHeading, scale }}
        >
          What I Do
        </motion.h2>

        {/* Intro Lines - Scroll Animated */}
        <div className="space-y-5 mb-20">
          {introLines.map((line, i) => (
            <motion.p
              key={i}
              className="text-lg sm:text-xl text-center text-gray-400"
              style={{
                y: introLineTransforms[i].y,
                opacity: introLineTransforms[i].opacity,
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Project Grid - Scroll Animated */}
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
  {projectThumbs.map((src, i) => (
    <motion.div
      key={i}
      className="w-full max-w-[300px] rounded-xl overflow-hidden shadow-lg"
      style={{
        y: imageTransforms[i].y,
        opacity: imageTransforms[i].opacity,
        rotate: imageTransforms[i].rotate,
        scale: imageTransforms[i].scale,
      }}
    >
      <img
        src={src}
        alt={`Project ${i + 1}`}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  ))}
</div>


        {/* CTA */}
       <motion.div
  className="text-center mt-14"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 1.2 }}
>
  <Link to="/work">
    <button className="bg-[#A6A6A6] text-black px-8 py-3 rounded-full text-lg hover:scale-105 transition-transform">
      View Full Portfolio →
    </button>
  </Link>
</motion.div>
      </div>
    </section>
  );
}
