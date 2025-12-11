import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import NavDropdown from "./nav-dropdown";
import MobileMenu from "./mobile-menu";
import { resourcesDropdownData } from "./nav-data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Detectar la ruta actual (equivalente a usePathname)
  const pathname = window.location.pathname;

  // Cargar tema desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Aplicar clase al HTML
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    setMounted(true);
  }, []);

  // Cambiar logo según tema
  const logoSrc =
    mounted && theme === "dark" ? "/logo-light.png" : "/logo-dark.png";

  // Detectar scroll para fondo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navegación con JS (equivalente simple de router.push)
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/90 dark:bg-[#111]/90 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <a href="/" onClick={handleLogoClick} className="flex items-center">
              {mounted ? (
                <img
                  src={logoSrc}
                  alt="Automatic Logo"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                />
              ) : (
                <div className="h-12 w-[200px]" />
              )}
            </a>

            {/* NAV + MOBILE BUTTON */}
            <div className="flex items-center space-x-4">
              {/* Desktop navbar */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li className="hidden md:block">
                    <NavDropdown
                      trigger="Resources"
                      items={resourcesDropdownData}
                      columns={2}
                      className={
                        pathname.startsWith("/resources")
                          ? "text-[#7A7FEE]"
                          : ""
                      }
                    />
                  </li>

                  <li>
                    <a
                      href="/portfolio"
                      className={`transition-colors ${
                        pathname === "/portfolio"
                          ? "text-[#7A7FEE]"
                          : "text-black dark:text-white hover:text-[#7A7FEE]"
                      }`}
                    >
                      Portfolio
                    </a>
                  </li>

                  <li>
                    <a
                      href="/start"
                      className={`transition-colors ${
                        pathname === "/start"
                          ? "text-[#7A7FEE]"
                          : "text-black dark:text-white hover:text-[#7A7FEE]"
                      }`}
                    >
                      Start Project
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Theme button */}
              <ThemeToggle theme={theme} setTheme={setTheme} />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-800/20 md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
