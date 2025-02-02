// import About from "../ui/AboutSection";
import Hero from "../UII/UI-Software/Hero";
// import Navbar from "../ui/Navbar";
import OurServices from "../UII/UI-Software/OurServices";
// import Footer from "../ui/Footer";
import AboutSection from "../UII/UI-Software/AboutSection";
import Clients from "../UII/UI-Software/Clients";
import Blogs from "../UII/UI-Software/Blogs";
import { useEffect } from "react";
import Partners from "../UII/UI-Software/Partnerss";

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
