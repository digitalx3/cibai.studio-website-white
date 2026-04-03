"use client";

export default function CRTOverlay() {
  return (
    <>
      {/* Scanlines CRT sobre fondo oscuro — más visibles */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9990,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,255,209,0.022) 3px, rgba(0,255,209,0.022) 4px)",
        }}
        aria-hidden="true"
      />

      {/* Vignette perimetral oscura */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9989,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Noise grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9988,
          pointerEvents: "none",
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* Horizontal glitch line — aparece ocasionalmente */}
      <div
        style={{
          position: "fixed",
          top: "30%",
          left: 0,
          right: 0,
          height: "1px",
          zIndex: 9987,
          pointerEvents: "none",
          background: "linear-gradient(to right, transparent, rgba(0,255,209,0.15), rgba(255,0,168,0.1), transparent)",
          animation: "blink 8s step-end infinite",
          animationDelay: "3s",
        }}
        aria-hidden="true"
      />
    </>
  );
}
