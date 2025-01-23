import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

export default function WordAnimation() {
  const words = [
    "TRUST",
    "COLLABORATION",
    "INNOVATION",
    "RESPECT",
    "COMMITMENT",
    "POSITIVE",
    "DIVERSITY",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div>
      <Fade key={words[currentIndex]} duration={1000}>
        <span className="font-bold text-xl sm:text-[64px] font-mons text-[#478B9C]">
          {words[currentIndex]}
        </span>
      </Fade>
    </div>
  );
}
