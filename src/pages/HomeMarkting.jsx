import React, { useEffect, useRef } from "react";
import HeroMarkting from './HeroMarkting';
import AboutMarkting from "./AboutMarkting";
import MainMarkting from "./MainMarkting";
import SliderMarkting from "./SLiderMarkting";
import SeeourBlogMarkting from "./SeeourBlogMarkting";
import ChooseMarkting from "./ChooseMarkting";

export default function HomeMarkting() {
  // const sectionsRef = useRef([]); 


  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const sectionName = entry.target.getAttribute("data-section");

  //           
  //           if (  sectionName === "main") {
  //             document.body.style.backgroundColor = "#5BA89C";
  //           } else {
  //             document.body.style.backgroundColor = "white"; 
  //           }
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.3, // 
  //       rootMargin: "0px 0px -30% 0px", 
  //     }
  //   );

  //   sectionsRef.current.forEach((section) => {
  //     if (section) observer.observe(section); 
  //   });

  //   return () => observer.disconnect();
  // }, []);

  return (
    <div>
    
        <HeroMarkting/>
     


        <AboutMarkting/>


 <MainMarkting/>
     

      <SliderMarkting/>


   
        <SeeourBlogMarkting/>
 
{/* 
      <section ref={(el) => (sectionsRef.current[5] = el)} data-section="choose" className="section"> */}
       <ChooseMarkting/>
      {/* </section> */}
    </div>
  );
}
