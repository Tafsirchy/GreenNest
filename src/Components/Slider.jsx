import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1200&h=600&fit=crop",
      title: "Nurture Nature",
      subtitle: "Discover the beauty of green living",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200&h=600&fit=crop",
      title: "Grow Your Garden",
      subtitle: "Transform your space with natural beauty",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&h=600&fit=crop",
      title: "Plant Paradise",
      subtitle: "Bringing nature closer to home",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = slides.length - 1;
      if (newIndex >= slides.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 overflow-hidden">
      {/* Decorative leaf elements */}
      <div className="absolute inset-0 z-10 opacity-10">
        <Leaf className="absolute top-10 left-10 w-20 h-20 text-green-200 rotate-12" />
        <Leaf className="absolute bottom-20 right-20 w-24 h-24 text-green-200 -rotate-45" />
        <Leaf className="absolute top-1/2 right-10 w-16 h-16 text-green-200 rotate-90" />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Slider container */}
      <div className="relative h-full flex items-center justify-center z-20">
        <div className="w-11/12 h-[450px] relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
            >
              {/* Image */}
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover"
                draggable="false"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/30 to-transparent"></div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <Leaf className="w-8 h-8 text-green-300" />
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-bold">
                    {slides[currentIndex].title}
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-green-50 ml-11">
                  {slides[currentIndex].subtitle}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-green-600/30 hover:bg-green-600/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-green-400/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-green-600/30 hover:bg-green-600/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-green-400/30"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-green-300 w-8 h-2"
                    : "bg-green-300/50 w-2 h-2 hover:bg-green-300/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
