"use client";

const PROYECTOS = [
  {
    id: "PRJ-001",
    title: "NEXUS PLATFORM",
    category: "SaaS / Dashboard",
    desc: "Plataforma de gestión de datos con dashboard analítico, sistema de autenticación y API REST. Dark mode, gráficas en tiempo real.",
    tags: ["NEXT.JS", "POSTGRES", "RECHARTS", "FRAMER"],
    accent: "#FF2D00",
    size: "large",
    year: "2025",
  },
  {
    id: "PRJ-002",
    title: "KIRA STUDIO",
    category: "Portfolio / Branding",
    desc: "Portfolio editorial para estudio creativo. Transiciones fluidas, grid bento y tipografía de alto contraste.",
    tags: ["REACT", "GSAP", "TAILWIND"],
    accent: "#00C9B4",
    size: "small",
    year: "2025",
  },
  {
    id: "PRJ-003",
    title: "VOID COMMERCE",
    category: "E-commerce",
    desc: "Tienda online con pasarela de pago, gestión de inventario y panel de administración personalizado.",
    tags: ["NEXT.JS", "STRIPE", "PRISMA"],
    accent: "#7B00FF",
    size: "small",
    year: "2024",
  },
  {
    id: "PRJ-004",
    title: "ATLAS MAPS",
    category: "WebApp / GIS",
    desc: "Plataforma de visualización geoespacial con mapas interactivos, capas de datos y exportación en múltiples formatos.",
    tags: ["REACT", "MAPBOX", "NODE.JS", "POSTGRES"],
    accent: "#FF2D00",
    size: "medium",
    year: "2024",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: "#F5F5F5",
        padding: "120px 0",
        borderTop: "2px solid #0A0A0A",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          WebkitTextStroke: "1px rgba(10,10,10,0.04)",
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
                color: "#FF2D00",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
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
                color: "#0A0A0A",
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              PROYECTOS
              <br />
              DESTACADOS
            </h2>
          </div>

          <a
            href="#contacto"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              fontWeight: 600,
              color: "#0A0A0A",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid rgba(10,10,10,0.2)",
              padding: "12px 20px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#FF2D00";
              el.style.color = "#FF2D00";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(10,10,10,0.2)";
              el.style.color = "#0A0A0A";
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
            backgroundColor: "rgba(10,10,10,0.12)",
          }}
        >
          {/* Large card - PRJ-001 */}
          <div
            style={{
              gridColumn: "span 7",
              backgroundColor: "#0A0A0A",
              padding: "48px",
              position: "relative",
              overflow: "hidden",
              minHeight: "380px",
              cursor: "pointer",
              transition: "transform 0.2s",
              willChange: "transform",
            }}
            className="glitch-hover"
            data-text={PROYECTOS[0].title}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.01)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* Grid pattern background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(to right, rgba(255,45,0,0.06) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,45,0,0.06) 1px, transparent 1px)
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
                backgroundColor: "#FF2D00",
                boxShadow: "0 0 16px rgba(255,45,0,0.7)",
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
                  color: "#FF2D00",
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{PROYECTOS[0].id}</span>
                <span style={{ color: "#555" }}>{PROYECTOS[0].year}</span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                  margin: "0 0 12px 0",
                  textTransform: "uppercase",
                }}
              >
                {PROYECTOS[0].title}
              </h3>

              {/* Category */}
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  color: "#FF2D00",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {PROYECTOS[0].category}
              </div>

              {/* Desc */}
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "14px",
                  color: "#AAAAAA",
                  lineHeight: 1.7,
                  margin: "0 0 28px 0",
                  maxWidth: "480px",
                }}
              >
                {PROYECTOS[0].desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {PROYECTOS[0].tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: "#FF2D00",
                      border: "1px solid rgba(255,45,0,0.4)",
                      padding: "3px 8px",
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
              backgroundColor: "rgba(10,10,10,0.12)",
            }}
          >
            {[PROYECTOS[1], PROYECTOS[2]].map((prj) => (
              <div
                key={prj.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F8F8F8";
                  const line = e.currentTarget.querySelector(
                    ".accent-line"
                  ) as HTMLElement;
                  if (line) line.style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  const line = e.currentTarget.querySelector(
                    ".accent-line"
                  ) as HTMLElement;
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
                    boxShadow: `0 0 8px ${prj.accent}66`,
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
                  }}
                >
                  <span>{prj.id}</span>
                  <span style={{ color: "#AAAAAA" }}>{prj.year}</span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#0A0A0A",
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
                    color: "#7A7A7A",
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
                    color: "#5A5A5A",
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
                        border: `1px solid ${prj.accent}66`,
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

          {/* Bottom medium card - PRJ-004 */}
          <div
            style={{
              gridColumn: "span 12",
              backgroundColor: "#FFFFFF",
              padding: "40px 48px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
              borderTop: "1px solid rgba(10,10,10,0.08)",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F8F8F8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "clamp(20px, 3vw, 36px)",
                  fontWeight: 800,
                  color: "#0A0A0A",
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
                  color: "#7A7A7A",
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
                    color: "#FF2D00",
                    border: "1px solid rgba(255,45,0,0.4)",
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
                  color: "#FF2D00",
                  marginLeft: "16px",
                  letterSpacing: "0.1em",
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
              color: "#0A0A0A",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "2px solid #0A0A0A",
              padding: "16px 40px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#0A0A0A";
              el.style.color = "#FFFFFF";
              el.style.boxShadow = "4px 4px 0 #FF2D00";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = "#0A0A0A";
              el.style.boxShadow = "none";
            }}
          >
            [ VER TODOS LOS PROYECTOS ]
          </a>
        </div>
      </div>
    </section>
  );
}
