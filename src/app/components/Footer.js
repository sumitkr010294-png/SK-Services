import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-light text-dark py-5 border-top" style={{ borderColor: "var(--outline-variant)" }}>
      <div className="custom-container">
        <div className="row g-4">
          {/* Column 1 */}
          <div className="col-12 col-md-4">
            <h2 className="text-headline-md text-dark mb-4">SK Swaksh Jalseva</h2>
            <p className="text-dark-50 text-body-md mb-4" style={{ maxWidth: "320px", color: "var(--on-surface-variant)" }}>
              The gold standard in home hygiene and utility maintenance services across Jharkhand. Quality you can trust.
            </p>
            <div className="d-flex gap-3 text-dark">
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: "24px" }}>face_nod</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: "24px" }}>photo_camera</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: "24px" }}>smart_display</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-4">
            <h4 className="text-label-md text-dark text-uppercase tracking-wider mb-4 fw-bold">Quick Links</h4>
            <div className="d-flex flex-column gap-3">
              <Link href="/#services" className="text-body-md text-dark text-decoration-none hover-text-secondary fw-semibold">
                Water Tank Cleaning
              </Link>
              <Link href="/#services" className="text-body-md text-dark text-decoration-none hover-text-secondary fw-semibold">
                Solar Solutions
              </Link>
              <Link href="/contact" className="text-body-md text-dark text-decoration-none hover-text-secondary fw-semibold">
                Contact Sumit Kumar, Dhanbad
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-4">
            <h4 className="text-label-md text-dark text-uppercase tracking-wider mb-4 fw-bold">Office</h4>
            <p className="text-body-md mb-1" style={{ color: "var(--on-surface-variant)" }}>Dhanbad Head Office</p>
            <p className="text-body-md mb-4" style={{ color: "var(--on-surface-variant)" }}>Jharkhand, India 826001</p>
            <div className="p-4 rounded-3 border" style={{ backgroundColor: "rgba(0, 39, 86, 0.03)", borderColor: "var(--outline-variant)" }}>
              <p className="text-secondary fw-bold text-body-md mb-1">Emergency Service?</p>
              <a href="tel:+919905901353" className="text-dark fw-bold text-headline-sm text-decoration-none block">+91 99059 01353</a>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-5 border-top d-flex flex-column flex-md-row justify-content-between align-items-center gap-3" style={{ borderColor: "var(--outline-variant) !important" }}>
          <p className="text-label-sm mb-0" style={{ color: "var(--on-surface-variant)" }}>
            © 2024 SK Swaksh Jalseva and Solar cleaning. All rights reserved.
          </p>
          <p className="text-label-sm mb-0" style={{ color: "var(--on-surface-variant)" }}>
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
