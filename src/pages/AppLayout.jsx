import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Home from "./Home";

export default function AppLayout() {
  return (
    <div className="sm:ms-12">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}
