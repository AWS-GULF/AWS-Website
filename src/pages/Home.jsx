// import About from "../ui/AboutSection";
import Hero from "../ui/Hero";
// import Navbar from "../ui/Navbar";
import OurServices from "../ui/OurServices";
import Partners from "../ui/Partners";
// import Footer from "../ui/Footer";
import AboutSection from "../ui/AboutSection";
import Clients from "../ui/Clients";
import Blogs from "../ui/Blogs";
import { useEffect } from "react";

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
