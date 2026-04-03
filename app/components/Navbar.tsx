"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "INICIO", href: "#hero" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "PROCESO", href: "#proceso" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "CONTACTO", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: "28px",
        left: 0,
        right: 0,
        zIndex: 9000,
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        borderBottom: `1px solid ${scrolled ? "#FF2D00" : "rgba(10,10,10,0.1)"}`,
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
        willChange: "transform",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 32px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#0A0A0A",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}
          >
            CIBAI
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "10px",
              color: "#FF2D00",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginTop: "2px",
            }}
          >
            .STUDIO
          </span>
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                fontWeight: 500,
                color: "#3A3A3A",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "8px 18px",
                borderRight: "1px solid rgba(10,10,10,0.08)",
                transition: "color 0.2s, background 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#FF2D00";
                (e.target as HTMLElement).style.background = "rgba(255,45,0,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#3A3A3A";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contacto"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              fontWeight: 700,
              color: "#FFFFFF",
              backgroundColor: "#FF2D00",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "10px 20px",
              marginLeft: "16px",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "#CC2400";
              (e.target as HTMLElement).style.boxShadow = "0 0 16px rgba(255,45,0,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "#FF2D00";
              (e.target as HTMLElement).style.boxShadow = "none";
            }}
          >
            [ CONTACTAR ]
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            color: "#0A0A0A",
            letterSpacing: "0.1em",
          }}
          className="show-mobile"
        >
          {mobileOpen ? "[ X ]" : "[ ≡ ]"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid #FF2D00",
            padding: "16px 32px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "12px",
                color: "#0A0A0A",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "12px 0",
                borderBottom: "1px solid rgba(10,10,10,0.06)",
              }}
            >
              &gt; {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
