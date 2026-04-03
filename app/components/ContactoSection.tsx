"use client";

import { useState, useRef, useEffect } from "react";

const TERMINAL_LINES = [
  "> SISTEMA DE CONTACTO INICIALIZADO",
  "> CIBAI.STUDIO v3.0 // BERGA, BCN",
  "> ESPERANDO INPUT DEL USUARIO...",
];

export default function ContactoSection() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [logLines, setLogLines] = useState<string[]>(TERMINAL_LINES);
  const [typingLines, setTypingLines] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);

  const logRef = useRef<HTMLDivElement>(null);

  // Auto-typing terminal messages
  const AUTO_MESSAGES = [
    "> CLIENTE CONECTADO DESDE BERGA, BCN",
    "> PROTOCOLOS DE SEGURIDAD ACTIVOS",
    "> CIFRADO AES-256 HABILITADO",
    "> AWAITING_INPUT...",
  ];

  useEffect(() => {
    if (currentLineIdx >= AUTO_MESSAGES.length) return;
    const currentMsg = AUTO_MESSAGES[currentLineIdx];
    if (currentCharIdx < currentMsg.length) {
      const t = setTimeout(() => {
        setTypingLines((prev) => {
          const copy = [...prev];
          copy[currentLineIdx] = currentMsg.slice(0, currentCharIdx + 1);
          return copy;
        });
        setCurrentCharIdx((c) => c + 1);
      }, 45);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLineIdx((i) => i + 1);
        setCurrentCharIdx(0);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [currentLineIdx, currentCharIdx]);

  const addLog = (line: string) => {
    setLogLines((prev) => [...prev.slice(-6), line]);
  };

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logLines]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (value.length === 1) {
      addLog(`> CAMPO_${name.toUpperCase()}: INPUT_DETECTADO`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      addLog("> ERROR: CAMPOS REQUERIDOS VACÍOS");
      return;
    }
    setSending(true);
    addLog("> PROCESANDO: ENVIAR_MENSAJE.exe");
    addLog("> ESTABLECIENDO CONEXIÓN...");

    setTimeout(() => {
      addLog("> CONEXIÓN: OK");
      addLog("> DATOS CIFRADOS Y ENVIADOS");
      addLog("> PROCESO: STATUS 200_OK ✓");
      setSending(false);
      setSent(true);
    }, 2200);
  };

  return (
    <section
      id="contacto"
      style={{
        backgroundColor: "#060606",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid cyan */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,209,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,209,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Top neon accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, transparent, #FF00A8, #00FFD1, transparent)",
          boxShadow: "0 0 20px rgba(255,0,168,0.6)",
        }}
        aria-hidden="true"
      />

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
        <div style={{ marginBottom: "72px" }}>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#FF00A8",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textShadow: "0 0 8px rgba(255,0,168,0.6)",
            }}
          >
            <span className="blink-fast">■</span>
            <span>// CONTACTO</span>
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
            INICIEMOS
            <br />
            <span
              style={{
                color: "#FF00A8",
                textShadow: "0 0 30px rgba(255,0,168,0.5)",
              }}
            >
              TU PROYECTO
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            backgroundColor: "rgba(237,237,237,0.05)",
          }}
        >
          {/* Form panel */}
          <div
            style={{
              backgroundColor: "#0D0D0D",
              padding: "48px",
              borderRight: "1px solid rgba(237,237,237,0.04)",
            }}
          >
            {/* Terminal header */}
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "10px",
                color: "#444",
                letterSpacing: "0.12em",
                marginBottom: "40px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                borderBottom: "1px solid rgba(237,237,237,0.06)",
                paddingBottom: "16px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#FF00A8",
                  display: "inline-block",
                  boxShadow: "0 0 6px rgba(255,0,168,0.8)",
                  animation: "blink 2s step-end infinite",
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#FFE500",
                  display: "inline-block",
                  opacity: 0.6,
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#00FFD1",
                  display: "inline-block",
                  boxShadow: "0 0 6px rgba(0,255,209,0.8)",
                  animation: "blink 2s step-end infinite 0.4s",
                }}
              />
              <span style={{ marginLeft: "8px" }}>
                cibai_contact.terminal — bash
              </span>
            </div>

            {sent ? (
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "13px",
                  color: "#00FFD1",
                  lineHeight: 2,
                  textShadow: "0 0 8px rgba(0,255,209,0.4)",
                }}
              >
                <div style={{ color: "#555" }}>
                  $ ENVIAR_MENSAJE.exe --status
                </div>
                <div>
                  <span style={{ color: "#FF00A8" }}>✓</span> MENSAJE RECIBIDO CORRECTAMENTE
                </div>
                <div>
                  <span style={{ color: "#FF00A8" }}>✓</span> TE CONTACTAREMOS EN &lt; 24H
                </div>
                <div style={{ marginTop: "24px", color: "#AAAAAA" }}>
                  Gracias por contactar con CIBAI Studio.
                  <br />
                  Nuestro equipo en Berga, Barcelona, te responderá pronto.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Campo nombre */}
                <div style={{ marginBottom: "32px" }}>
                  <label
                    htmlFor="nombre"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "11px",
                      color: activeField === "nombre" ? "#00FFD1" : "#555555",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      transition: "color 0.2s",
                      textShadow: activeField === "nombre" ? "0 0 8px rgba(0,255,209,0.5)" : "none",
                    }}
                  >
                    &gt; nombre:
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={form.nombre}
                      onChange={handleChange}
                      onFocus={() => {
                        setActiveField("nombre");
                        addLog("> CAMPO_NOMBRE: FOCO_ACTIVO");
                      }}
                      onBlur={() => setActiveField(null)}
                      placeholder="Tu nombre completo"
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: `1px solid ${
                          activeField === "nombre"
                            ? "#00FFD1"
                            : "rgba(237,237,237,0.12)"
                        }`,
                        color: "#EDEDED",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "14px",
                        padding: "8px 0",
                        outline: "none",
                        letterSpacing: "0.04em",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                        boxShadow:
                          activeField === "nombre"
                            ? "0 2px 0 rgba(0,255,209,0.4)"
                            : "none",
                      }}
                    />
                    {activeField === "nombre" && (
                      <span
                        className="blink"
                        style={{
                          position: "absolute",
                          right: "0",
                          bottom: "8px",
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                          fontSize: "14px",
                          color: "#00FFD1",
                          textShadow: "0 0 6px rgba(0,255,209,0.8)",
                        }}
                      >
                        ▮
                      </span>
                    )}
                  </div>
                </div>

                {/* Campo email */}
                <div style={{ marginBottom: "32px" }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "11px",
                      color: activeField === "email" ? "#FF00A8" : "#555555",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      transition: "color 0.2s",
                      textShadow: activeField === "email" ? "0 0 8px rgba(255,0,168,0.5)" : "none",
                    }}
                  >
                    &gt; email:
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => {
                        setActiveField("email");
                        addLog("> CAMPO_EMAIL: FOCO_ACTIVO");
                      }}
                      onBlur={() => setActiveField(null)}
                      placeholder="tu@email.com"
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: `1px solid ${
                          activeField === "email"
                            ? "#FF00A8"
                            : "rgba(237,237,237,0.12)"
                        }`,
                        color: "#EDEDED",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "14px",
                        padding: "8px 0",
                        outline: "none",
                        letterSpacing: "0.04em",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                        boxShadow:
                          activeField === "email"
                            ? "0 2px 0 rgba(255,0,168,0.4)"
                            : "none",
                      }}
                    />
                    {activeField === "email" && (
                      <span
                        className="blink"
                        style={{
                          position: "absolute",
                          right: "0",
                          bottom: "8px",
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                          fontSize: "14px",
                          color: "#FF00A8",
                          textShadow: "0 0 6px rgba(255,0,168,0.8)",
                        }}
                      >
                        ▮
                      </span>
                    )}
                  </div>
                </div>

                {/* Campo mensaje */}
                <div style={{ marginBottom: "40px" }}>
                  <label
                    htmlFor="mensaje"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "11px",
                      color: activeField === "mensaje" ? "#00FFD1" : "#555555",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      transition: "color 0.2s",
                      textShadow: activeField === "mensaje" ? "0 0 8px rgba(0,255,209,0.5)" : "none",
                    }}
                  >
                    &gt; mensaje:
                  </label>
                  <div style={{ position: "relative" }}>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      value={form.mensaje}
                      onChange={handleChange}
                      onFocus={() => {
                        setActiveField("mensaje");
                        addLog("> CAMPO_MENSAJE: FOCO_ACTIVO");
                      }}
                      onBlur={() => setActiveField(null)}
                      placeholder="Cuéntanos tu proyecto..."
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: `1px solid ${
                          activeField === "mensaje"
                            ? "#00FFD1"
                            : "rgba(237,237,237,0.12)"
                        }`,
                        color: "#EDEDED",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "14px",
                        padding: "8px 0",
                        outline: "none",
                        letterSpacing: "0.04em",
                        resize: "none",
                        lineHeight: 1.7,
                        transition: "border-color 0.2s, box-shadow 0.2s",
                        boxShadow:
                          activeField === "mensaje"
                            ? "0 2px 0 rgba(0,255,209,0.4)"
                            : "none",
                      }}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    backgroundColor: sending ? "#333" : "#00FFD1",
                    border: `2px solid ${sending ? "#333" : "#00FFD1"}`,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "16px 32px",
                    cursor: sending ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    willChange: "transform",
                    boxShadow: sending ? "none" : "0 0 20px rgba(0,255,209,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "#FF00A8";
                      el.style.borderColor = "#FF00A8";
                      el.style.color = "#FFFFFF";
                      el.style.boxShadow = "0 0 30px rgba(255,0,168,0.5)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!sending) {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "#00FFD1";
                      el.style.borderColor = "#00FFD1";
                      el.style.color = "#0A0A0A";
                      el.style.boxShadow = "0 0 20px rgba(0,255,209,0.4)";
                    }
                  }}
                >
                  {sending ? "[ ENVIANDO... ]" : "[ ENVIAR_MENSAJE.exe ]"}
                </button>
              </form>
            )}
          </div>

          {/* Info + terminal log panel */}
          <div
            style={{
              backgroundColor: "#080808",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            {/* Contact info */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  color: "#444",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                // INFO_CONTACTO
              </div>

              {[
                {
                  icon: "✉",
                  label: "EMAIL",
                  value: "hola@cibai.studio",
                  accent: "#00FFD1",
                },
                {
                  icon: "◎",
                  label: "UBICACIÓN",
                  value: "Berga, Barcelona, Spain",
                  accent: "#FF00A8",
                },
                {
                  icon: "⟳",
                  label: "RESPUESTA",
                  value: "< 24 horas laborables",
                  accent: "#00FFD1",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "24px",
                    paddingBottom: "24px",
                    borderBottom: "1px solid rgba(237,237,237,0.04)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "18px",
                      color: item.accent,
                      lineHeight: 1,
                      minWidth: "24px",
                      textShadow: `0 0 8px ${item.accent}80`,
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "9px",
                        color: item.accent,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                        textShadow: `0 0 6px ${item.accent}60`,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "13px",
                        color: "#AAAAAA",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal log with auto-typing */}
            <div
              style={{
                backgroundColor: "#040404",
                border: "1px solid rgba(0,255,209,0.15)",
                flex: 1,
                boxShadow: "0 0 20px rgba(0,255,209,0.05)",
              }}
            >
              <div
                style={{
                  backgroundColor: "#0A0A0A",
                  padding: "8px 16px",
                  borderBottom: "1px solid rgba(0,255,209,0.1)",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "9px",
                  color: "#444",
                  letterSpacing: "0.12em",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>SYSTEM_LOG</span>
                <span className="blink" style={{ color: "#00FFD1", textShadow: "0 0 6px rgba(0,255,209,0.8)" }}>
                  ● LIVE
                </span>
              </div>

              {/* Auto-typing init lines */}
              <div
                style={{
                  padding: "12px 16px 0",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  lineHeight: 1.8,
                  letterSpacing: "0.04em",
                  color: "#555",
                }}
              >
                {typingLines.map((line, i) => (
                  <div
                    key={`init-${i}`}
                    style={{
                      color: line.includes("BERGA") ? "#00FFD1" : "#444",
                    }}
                  >
                    {line}
                    {i === currentLineIdx && currentLineIdx < AUTO_MESSAGES.length && (
                      <span
                        className="blink"
                        style={{ color: "#00FFD1", textShadow: "0 0 4px rgba(0,255,209,0.6)" }}
                      >
                        ▮
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div
                ref={logRef}
                style={{
                  padding: "0 16px 16px",
                  maxHeight: "160px",
                  overflowY: "auto",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "10px",
                  lineHeight: 1.8,
                  letterSpacing: "0.04em",
                }}
              >
                {logLines.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      color: line.includes("ERROR")
                        ? "#FF00A8"
                        : line.includes("OK") || line.includes("✓")
                        ? "#00FFD1"
                        : "#555",
                      textShadow: line.includes("OK") || line.includes("✓")
                        ? "0 0 4px rgba(0,255,209,0.4)"
                        : line.includes("ERROR")
                        ? "0 0 4px rgba(255,0,168,0.4)"
                        : "none",
                    }}
                  >
                    {line}
                  </div>
                ))}
                <span
                  className="blink"
                  style={{
                    color: "#00FFD1",
                    textShadow: "0 0 4px rgba(0,255,209,0.6)",
                  }}
                >
                  ▮
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contacto > div > div:last-child > div {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: #333;
          font-family: var(--font-jetbrains-mono), monospace;
        }
      `}</style>
    </section>
  );
}
