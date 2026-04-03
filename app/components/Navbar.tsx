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
        backgroundColor: scrolled
          ? "rgba(5, 5, 5, 0.98)"
          : "rgba(10, 10, 10, 0.85)",
        borderBottom: scrolled
          ? "1px solid rgba(0,255,209,0.5)"
          : "1px solid rgba(237,237,237,0.06)",
        boxShadow: scrolled ? "0 0 20px rgba(0,255,209,0.12)" : "none",
        backdropFilter: "blur(16px)",
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
              color: "#EDEDED",
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
              color: "#FF00A8",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginTop: "2px",
              textShadow: "0 0 8px rgba(255,0,168,0.6)",
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
                color: "#888888",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "8px 18px",
                borderRight: "1px solid rgba(237,237,237,0.06)",
                transition: "color 0.2s, background 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#00FFD1";
                (e.target as HTMLElement).style.background = "rgba(0,255,209,0.04)";
                (e.target as HTMLElement).style.textShadow = "0 0 8px rgba(0,255,209,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#888888";
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.textShadow = "none";
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
              color: "#0A0A0A",
              backgroundColor: "#00FFD1",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "10px 20px",
              marginLeft: "16px",
              transition: "all 0.2s",
              boxShadow: "0 0 16px rgba(0,255,209,0.3)",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.backgroundColor = "#FF00A8";
              el.style.color = "#FFFFFF";
              el.style.boxShadow = "0 0 20px rgba(255,0,168,0.5)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.backgroundColor = "#00FFD1";
              el.style.color = "#0A0A0A";
              el.style.boxShadow = "0 0 16px rgba(0,255,209,0.3)";
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
            border: "1px solid rgba(0,255,209,0.3)",
            cursor: "pointer",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            color: "#00FFD1",
            letterSpacing: "0.1em",
            padding: "6px 12px",
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
            backgroundColor: "#080808",
            borderTop: "1px solid rgba(0,255,209,0.3)",
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
                color: "#AAAAAA",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "12px 0",
                borderBottom: "1px solid rgba(237,237,237,0.05)",
              }}
            >
              <span style={{ color: "#00FFD1" }}>&gt;</span> {link.label}
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
