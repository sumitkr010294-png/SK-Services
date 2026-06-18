"use client";
import React from "react";
import { WhatsappIcon } from "react-share";

export default function WhatsAppFAB() {
  const whatsappUrl = "https://wa.me/919905901353?text=I%20want%20cleaning%20of%20my%20water%20tank";

  return (
    <a
      className="fixed-bottom position-fixed d-flex align-items-center justify-content-center text-on-tertiary-fixed text-decoration-none shadow-lg hover-scale-110 active-scale-90 transition-transform"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        right: "32px",
        bottom: "32px",
        left: "auto",
        zIndex: 1000,
        backgroundColor: "var(--tertiary-fixed-dim)",
        borderRadius: "50px",
        padding: "16px",
        boxShadow: "0 8px 32px 0 rgba(89, 223, 137, 0.3)",
        animation: "pulse 2s infinite"
      }}
    >
      <WhatsappIcon size={24} style={{ color: "white" }} />
      <span className="d-none d-md-inline ms-2 text-label-md fw-bold pe-1">
        WhatsApp
      </span>
      
      <style jsx global>{`
        .hover-scale-110:hover {
          transform: scale(1.1);
        }
        .active-scale-90:active {
          transform: scale(0.9);
        }
        .transition-transform {
          transition: transform 0.2s ease-in-out;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(89, 223, 137, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(89, 223, 137, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(89, 223, 137, 0);
          }
        }
      `}</style>
    </a>
  );
}
