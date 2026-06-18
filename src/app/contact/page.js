"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { WhatsappIcon } from 'react-share'; //  Correct casing

// Sub-component that parses query params and renders the page content
function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: ""
  });

  // Pre-fill service from URL query param if present
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: "" });

    // Web3Forms API Endpoint
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `New Service Request from ${formData.name}`,
          from_name: "SK Services Website"
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ submitting: false, success: true, error: "" });
        setFormData({ name: "", phone: "", service: "", message: "" });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: result.message || "Something went wrong. Please try again."
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: "Failed to connect to the server. Please check your internet connection and try again."
      });
    }
  };

  const handleWhatsAppRedirect = () => {
    const name = formData.name;
    const service = formData.service;
    const baseText = "Hi SK Services, I am interested in your services.";
    const personalText = name ? `${baseText} My name is ${name}.` : baseText;
    const serviceText = service ? `${personalText} Specifically for: ${service}.` : personalText;

    window.open(`https://wa.me/919905901353?text=${encodeURIComponent(serviceText)}`, "_blank");
  };

  return (
    <div className="row g-4 align-items-start">
      {/* Contact Info Block (Left/Top) */}
      <aside className="col-12 col-lg-5 order-2 order-lg-1">
        <div className="bg-white p-4 p-md-5 rounded-3 form-shadow border border-outline-variant/30 h-100">
          <h2 className="text-headline-md text-primary mb-4">Contact Details</h2>

          <div className="d-flex flex-column gap-4">
            {/* Proprietor */}
            <div className="d-flex align-items-start gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: "48px", height: "48px", backgroundColor: "rgba(0, 97, 165, 0.1)" }}
              >
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  person
                </span>
              </div>
              <div>
                <p className="text-label-sm text-outline text-uppercase tracking-wider mb-1">Proprietor</p>
                <p className="text-headline-sm text-on-surface mb-0">Sumit Kumar</p>
                <p className="text-body-md text-on-surface-variant mb-0">सुमित कुमार</p>
              </div>
            </div>

            {/* Phone */}
            <div className="d-flex align-items-start gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: "48px", height: "48px", backgroundColor: "rgba(89, 223, 137, 0.1)" }}
              >
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  call
                </span>
              </div>
              <div>
                <p className="text-label-sm text-outline text-uppercase tracking-wider mb-1">Phone Numbers</p>
                <a className="d-block text-headline-sm text-on-surface text-decoration-none hover-text-secondary mb-1" href="tel:+919905901353">
                  +91 99059 01353
                </a>
                <a className="d-block text-headline-sm text-on-surface text-decoration-none hover-text-secondary" href="tel:+916201306801">
                  +91 62013 06801
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="d-flex align-items-start gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: "48px", height: "48px", backgroundColor: "rgba(0, 39, 86, 0.1)" }}
              >
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
              </div>
              <div>
                <p className="text-label-sm text-outline text-uppercase tracking-wider mb-1">Service Hub</p>
                <p className="text-headline-sm text-on-surface mb-0">Vinod Nagar, Dhanbad</p>
                <p className="text-body-md text-on-surface-variant mb-0">विनोद नगर, धनबाद, झारखंड</p>
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="mt-5 rounded-3 overflow-hidden border border-outline-variant/20 position-relative group" style={{ height: "240px" }}>
            <img
              alt="Professional water tank sanitization"
              className="w-100 h-100 object-fit-cover transition-all"
              src="/house_water_tank_small1.png"
              style={{
                opacity: 0.9,
                transition: "opacity 0.5s ease"
              }}
            />
            <div
              className="position-absolute w-100 h-100 top-0 start-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0, 39, 86, 0.35), transparent)" }}
            ></div>
          </div>
        </div>
      </aside>

      {/* Lead Capture Form (Right/Bottom) */}
      <div className="col-12 col-lg-7 order-1 order-lg-2">
        <div className="bg-white p-4 p-md-5 rounded-3 form-shadow border border-outline-variant/30">
          <h2 className="text-headline-md text-primary mb-2">Request a Service</h2>
          <p className="text-body-md text-on-surface-variant mb-4 pb-2">
            Fill out the form below and our team will get back to you within 2 hours.
          </p>

          <form className="d-flex flex-column gap-4" onSubmit={handleFormSubmit}>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="d-flex flex-column gap-1">
                  <label className="text-label-sm text-outline ms-1" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="w-100 px-3 py-2.5 rounded border border-outline-variant bg-surface-bright outline-none transition-all focus-ring"
                    id="name"
                    placeholder="John Doe"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex flex-column gap-1">
                  <label className="text-label-sm text-outline ms-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="w-100 px-3 py-2.5 rounded border border-outline-variant bg-surface-bright outline-none transition-all focus-ring"
                    id="phone"
                    placeholder="+91 00000 00000"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-1">
              <label className="text-label-sm text-outline ms-1" htmlFor="service">
                Service Required
              </label>
              <div className="position-relative">
                <select
                  className="w-100 px-3 py-2.5 rounded border border-outline-variant bg-surface-bright outline-none transition-all focus-ring appearance-none"
                  id="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  style={{ paddingRight: "40px" }}
                >
                  <option disabled value="">
                    Select a Service
                  </option>
                  <option value="Water Tank Cleaning">Water Tank Cleaning</option>
                  <option value="Solar Solutions">Solar Solutions</option>
                </select>
                <div className="position-absolute end-0 top-50 translate-middle-y me-3 pointer-events-none d-flex align-items-center">
                  <span className="material-symbols-outlined text-outline">expand_more</span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-1">
              <label className="text-label-sm text-outline ms-1" htmlFor="message">
                Message (Optional)
              </label>
              <textarea
                className="w-100 px-3 py-2.5 rounded border border-outline-variant bg-surface-bright outline-none transition-all focus-ring"
                id="message"
                placeholder="How can we help you?"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                style={{ resize: "none" }}
              ></textarea>
            </div>

            <div className="pt-2 d-flex flex-column flex-md-row gap-3">
              <button
                className="flex-fill btn-custom-primary text-label-md py-3 d-flex align-items-center justify-content-center gap-2 fw-semibold"
                id="submitBtn"
                type="submit"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-headline-sm">send</span>
                    Send Request
                  </>
                )}
              </button>

              <button
                className="flex-fill btn-custom-whatsapp text-label-md py-3 d-flex align-items-center justify-content-center gap-2 fw-semibold"
                type="button"
                onClick={handleWhatsAppRedirect}
              >
                <WhatsappIcon className="text-headline-sm" size={20} />
                Chat on WhatsApp
              </button>
            </div>
          </form>

          {/* Form success / error feedback */}
          {status.success && (
            <div className="mt-4 p-3 rounded bg-success-subtle text-success d-flex align-items-center gap-2 border border-success/20 animate-fade">
              <span className="material-symbols-outlined">check_circle</span>
              <p className="text-label-md mb-0 fw-semibold">Thank you! Your request has been sent successfully.</p>
            </div>
          )}

          {status.error && (
            <div className="mt-4 p-3 rounded bg-danger-subtle text-danger d-flex align-items-center gap-2 border border-danger/20 animate-fade">
              <span className="material-symbols-outlined">error</span>
              <p className="text-label-md mb-0 fw-semibold">{status.error}</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .focus-ring:focus {
          border-color: var(--secondary) !important;
          box-shadow: 0 0 0 4px rgba(0, 97, 165, 0.15) !important;
        }
        .group:hover img {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
        }
        .animate-fade {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function Contact() {
  return (
    <div style={{ paddingTop: "96px" }}>
      <main className="py-5">
        <div className="custom-container">
          {/* Header Section */}
          <header className="text-center mb-5">
            <h1 className="text-display-lg text-primary mb-3">SK Swaksh Jalseva and Solar cleaning</h1>
            <p className="text-body-lg text-on-surface-variant mx-auto" style={{ maxWidth: "680px" }}>
              Professional hygiene and energy solutions for your home. Reach out to Sumit Kumar and his team for
              premium maintenance in Dhanbad.
            </p>
          </header>

          {/* Wrap form content inside Suspense boundary */}
          <Suspense fallback={
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }>
            <ContactFormContent />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
