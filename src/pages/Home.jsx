// import About from "../ui/AboutSection";
import Hero from "../UII/Hero";
// import Navbar from "../ui/Navbar";
import OurServices from "../UII/OurServices";
// import Footer from "../ui/Footer";
import AboutSection from "../UII/AboutSection";
import Clients from "../UII/Clients";
import Blogs from "../UII/Blogs";
import { useEffect } from "react";
import Partners from "../Uii/Partners";

export default function Home() {
    useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <>
      <Hero />
      <Partners />
      <AboutSection />
      <OurServices />
      <Clients />
      <Blogs />
    </>
  );
}
