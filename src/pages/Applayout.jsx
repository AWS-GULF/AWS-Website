import NavBar from "../ui/Navbar";
import { Outlet } from "react-router";
import Footer from "../ui/Footer";

export default function Applayout() {
  return (
    // <>
    //   <NavBar />
    //   <Outlet />
    //   <Footer />
    // </>

    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Outlet /> {/* Your React Router content */}
        </main>
        <Footer className="w-full" />
      </div>
    </>
  );
}
