"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections with IDs
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an anchor link on the same page
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileMenuOpen(false);
      }
    } else {
      // Regular navigation - close mobile menu
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-gray-800/50"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xl sm:text-2xl font-bold text-white"
              >
                Andrew Ryan
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                // More robust pathname matching - handle trailing slashes and exact matches
                const normalizedPathname = pathname.replace(/\/$/, '') || '/';
                const normalizedHref = item.href.replace(/\/$/, '') || '/';
                const isActive = normalizedPathname === normalizedHref;
                const isContact = item.name === "Contact";
                
                // Render Contact as a primary button
                if (isContact) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white text-sm shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 min-h-[44px] transition-all duration-300"
                        aria-label="Contact - Go to contact page"
                      >
                        {item.name}
                      </motion.button>
                    </Link>
                  );
                }
                
                // Render other nav items as regular links
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="relative group py-2 px-1"
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 bg-gradient-to-r from-purple-400 to-blue-500"
                        style={{ height: "2px" }}
                        initial={false}
                        transition={{ duration: 300, ease: "easeInOut" }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white transition-colors z-50 touch-target p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-in Menu from Right */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-gray-900 border-l border-gray-800 z-50 md:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <span className="text-xl font-bold text-white">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors touch-target p-2 -mr-2"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 p-6 space-y-2">
                  {navItems.map((item) => {
                    // More robust pathname matching - handle trailing slashes and exact matches
                    const normalizedPathname = pathname.replace(/\/$/, '') || '/';
                    const normalizedHref = item.href.replace(/\/$/, '') || '/';
                    const isActive = normalizedPathname === normalizedHref;
                    const isContact = item.name === "Contact";
                    
                    // Render Contact as a primary button
                    if (isContact) {
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={(e) => {
                            handleSmoothScroll(e, item.href);
                            setMobileMenuOpen(false);
                          }}
                        >
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 min-h-[44px] transition-all duration-300"
                            aria-label="Contact - Go to contact page"
                          >
                            {item.name}
                          </motion.button>
                        </Link>
                      );
                    }
                    
                    // Render other nav items as regular links
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className={`block py-3 px-4 rounded-lg transition-colors touch-target ${
                          isActive
                            ? "bg-purple-500/20 text-white border-l-4 border-purple-500"
                            : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

