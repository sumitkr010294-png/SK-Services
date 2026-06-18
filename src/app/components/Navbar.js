"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed-top w-100 glass-nav border-bottom border-white/20 shadow-sm py-3" style={{ zIndex: 100 }}>
      <div className="custom-container d-flex justify-content-between align-items-center">
        <Link href="/" className="text-primary text-decoration-none fw-bold text-headline-sm" onClick={closeMenu}>
          SK Services
        </Link>
        
        {/* Navigation links - Desktop */}
        <div className="d-none d-md-flex align-items-center gap-4">
          <Link href="/#services" className="text-label-md text-on-surface-variant hover-text-secondary text-decoration-none fw-bold">
            Water Tank
          </Link>
          <Link href="/#services" className="text-label-md text-on-surface-variant hover-text-secondary text-decoration-none fw-bold">
            Solar
          </Link>
          <Link href="/contact" className="bg-primary-container text-on-primary-container px-4 py-2 rounded-pill text-label-md text-decoration-none text-shadow-premium fw-semibold transition-transform" style={{ transition: "transform 0.1s" }}>
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="d-md-none border-0 bg-transparent text-primary p-2" onClick={handleToggle} aria-label="Toggle Navigation">
          <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="d-md-none bg-light border-top border-white/10 px-4 py-3 shadow-sm">
          <div className="d-flex flex-column gap-3">
            <Link href="/#services" className="text-label-md text-on-surface-variant hover-text-secondary text-decoration-none fw-bold py-1" onClick={closeMenu}>
              Water Tank
            </Link>
            <Link href="/#services" className="text-label-md text-on-surface-variant hover-text-secondary text-decoration-none fw-bold py-1" onClick={closeMenu}>
              Solar
            </Link>
            <Link href="/contact" className="bg-primary-container text-on-primary-container px-4 py-2.5 rounded-pill text-label-md text-decoration-none text-center fw-semibold" onClick={closeMenu}>
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
