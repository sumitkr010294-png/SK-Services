"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tank");

  const switchTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div style={{ paddingTop: "96px" }}>
      {/* Hero Section */}
      <section className="py-5">
        <div className="custom-container">
          <div className="row align-items-center g-5">
            {/* Hero Content (Comes first on desktop, second on mobile) */}
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm mb-4">
                <span
                  className="material-symbols-outlined text-headline-sm"
                  style={{ fontVariationSettings: "'FILL' 1", fontSize: "16px" }}
                >
                  verified
                </span>
                Premium Hygiene Experts
              </div>
              <h1 className="text-display-lg text-primary mb-4 text-shadow-premium">
                SK Swaksh Jalseva and Solar cleaning
              </h1>
              <p className="text-body-lg text-on-surface-variant mb-4" style={{ maxWidth: "560px" }}>
                Experience crystal clarity with Jharkhand's specialized hygiene services. From industrial water
                tanks to high-efficiency solar panels, we bring sterile precision to your doorstep.
              </p>
              <div className="d-flex flex-wrap gap-3 pt-3">
                <Link
                  href="/contact"
                  className="btn-custom-primary text-decoration-none d-flex align-items-center gap-2 fw-semibold text-body-lg"
                >
                  Book Service
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  href="#services"
                  className="btn-custom-outline text-decoration-none fw-semibold text-body-lg"
                >
                  Learn More
                </Link>
              </div>
              {/* Trust Badges */}
              <div className="pt-5 d-flex align-items-center gap-4 opacity-75">
                <div className="d-flex align-items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "24px" }}>eco</span>
                  <span className="text-label-sm text-uppercase tracking-wider fw-bold text-on-surface-variant">Eco-Certified</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "24px" }}>security</span>
                  <span className="text-label-sm text-uppercase tracking-wider fw-bold text-on-surface-variant">Fully Insured</span>
                </div>
              </div>
            </div>

            {/* Hero Image (Comes second on desktop, first on mobile) */}
            <div className="col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
              <div
                className="position-relative overflow-hidden rounded-3xl-custom shadow-lg hover-scale-110"
                style={{
                  height: "400px",
                  maxHeight: "80vh",
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlDwebBlscCreXD04PvmnGBeG02dHclPB5PxM4BhpjJktmagg3xrkKcGuF8E_JsFb7XFXJaiJT9MWoFnj9gLT0s9SpLN6ptk4ip2YtGiowspKV4MOC64hFFO-u_8G-e2RHXVI77_Tqe-FL56zVwDyoM0Xa-XWb8nmOsUOJpmVFhCEHc-nfGGABkBHdV0-cSv9Eu4s0MidW7JajRmYBCZvetUU49gwkJLE71lnCfzNpEoi9g7FgiSMD4F4FaP1pE6APJc0EmKspgmQ")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.5s ease"
                }}
              >
                {/* Image overlay gradient */}
                <div
                  className="position-absolute w-100 h-100 top-0 start-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 39, 86, 0.75), transparent)"
                  }}
                ></div>
                <div className="position-absolute bottom-0 start-0 p-4 p-md-5 text-white">
                  <div className="d-flex gap-2 mb-3">
                    <div className="bg-white rounded-pill" style={{ height: "4px", width: "48px" }}></div>
                    <div className="bg-white-50 rounded-pill" style={{ height: "4px", width: "48px", opacity: 0.4 }}></div>
                  </div>
                  <h3 className="text-headline-md mb-2">Industrial Hygiene Standards</h3>
                  <p className="text-body-md text-white-50 mb-0">Ensuring health with medical-grade sanitization protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Pillars Grid */}
      <section className="py-5 bg-surface-container-low" id="services">
        <div className="custom-container py-4">
          <div className="text-center mb-5">
            <h2 className="text-display-lg text-primary mb-3">Our Core Services</h2>
            <div className="bg-secondary mx-auto rounded-pill" style={{ width: "96px", height: "4px" }}></div>
          </div>
          <div className="row g-4 justify-content-center" style={{ maxWidth: "1000px", margin: "0 auto" }}>
            {/* Pillar A: Water Tank */}
            <div className="col-12 col-md-6">
              <div className="glass-card rounded-3xl-custom p-4 p-md-5 d-flex flex-column h-100 shadow-sm border border-white/20 hover-translate">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="bg-secondary-container text-on-secondary-container rounded-3 d-flex align-items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "30px" }}>water_drop</span>
                  </div>
                  <div>
                    <h3 className="text-headline-sm text-primary mb-1">SK Swachh Jal Seva</h3>
                    <p className="text-secondary fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>जल को बनाये शुद्ध</p>
                  </div>
                </div>
                
                {/* Mosaic Grid */}
                <div className="row g-2 mb-4 flex-grow-1">
                  <div className="col-12">
                    <div
                      className="rounded-3"
                      style={{
                        height: "180px",
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQJH-JreN0-1ekbqGIEVcbz-OLhRegUA19AhwR8jqBMWFa5mMVtBNL8yf8VFv41trsIPeWDd7XJ1rbJdpJO6BYiHBw_vZ9l20xNLpV1Imz9cdDXmGX_pIOTITMXUF2Pj3hR2CM6qRl5f7ZeC5ExPUO3WGw5FIoTS4sHRGRpKfEQgVq9-hIExdkR2pK_nYbyASD3uo5GETjPQYM7kuSp0DgSd86Fdx-AMOMbTnKPZHd_tZLkNxNKh64JLWpUv6ngsBfTPv7DJ2kZwc")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                  </div>
                  <div className="col-6">
                    <div
                      className="rounded-3"
                      style={{
                        height: "120px",
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvtDY_6JUnD2Xsd77J0sgOhQcmauQz_EvNootROqCwRvVLXesEMQ-5U-pd6RHHnXeNiyHFiK98vJ4QHrX8wD_uq3ZGxtG2mCQngl2RFBusLjQ1w09M35yAsUJxyhMcoLG1gUAL1P2pTl10FWDSttcsJV9JQ6gVqRtdM8fl6qVdJjYYPF9YQ1RdPI1hYfxbFLgztsDzhEHWqpuhV6rLNk23haFaOIu0cYn3hlAvThx0Sr4hQ0jBTBDfwBmWgaZddmHwJPtOqfayrb8")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                  </div>
                  <div className="col-6">
                    <div
                      className="rounded-3"
                      style={{
                        height: "120px",
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAP4xoVX3NrZX8iGezA49g5Z3ZRQgSiO23yuBy5CM3CPtkJF5CbCW53wrgR5brWkpIjH3KS1CJbb2u6432eaGgpQlmGZH0x355UhUry_MjmgBCpxpSqpahupqEZayOUo-x74LpkRFcQWgsvdSIjVahrMkPZwIbtVUduj2pvZLfHVFcjnCHP9p8JHolPnwrAWqTxbxoA8K_WdcKYJRTtT0qAtX2FmnV_Py6KEYRd74AKy9kWPyG-iRoYFOetAAdU-EQa9smg0bznJK4")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                  </div>
                </div>

                <Link
                  href="/contact?service=Water Tank Cleaning"
                  className="btn btn-outline-primary w-100 py-3 rounded-3 fw-bold text-label-md transition-colors"
                >
                  Explore Service
                </Link>
              </div>
            </div>

            {/* Pillar B: Solar */}
            <div className="col-12 col-md-6">
              <div className="glass-card rounded-3xl-custom p-4 p-md-5 d-flex flex-column h-100 shadow-sm border border-white/20 hover-translate">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="bg-tertiary-fixed text-on-tertiary-fixed rounded-3 d-flex align-items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "30px" }}>sunny</span>
                  </div>
                  <div>
                    <h3 className="text-headline-sm text-primary mb-1">Solar Panel Cleaning</h3>
                    <p className="text-secondary fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>Energy Efficiency</p>
                  </div>
                </div>

                {/* Mosaic Grid */}
                <div className="row g-2 mb-4 flex-grow-1">
                  <div className="col-12">
                    <div
                      className="rounded-3"
                      style={{
                        height: "180px",
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG67O1lwi3GvnYIQfupa0ljDFAXWo_EFsjaoACCrbpIoS0l41c1pIVYbhpXuQjdaxTDj3HQ9ke-XjQxFiG70iIZ9kltDFguJBN_gliFepjRrgutjT3fegnMDscXYnUa64V_YOp9D0OQiJmERjFDcfeSRJe-S_9yLyitffAOmkj6FoJCGY135iBMwEjiMUCuzmylcrw5vFKCP7C9wrPaYOm1XeFg8DmBQy7I16x4HTWBIf9Oz3nt9Gu-Qz53qlLGk9gnI_A0Y90yUw")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                  </div>
                  <div className="col-6">
                    <div
                      className="rounded-3"
                      style={{
                        height: "120px",
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl6fMCRzR7pDsJIBz0aT-jlPF0HoDU44XjFwiigPE8qmULcByn1_E60PRyz-HWIne7f55UDj0n88ZzuuW_opuVlvv3IPnCEemQWP43wS18lHdpFmR5f5HOWkVnobJe_TjZs3r1MHzieIohX14RjjV2Zkj5TKD1MITlAII7XcqewDdEnNbkHuSIkz8Kwajxdj8TG8u-D6bKRQ8a9Aq3OUwgbAIIj2-PR6VqxBWM7oMa-WiiOCHhOO0GK8gH2HjvGzhLuVEC-PTV5sA")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                  </div>
                  <div className="col-6">
                    <div
                      className="rounded-3"
                      style={{
                        height: "120px",
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuqYxEUFvnec5Rno5eW65v6eS-AGLr7H0yPDLCS7a4Ad2-Guvkc65kRlq9l_fM_BppeQCyDs0t6bnmHFY3x41yI_5YWI28vUEI87LPhVx_eGe1MY_OqCjMAcoChw9CQ9FUpx0cMHfcepM06xsTL7fnLL9w3MGTZ0Z5ZqhKHSiYZ-sqjV7XUHMGz8jHIusYjYti7Q1qNp2wNpySpckWSH21CKm6sAMBPiQasc1PPoGRF2O3b_Esogs_p0nxYHtDw0LB-SY_-C0_0w0")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                  </div>
                </div>

                <Link
                  href="/contact?service=Solar Solutions"
                  className="btn btn-outline-primary w-100 py-3 rounded-3 fw-bold text-label-md transition-colors"
                >
                  Max Efficiency
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Process Section */}
      <section className="py-5">
        <div className="custom-container py-4">
          <div className="row g-5">
            {/* Tab controls */}
            <div className="col-12 col-lg-4">
              <h2 className="text-display-lg text-primary mb-3">The Science of Sanitization</h2>
              <p className="text-body-lg text-on-surface-variant mb-5">
                We don't just clean; we restore hygiene using medical-grade protocols and specialized industrial equipment.
              </p>
              
              <div className="d-flex flex-column gap-3">
                <button
                  className={`border-0 text-start p-4 rounded-3 d-flex align-items-center justify-content-between transition-all ${
                    activeTab === "tank"
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white border border-outline-variant text-on-surface hover-border-secondary"
                  }`}
                  onClick={() => switchTab("tank")}
                  style={{ transition: "all 0.3s ease" }}
                >
                  <span className="text-headline-sm mb-0">Water Tank Process</span>
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
                
                <button
                  className={`border-0 text-start p-4 rounded-3 d-flex align-items-center justify-content-between transition-all ${
                    activeTab === "solar"
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white border border-outline-variant text-on-surface hover-border-secondary"
                  }`}
                  onClick={() => switchTab("solar")}
                  style={{ transition: "all 0.3s ease" }}
                >
                  <span className="text-headline-sm mb-0">Solar Panel Care</span>
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
              </div>
            </div>

            {/* Timeline content */}
            <div className="col-12 col-lg-8">
              <div className="bg-white border-2 border-primary-container rounded-3xl-custom p-4 p-md-5 shadow-sm">
                
                {/* Tank Content */}
                {activeTab === "tank" && (
                  <div className="position-relative ps-4 ps-md-5 border-start timeline-line" style={{ borderLeftWidth: "2px !important" }}>
                    {/* Step 1 */}
                    <div className="position-relative mb-5">
                      <div
                        className="position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-center fw-bold"
                        style={{ width: "40px", height: "40px", left: "-70px", top: "-2px" }}
                      >
                        1
                      </div>
                      <h4 className="text-headline-sm text-primary mb-2">High-Power Vacuuming</h4>
                      <p className="text-on-surface text-body-md">
                        Removal of loose sediment and debris from the bottom of the tank using industrial-grade suction pumps.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="position-relative mb-5">
                      <div
                        className="position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-center fw-bold"
                        style={{ width: "40px", height: "40px", left: "-70px", top: "-2px" }}
                      >
                        2
                      </div>
                      <h4 className="text-headline-sm text-primary mb-2">Mechanical Scrubbing</h4>
                      <p className="text-on-surface text-body-md">
                        High-pressure scrubbing of walls and ceilings to remove calcification, algae, and bio-film buildup.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="position-relative mb-5">
                      <div
                        className="position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-center fw-bold"
                        style={{ width: "40px", height: "40px", left: "-70px", top: "-2px" }}
                      >
                        3
                      </div>
                      <h4 className="text-headline-sm text-primary mb-2">UV &amp; Chemical Sanitization</h4>
                      <p className="text-on-surface text-body-md">
                        Exposing surfaces to UV light and food-grade disinfectant sprays to eliminate microscopic bacteria and viruses.
                      </p>
                    </div>

                    {/* Final Step */}
                    <div className="position-relative">
                      <div
                        className="position-absolute text-on-tertiary-fixed rounded-circle d-flex align-items-center justify-center fw-bold"
                        style={{ width: "40px", height: "40px", left: "-70px", top: "-2px", backgroundColor: "var(--tertiary-fixed-dim)" }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>check</span>
                      </div>
                      <h4 className="text-headline-sm text-primary mb-2">Sludge Removal &amp; Final Rinse</h4>
                      <p className="text-on-surface text-body-md">
                        Complete evacuation of all residues and a final high-pressure rinse with pure water.
                      </p>
                    </div>
                  </div>
                )}

                {/* Solar Content */}
                {activeTab === "solar" && (
                  <div className="position-relative ps-4 ps-md-5 border-start timeline-line" style={{ borderLeftWidth: "2px !important" }}>
                    {/* Step 1 */}
                    <div className="position-relative mb-5">
                      <div
                        className="position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-center fw-bold"
                        style={{ width: "40px", height: "40px", left: "-70px", top: "-2px" }}
                      >
                        1
                      </div>
                      <h4 className="text-headline-sm text-primary mb-2">Soft Water Pre-Rinse</h4>
                      <p className="text-on-surface text-body-md">
                        Loosening dust and bird droppings using de-ionized soft water to prevent micro-scratches on panel glass.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="position-relative mb-5">
                      <div
                        className="position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-center fw-bold"
                        style={{ width: "40px", height: "40px", left: "-70px", top: "-2px" }}
                      >
                        2
                      </div>
                      <h4 className="text-headline-sm text-primary mb-2">Soft Brush Scrub</h4>
                      <p className="text-on-surface text-body-md">
                        Gentle agitation with specialized solar-grade brushes that ensure zero pressure point damage while removing tough grime.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="position-relative">
                      <div
                        className="position-absolute text-on-tertiary-fixed rounded-circle d-flex align-items-center justify-center fw-bold"
                        style={{ width: "40px", height: "40px", left: "-70px", top: "-2px", backgroundColor: "var(--tertiary-fixed-dim)" }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>check</span>
                      </div>
                      <h4 className="text-headline-sm text-primary mb-2">Streak-Free Microfiber Wipe</h4>
                      <p className="text-on-surface text-body-md">
                        Hand-drying with microfiber technology to ensure no water spots remain, maximizing solar absorption efficiency.
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CSS tweaks specifically for animations and effects */}
      <style jsx>{`
        .hover-translate {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hover-translate:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px -12px rgba(10, 61, 122, 0.15) !important;
        }
        .hover-border-secondary:hover {
          border-color: var(--secondary) !important;
        }
        .bg-white-50 {
          background-color: rgba(255, 255, 255, 0.5);
        }
        .align-items-center {
          align-items: center !important;
        }
        .justify-center {
          justify-content: center !important;
        }
      `}</style>
    </div>
  );
}
