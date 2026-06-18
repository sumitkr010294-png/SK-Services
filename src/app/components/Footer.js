import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="custom-container">
        <div className="row g-4">
          {/* Column 1 */}
          <div className="col-12 col-md-4">
            <h2 className="text-headline-md text-white mb-4">SK Swaksh Jalseva</h2>
            <p className="text-white-50 text-body-md mb-4" style={{ maxWidth: "320px" }}>
              The gold standard in home hygiene and utility maintenance services across Jharkhand. Quality you can trust.
            </p>
            <div className="d-flex gap-3">
              <span className="material-symbols-outlined text-tertiary-fixed" style={{ fontSize: "24px" }}>face_nod</span>
              <span className="material-symbols-outlined text-tertiary-fixed" style={{ fontSize: "24px" }}>photo_camera</span>
              <span className="material-symbols-outlined text-tertiary-fixed" style={{ fontSize: "24px" }}>smart_display</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-4">
            <h4 className="text-label-md text-white-50 text-uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="d-flex flex-column gap-3">
              <Link href="/#services" className="text-body-md text-white-50 text-decoration-none hover-text-secondary">
                Water Tank Cleaning
              </Link>
              <Link href="/#services" className="text-body-md text-white-50 text-decoration-none hover-text-secondary">
                Solar Solutions
              </Link>
              <Link href="/contact" className="text-body-md text-white-50 text-decoration-none hover-text-secondary">
                Contact Sumit Kumar, Dhanbad
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-4">
            <h4 className="text-label-md text-white-50 text-uppercase tracking-wider mb-4">Office</h4>
            <p className="text-white-50 text-body-md mb-1">Dhanbad Head Office</p>
            <p className="text-white-50 text-body-md mb-4">Jharkhand, India 826001</p>
            <div className="p-4 rounded-3 bg-white-5 border border-white-10" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
              <p className="text-tertiary-fixed-dim fw-bold text-body-md mb-1">Emergency Service?</p>
              <a href="tel:+919905901353" className="text-white fw-bold text-headline-sm text-decoration-none block">+91 99059 01353</a>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-5 border-top border-white-10 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3" style={{ borderColor: "rgba(255,255,255,0.1) !important" }}>
          <p className="text-white-50 text-label-sm mb-0">
            © 2024 SK Swaksh Jalseva and Solar cleaning. All rights reserved.
          </p>
          <p className="text-white-50 text-label-sm mb-0">
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
