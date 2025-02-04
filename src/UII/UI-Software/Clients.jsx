import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quote from "/assets/icons/gridicons_quote.svg";
import ClientsSlider from "../../components/Software-components/ClientsSlider";
import Button from "../../components/Software-components/Button";

export default function Clients() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex ms-12 me-12 py-[87px] px-[24px] bg-card rounded-[10px]">
      <div className="w-1/2">
        <h2 className="font-mons font-[600] text-5xl text-aboutCont tracking-[4.8px] leading-[60px]">
          Clients Across The Globe
        </h2>
        <div className="flex items-start mt-16 me-8">
          <img src={quote} alt="quote-icon" className="me-2" />
          <motion.div className="w-full">
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  {/* small */}
                  <p className="text-[#333] text-[16px] font-normal tracking-[1.6px] font-mons ">
                    Recognizing the ever-evolving technological landscape and
                    rapidly changing market needs, the
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-[#333] text-[16px] font-normal tracking-[1.6px] font-mons ">
                    AWS is a forward-thinking IT system integrator and services
                    provider, established in 2024 with a focus on delivering
                    cutting-edge IT hardware solutions. Recognizing the
                    ever-evolving technological landscape and rapidly changing
                    market needs, the
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h4 className="mt-6">Hossam Nasser</h4>
              <p className="mt-2">CEO at HWLK</p>
            </motion.div>
          </motion.div>
        </div>
        <p className="pt-[40px] ps-1">
          <Button type="linkBtn">WRITE YOUR TESTIMONIAL</Button>
        </p>
      </div>

      <div className="w-1/2 flex justify-center items-start">
        <ClientsSlider />
      </div>
    </div>
  );
}
