import { Outlet } from "react-router";
import Footer from "../UII/UI-Software/Footer";
import NavBar from "../UII/UI-Software/Navbar";

export default function Applayout() {
  return (
   

    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer className="w-full" />
      </div>
    </>
  );
}
