"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowBigUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={scrollToTop}
            className="h-15 w-15 bg-green-600 hover:bg-orange-700 rounded-full shadow-lg  transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowBigUp size={48} className="text-white h-15 w-15" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}