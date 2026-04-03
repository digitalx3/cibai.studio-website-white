"use client";

const PROYECTOS = [
  {
    id: "PRJ-001",
    title: "NEXUS PLATFORM",
    category: "SaaS / Dashboard",
    desc: "Plataforma de gestión de datos con dashboard analítico, sistema de autenticación y API REST. Dark mode, gráficas en tiempo real.",
    tags: ["NEXT.JS", "POSTGRES", "RECHARTS", "FRAMER"],
    accent: "#00FFD1",
    year: "2025",
  },
  {
    id: "PRJ-002",
    title: "KIRA STUDIO",
    category: "Portfolio / Branding",
    desc: "Portfolio editorial para estudio creativo. Transiciones fluidas, grid bento y tipografía de alto contraste.",
    tags: ["REACT", "GSAP", "TAILWIND"],
    accent: "#FF00A8",
    year: "2025",
  },
  {
    id: "PRJ-003",
    title: "VOID COMMERCE",
    category: "E-commerce",
    desc: "Tienda online con pasarela de pago, gestión de inventario y panel de administración personalizado.",
    tags: ["NEXT.JS", "STRIPE", "PRISMA"],
    accent: "#00FFD1",
    year: "2024",
  },
  {
    id: "PRJ-004",
    title: "ATLAS MAPS",
    category: "WebApp / GIS",
    desc: "Plataforma de visualización geoespacial con mapas interactivos, capas de datos y exportación en múltiples formatos.",
    tags: ["REACT", "MAPBOX", "NODE.JS", "POSTGRES"],
    accent: "#FF00A8",
    year: "2024",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: "#0A0A0A",
        padding: "120px 0",
        borderTop: "1px solid rgba(0,255,209,0.15)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top neon accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, transparent, #00FFD1, transparent)",
          boxShadow: "0 0 16px rgba(0,255,209,0.5)",
        }}
        aria-hidden="true"
      />

      {/* Background watermark */}
      <div
        style={{
          position: "absolute",
          right: "-60px",
          top: "-40px",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(120px, 22vw, 320px)",
          fontWeight: 800,
          color: "transparent",
          WebkitTextStroke: "1px rgba(0,255,209,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.06em",
        }}
        aria-hidden="true"
      >
        WRK
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "64px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00FFD1",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textShadow: "0 0 8px rgba(0,255,209,0.5)",
              }}
            >
              <span className="blink-fast">■</span>
              <span>// PORTFOLIO</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(36px, 6vw, 88px)",
                fontWeight: 800,
                color: "#EDEDED",
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              PROYECTOS
              <br />
              <span style={{ color: "#FF00A8", textShadow: "0 0 30px rgba(255,0,168,0.4)" }}>
                DESTACADOS
              </span>
            </h2>
          </div>

          <a
            href="#contacto"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              fontWeight: 600,
              color: "#00FFD1",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid rgba(0,255,209,0.3)",
              padding: "12px 20px",
              transition: "all 0.2s",
              boxShadow: "0 0 8px rgba(0,255,209,0.1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#00FFD1";
              el.style.backgroundColor = "rgba(0,255,209,0.08)";
              el.style.boxShadow = "0 0 20px rgba(0,255,209,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(0,255,209,0.3)";
              el.style.backgroundColor = "transparent";
              el.style.boxShadow = "0 0 8px rgba(0,255,209,0.1)";
            }}
          >
            [ VER_TODOS → ]
          </a>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto",
            gap: "1px",
            backgroundColor: "rgba(237,237,237,0.05)",
          }}
        >
          {/* Large card — PRJ-001 */}
          <div
            style={{
              gridColumn: "span 7",
              backgroundColor: "#0D0D0D",
              padding: "48px",
              position: "relative",
              overflow: "hidden",
              minHeight: "380px",
              cursor: "pointer",
              transition: "transform 0.2s",
              willChange: "transform",
              border: "1px solid rgba(0,255,209,0.1)",
            }}
            className="glitch-hover"
            data-text={PROYECTOS[0].title}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.01)";
              e.currentTarget.style.borderColor = "#00FFD1";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(0,255,209,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = "rgba(0,255,209,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Grid pattern background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(to right, rgba(0,255,209,0.04) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0,255,209,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
              }}
              aria-hidden="true"
            />

            {/* Neon accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                backgroundColor: "#00FFD1",
                boxShadow: "0 0 20px rgba(0,255,209,0.8)",
              }}
              aria-hidden="true"
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Project ID */}
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: "#00FFD1",
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textShadow: "0 0 8px rgba(0,255,209,0.5)",
                }}
              >
                <span>{PROYECTOS[0].id}</span>
                <span style={{ color: "#444" }}>{PROYECTOS[0].year}</span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 800,
                  color: "#EDEDED",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                  margin: "0 0 12px 0",
                  textTransform: "uppercase",
                }}
              >
                {PROYECTOS[0].title}
              </h3>

              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  color: "#00FFD1",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {PROYECTOS[0].category}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "14px",
                  color: "#666666",
                  lineHeight: 1.7,
                  margin: "0 0 28px 0",
                  maxWidth: "480px",
                }}
              >
                {PROYECTOS[0].desc}
              </p>

              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {PROYECTOS[0].tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: "#00FFD1",
                      border: "1px solid rgba(0,255,209,0.4)",
                      padding: "3px 8px",
                      boxShadow: "0 0 4px rgba(0,255,209,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Small cards column */}
          <div
            style={{
              gridColumn: "span 5",
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gap: "1px",
              backgroundColor: "rgba(237,237,237,0.05)",
            }}
          >
            {[PROYECTOS[1], PROYECTOS[2]].map((prj) => (
              <div
                key={prj.id}
                style={{
                  backgroundColor: "#0D0D0D",
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  willChange: "transform",
                  border: `1px solid rgba(${prj.accent === "#00FFD1" ? "0,255,209" : "255,0,168"},0.08)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#111111";
                  e.currentTarget.style.borderColor = prj.accent;
                  e.currentTarget.style.boxShadow = `0 0 20px ${prj.accent}20`;
                  const line = e.currentTarget.querySelector(".accent-line") as HTMLElement;
                  if (line) line.style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0D0D0D";
                  e.currentTarget.style.borderColor = `rgba(${prj.accent === "#00FFD1" ? "0,255,209" : "255,0,168"},0.08)`;
                  e.currentTarget.style.boxShadow = "none";
                  const line = e.currentTarget.querySelector(".accent-line") as HTMLElement;
                  if (line) line.style.width = "32px";
                }}
              >
                {/* Accent top line */}
                <div
                  className="accent-line"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "2px",
                    width: "32px",
                    backgroundColor: prj.accent,
                    transition: "width 0.4s ease",
                    boxShadow: `0 0 10px ${prj.accent}`,
                  }}
                />

                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "9px",
                    letterSpacing: "0.14em",
                    color: prj.accent,
                    marginBottom: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    textShadow: `0 0 6px ${prj.accent}60`,
                  }}
                >
                  <span>{prj.id}</span>
                  <span style={{ color: "#444" }}>{prj.year}</span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#EDEDED",
                    letterSpacing: "-0.03em",
                    margin: "0 0 6px 0",
                    textTransform: "uppercase",
                  }}
                >
                  {prj.title}
                </h3>

                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "10px",
                    color: "#555",
                    letterSpacing: "0.1em",
                    marginBottom: "12px",
                  }}
                >
                  {prj.category}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "12px",
                    color: "#555555",
                    lineHeight: 1.6,
                    margin: "0 0 16px 0",
                  }}
                >
                  {prj.desc}
                </p>

                <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                  {prj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "9px",
                        letterSpacing: "0.08em",
                        color: prj.accent,
                        border: `1px solid ${prj.accent}40`,
                        padding: "2px 6px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom wide card — PRJ-004 */}
          <div
            style={{
              gridColumn: "span 12",
              backgroundColor: "#0D0D0D",
              padding: "40px 48px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
              borderTop: "1px solid rgba(255,0,168,0.1)",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#111111";
              e.currentTarget.style.borderTopColor = "#FF00A8";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(255,0,168,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0D0D0D";
              e.currentTarget.style.borderTopColor = "rgba(255,0,168,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "clamp(20px, 3vw, 36px)",
                  fontWeight: 800,
                  color: "#EDEDED",
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                }}
              >
                {PROYECTOS[3].title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "9px",
                  color: "#555",
                  letterSpacing: "0.12em",
                }}
              >
                {PROYECTOS[3].category} // {PROYECTOS[3].year}
              </div>
            </div>

            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              {PROYECTOS[3].tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "9px",
                    letterSpacing: "0.08em",
                    color: "#FF00A8",
                    border: "1px solid rgba(255,0,168,0.35)",
                    padding: "3px 8px",
                  }}
                >
                  {tag}
                </span>
              ))}

              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "11px",
                  color: "#FF00A8",
                  marginLeft: "16px",
                  letterSpacing: "0.1em",
                  textShadow: "0 0 8px rgba(255,0,168,0.6)",
                }}
              >
                VER →
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "48px",
            textAlign: "center",
          }}
        >
          <a
            href="#contacto"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "13px",
              fontWeight: 700,
              color: "#00FFD1",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "2px solid rgba(0,255,209,0.4)",
              padding: "16px 40px",
              transition: "all 0.2s",
              boxShadow: "0 0 8px rgba(0,255,209,0.1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "rgba(0,255,209,0.08)";
              el.style.borderColor = "#00FFD1";
              el.style.boxShadow = "4px 4px 0 #00FFD1, 0 0 30px rgba(0,255,209,0.3)";
              el.style.transform = "translate(-2px,-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.borderColor = "rgba(0,255,209,0.4)";
              el.style.boxShadow = "0 0 8px rgba(0,255,209,0.1)";
              el.style.transform = "translate(0,0)";
            }}
          >
            [ VER TODOS LOS PROYECTOS ]
          </a>
        </div>
      </div>
    </section>
  );
}
