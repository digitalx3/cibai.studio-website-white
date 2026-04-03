"use client";

const NAV_LINKS = [
  { label: "INICIO", href: "#hero" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "PROCESO", href: "#proceso" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "CONTACTO", href: "#contacto" },
];

const SOCIAL = [
  { label: "GH", href: "https://github.com" },
  { label: "LI", href: "https://linkedin.com" },
  { label: "BE", href: "https://behance.net" },
  { label: "TW", href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "2px solid #FF2D00",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "64px 32px 40px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(10,10,10,0.08)",
          }}
        >
          {/* Logo + tagline */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "6px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "#0A0A0A",
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                }}
              >
                CIBAI
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "11px",
                  color: "#FF2D00",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                .STUDIO
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                color: "#7A7A7A",
                letterSpacing: "0.06em",
                lineHeight: 1.8,
                margin: "0 0 24px 0",
              }}
            >
              &gt; Estudio de diseño y
              <br />
              &gt; desarrollo web premium.
              <br />
              &gt; Madrid, España // REMOTE_OK
            </p>

            {/* Status indicator */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(0,201,180,0.08)",
                border: "1px solid rgba(0,201,180,0.3)",
                padding: "6px 12px",
              }}
            >
              <span className="status-dot" />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "9px",
                  color: "#00C9B4",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                ACEPTANDO PROYECTOS
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "9px",
                color: "#FF2D00",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              // NAVEGACIÓN
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "11px",
                  color: "#3A3A3A",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "7px 0",
                  borderBottom: "1px solid rgba(10,10,10,0.05)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FF2D00";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#3A3A3A";
                }}
              >
                <span style={{ color: "rgba(10,10,10,0.2)" }}>&gt;</span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Terminal decoration */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "9px",
                color: "#FF2D00",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              // SISTEMA
            </div>

            <div
              style={{
                backgroundColor: "#0A0A0A",
                padding: "20px",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "10px",
                color: "#00C9B4",
                lineHeight: 1.8,
                letterSpacing: "0.04em",
              }}
            >
              <div style={{ color: "#555", marginBottom: "4px" }}>
                cibai@studio:~$
              </div>
              <div>status --check</div>
              <div style={{ color: "#00C9B4" }}>
                ✓ SISTEMAS OPERATIVOS
              </div>
              <div style={{ color: "#00C9B4" }}>✓ CAFÉ: NIVEL_ÓPTIMO</div>
              <div style={{ color: "#00C9B4" }}>✓ CÓDIGO: LIMPIO</div>
              <div style={{ color: "#00C9B4" }}>
                ✓ PROYECTOS: ENTREGADOS
              </div>
              <div
                style={{
                  marginTop: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#555",
                }}
              >
                <span>cibai@studio:~$</span>
                <span className="blink" style={{ color: "#FF2D00" }}>
                  ▮
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Copyright */}
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "10px",
              color: "#7A7A7A",
              letterSpacing: "0.08em",
            }}
          >
            (c) 2025 CIBAI Studio // All rights reserved
          </div>

          {/* Social */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
            }}
          >
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  color: "#7A7A7A",
                  textDecoration: "none",
                  letterSpacing: "0.12em",
                  padding: "8px 14px",
                  borderLeft: "1px solid rgba(10,10,10,0.08)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FF2D00";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#7A7A7A";
                }}
              >
                [{s.label}]
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none",
              border: "1px solid rgba(10,10,10,0.15)",
              cursor: "pointer",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "10px",
              color: "#7A7A7A",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "8px 14px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#FF2D00";
              el.style.color = "#FF2D00";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(10,10,10,0.15)";
              el.style.color = "#7A7A7A";
            }}
          >
            ↑ TOP
          </button>
        </div>
      </div>

      {/* Bottom terminal decoration line */}
      <div
        style={{
          backgroundColor: "#0A0A0A",
          padding: "8px 32px",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "9px",
          color: "#333",
          letterSpacing: "0.1em",
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ color: "#FF2D00" }}>REV_2.0</span>
        <span>//</span>
        <span>BUILT_WITH: NEXT.JS + TAILWIND + FRAMER</span>
        <span>//</span>
        <span>DEPLOYED: VERCEL</span>
        <span>//</span>
        <span style={{ color: "#00C9B4" }}>STATUS: PRODUCTION_READY</span>
        <span>//</span>
        <span>CIBAI.STUDIO © 2025</span>
      </div>
    </footer>
  );
}
