import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import pic from "../assets/leaves.jpg";
import logo from "../assets/nest-home.png";
import { motion } from "framer-motion";

const Plants = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="min-h-screen">
        <div
          className="w-full bg-cover bg-bottom"
          style={{ backgroundImage: `url(${pic})` }}
        >
          <div className="w-full min-h-screen md:w-1/2 bg-gradient-to-b from-gray-900/90 to-gray-900/95 p-10 flex">
            <div className="w-full text-center my-auto">
              <h1 className="font-bold text-5xl font-Comforter-Brush text-amber-500 mb-10 flex justify-center items-center">
                <img className="w-30 h-30" src={logo} alt="" />
              </h1>

              <motion.h1
                className="text-5xl font-bold text-white"
                animate={{
                  scale: [1, 1.1, 1],
                  y: [0, -10, 0],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                COMING <span className="text-green-200">SOON</span>
              </motion.h1>

              <p className="text-base py-5 mb-10 text-gray-200">
                Stop scrolling and start growing; the best time to plant a tree
                was 20 years ago, the second best time is now.
              </p>

              <div className="w-full flex">
                <ul className="w-full flex place-content-center gap-10 mx-auto text-gray-500">
                  <li>
                    <a href="#" className="text-lg hover:text-amber-500">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg hover:text-amber-500">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg hover:text-amber-500">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg hover:text-amber-500">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Plants;
