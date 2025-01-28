import { Outlet } from "react-router";
import NavBar from "../Ui/Navbar";
import Footer from "../Ui/Footer";

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
          <Outlet />
        </main>
        <Footer className="w-full" />
      </div>
    </>
  );
}
