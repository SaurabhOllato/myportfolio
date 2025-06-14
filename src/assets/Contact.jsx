import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Contact() {
  const topControls = useAnimation();
  const bottomControls = useAnimation();

  // Start animations
  useEffect(() => {
    topControls.start({
      x: ["-100%", "100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    });

    bottomControls.start({
      x: ["100%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    });
  }, [topControls, bottomControls]);

  // Handle hover state for both scrollers
  const handleHoverStart = (controls) => {
    controls.stop();
  };

  const handleHoverEnd = (controls, direction) => {
    controls.start({
      x: [direction === "top" ? "-100%" : "100%", direction === "top" ? "100%" : "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    });
  };

  return (
    <section className="relative overflow-hidden  border-y border-[#333] bg-[#111111] text-white py-20 px-4 min-h-screen flex flex-col">
      {/* Top Infinite Scroller */}
      <motion.div
        className="absolute whitespace-nowrap  top-10 left-0 text-6xl sm:text-7xl md:text-8xl font-bold text-[#555] select-none"
        animate={topControls}
        onHoverStart={() => handleHoverStart(topControls)}
        onHoverEnd={() => handleHoverEnd(topControls, "top")}
        whileHover={{ color: "#fff" }} // Color changes to white on hover
      >
        LET'S TALK — LET'S COLLABORATE — LET'S TALK — LET'S COLLABORATE —
      </motion.div>

      {/* Bottom Infinite Scroller */}
      {/* <motion.div
        className="absolute whitespace-nowrap bottom-10 left-0 text-6xl sm:text-7xl md:text-8xl font-bold text-[#555] select-none"
        animate={bottomControls}
        onHoverStart={() => handleHoverStart(bottomControls)}
        onHoverEnd={() => handleHoverEnd(bottomControls, "bottom")}
        whileHover={{ color: "#fff" }} // Color changes to white on hover
      >
        GET IN TOUCH — AVAILABLE FOR WORK — GET IN TOUCH — AVAILABLE FOR WORK —
      </motion.div> */}

      {/* Main Content (unchanged from your original) */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow space-y-10">
        <h2 className="text-xl sm:text-2xl text-center">
          oluwadareseyii@gmail.com
        </h2>

        <div className="flex gap-4 flex-wrap justify-center">
          {["TWITTER", "INSTAGRAM", "GITHUB", "LINKEDIN"].map((item) => (
            <button
              key={item}
              className="border border-gray-500 px-4 py-1 rounded-full hover:bg-gray-800 transition"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-full flex justify-between text-sm text-gray-500 mt-20 px-4">
          <div>
            GIRGAON, MUMBAI <span className="text-white font-semibold">04</span>
          </div>
        </div>
      </div>
    </section>
  );
}