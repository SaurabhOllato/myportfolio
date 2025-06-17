import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const gridVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function GridItem({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      className="portfolio-item group relative overflow-hidden rounded-xl bg-gradient-to-b from-white/5 to-white/[0.01] backdrop-blur-sm border border-white/5 shadow-lg transition-all duration-500 hover:border-indigo-500/50 hover:shadow-indigo-500/10"
      data-category={project.category}
      variants={gridVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <h3 className="text-white text-xl font-bold mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4">{project.subtitle}</p>
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
    </motion.div>
  );
}
