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
        backgroundColor: "#060606",
        borderTop: "1px solid rgba(255,0,168,0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top neon accent gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, transparent, #FF00A8, #00FFD1, #FF00A8, transparent)",
          boxShadow: "0 0 20px rgba(255,0,168,0.5)",
        }}
        aria-hidden="true"
      />

      {/* Background watermark */}
      <div
        style={{
          position: "absolute",
          right: "-80px",
          bottom: "-80px",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(120px, 22vw, 340px)",
          fontWeight: 800,
          color: "transparent",
          WebkitTextStroke: "1px rgba(0,255,209,0.03)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.06em",
        }}
        aria-hidden="true"
      >
        END
      </div>

      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "64px 32px 40px",
          position: "relative",
          zIndex: 1,
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
            borderBottom: "1px solid rgba(237,237,237,0.05)",
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
                  color: "#EDEDED",
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
                  color: "#FF00A8",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textShadow: "0 0 8px rgba(255,0,168,0.6)",
                }}
              >
                .STUDIO
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                color: "#555",
                letterSpacing: "0.06em",
                lineHeight: 1.8,
                margin: "0 0 24px 0",
              }}
            >
              &gt; Estudio de diseño y
              <br />
              &gt; desarrollo web premium.
              <br />
              &gt;{" "}
              <span style={{ color: "#00FFD1", textShadow: "0 0 6px rgba(0,255,209,0.5)" }}>
                Berga, Barcelona, Spain
              </span>
            </p>

            {/* Status indicator */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(0,255,209,0.06)",
                border: "1px solid rgba(0,255,209,0.25)",
                padding: "6px 12px",
                boxShadow: "0 0 10px rgba(0,255,209,0.08)",
                animation: "pulse-border-cyan 3s ease-in-out infinite",
              }}
            >
              <span className="status-dot-cyan" />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "9px",
                  color: "#00FFD1",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textShadow: "0 0 6px rgba(0,255,209,0.5)",
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
                color: "#FF00A8",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "20px",
                textShadow: "0 0 6px rgba(255,0,168,0.5)",
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
                  color: "#555",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "7px 0",
                  borderBottom: "1px solid rgba(237,237,237,0.04)",
                  transition: "color 0.2s, text-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00FFD1";
                  e.currentTarget.style.textShadow = "0 0 8px rgba(0,255,209,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#555";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                <span style={{ color: "rgba(0,255,209,0.3)" }}>&gt;</span>
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
                color: "#00FFD1",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "20px",
                textShadow: "0 0 6px rgba(0,255,209,0.5)",
              }}
            >
              // SISTEMA
            </div>

            <div
              style={{
                backgroundColor: "#040404",
                border: "1px solid rgba(0,255,209,0.12)",
                padding: "20px",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "10px",
                lineHeight: 1.8,
                letterSpacing: "0.04em",
                boxShadow: "0 0 16px rgba(0,255,209,0.04)",
              }}
            >
              <div style={{ color: "#333", marginBottom: "4px" }}>
                cibai@berga:~$
              </div>
              <div style={{ color: "#555" }}>status --check</div>
              <div style={{ color: "#00FFD1", textShadow: "0 0 4px rgba(0,255,209,0.4)" }}>
                ✓ SISTEMAS OPERATIVOS
              </div>
              <div style={{ color: "#00FFD1", textShadow: "0 0 4px rgba(0,255,209,0.4)" }}>
                ✓ CAFÉ: NIVEL_ÓPTIMO
              </div>
              <div style={{ color: "#FF00A8", textShadow: "0 0 4px rgba(255,0,168,0.4)" }}>
                ✓ CÓDIGO: LIMPIO
              </div>
              <div style={{ color: "#FF00A8", textShadow: "0 0 4px rgba(255,0,168,0.4)" }}>
                ✓ PROYECTOS: ENTREGADOS
              </div>
              <div
                style={{
                  marginTop: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#333",
                }}
              >
                <span>cibai@berga:~$</span>
                <span className="blink" style={{ color: "#00FFD1", textShadow: "0 0 6px rgba(0,255,209,0.8)" }}>
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
              color: "#444",
              letterSpacing: "0.08em",
            }}
          >
            (c) 2025 CIBAI Studio // Berga, Barcelona, Spain
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
                  color: "#444",
                  textDecoration: "none",
                  letterSpacing: "0.12em",
                  padding: "8px 14px",
                  borderLeft: "1px solid rgba(237,237,237,0.05)",
                  transition: "color 0.2s, text-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FF00A8";
                  e.currentTarget.style.textShadow = "0 0 8px rgba(255,0,168,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#444";
                  e.currentTarget.style.textShadow = "none";
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
              border: "1px solid rgba(0,255,209,0.2)",
              cursor: "pointer",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "10px",
              color: "#555",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "8px 14px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#00FFD1";
              el.style.color = "#00FFD1";
              el.style.boxShadow = "0 0 10px rgba(0,255,209,0.3)";
              el.style.textShadow = "0 0 6px rgba(0,255,209,0.6)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(0,255,209,0.2)";
              el.style.color = "#555";
              el.style.boxShadow = "none";
              el.style.textShadow = "none";
            }}
          >
            ↑ TOP
          </button>
        </div>
      </div>

      {/* Bottom terminal decoration line */}
      <div
        style={{
          backgroundColor: "#030303",
          borderTop: "1px solid rgba(0,255,209,0.08)",
          padding: "8px 32px",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "9px",
          color: "#2A2A2A",
          letterSpacing: "0.1em",
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ color: "#FF00A8", textShadow: "0 0 4px rgba(255,0,168,0.4)" }}>
          REV_3.0
        </span>
        <span>//</span>
        <span>BUILT_WITH: NEXT.JS + TAILWIND + FRAMER</span>
        <span>//</span>
        <span style={{ color: "#00FFD1", textShadow: "0 0 4px rgba(0,255,209,0.4)" }}>
          BERGA, BCN, SPAIN
        </span>
        <span>//</span>
        <span style={{ color: "#00FFD1", textShadow: "0 0 4px rgba(0,255,209,0.4)" }}>
          STATUS: PRODUCTION_READY
        </span>
        <span>//</span>
        <span>CIBAI.STUDIO © 2025</span>
      </div>
    </footer>
  );
}
