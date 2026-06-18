"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed-top w-100 glass-nav border-bottom border-white/20 shadow-sm py-3" style={{ zIndex: 100 }}>
      <div className="custom-container d-flex justify-content-between align-items-center">
        <Link href="/" className="text-primary text-decoration-none fw-bold text-headline-sm">
          SK Services
        </Link>
        {/* Navigation buttons */}
         <div className="d-flex gap-2">
           <Link href="/" className="btn btn-outline-primary text-label-md">Home</Link>
           <Link href="/contact" className="btn btn-primary text-label-md">Contact</Link>
         </div>
      </div>
    </nav>
  );
}
