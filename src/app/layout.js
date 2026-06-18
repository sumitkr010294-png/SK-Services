import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

export const metadata = {
  title: "SK Swaksh Jalseva and Solar cleaning | Premium Cleaning & Maintenance",
  description: "Experience crystal clarity with Jharkhand's specialized hygiene services. From industrial water tanks to high-efficiency solar panels, we bring sterile precision to your doorstep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Navbar />
        <div style={{ flex: "1 0 auto" }}>{children}</div>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
