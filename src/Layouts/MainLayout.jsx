import { useLocation } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect } from "react";

const MainLayout = ({ children }) => {

const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que cambia la ruta (pathname), hacemos scroll a (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-25">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout