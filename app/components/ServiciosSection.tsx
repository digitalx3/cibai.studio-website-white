'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SERVICIOS = [
  {
    index: '01',
    title: 'Diseño Web',
    symbol: '< >',
    description:
      'Interfaces de alto rendimiento con identidad visual única. Desde landing pages a portales complejos. Pixel-perfect, responsive, rápidas.',
    tags: ['UI/UX', 'Figma', 'Next.js', 'Tailwind'],
    accent: '#FF2D00',
  },
  {
    index: '02',
    title: 'Webapps',
    symbol: '{ }',
    description:
      'Aplicaciones web funcionales y escalables. Dashboards, SaaS, herramientas internas. Arquitectura limpia, DX optimizada.',
    tags: ['React', 'TypeScript', 'APIs', 'Auth'],
    accent: '#00C9B4',
  },
  {
    index: '03',
    title: 'Comercio Electrónico',
    symbol: '[ ]',
    description:
      'Tiendas online que convierten. Shopify, WooCommerce o custom. Checkout optimizado, gestión de inventario, analítica integrada.',
    tags: ['Shopify', 'WooCommerce', 'Stripe', 'SEO'],
    accent: '#7B00FF',
  },
  {
    index: '04',
    title: 'Soluciones a Medida',
    symbol: '( )',
    description:
      'Cuando el problema es único, la solución también. Automatizaciones, integraciones de terceros, sistemas propietarios.',
    tags: ['APIs', 'Automatización', 'Custom', 'Backend'],
    accent: '#FFE500',
  },
];

function ServicioCard({
  servicio,
  index,
}: {
  servicio: (typeof SERVICIOS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.32, 0.72, 0, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        border: hovered ? `1px solid ${servicio.accent}` : '1px solid rgba(10,10,10,0.12)',
        padding: '32px 28px',
        backgroundColor: hovered ? `${servicio.accent}06` : '#FFFFFF',
        transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
        cursor: 'default',
        boxShadow: hovered
          ? `0 0 20px 0 ${servicio.accent}20, inset 0 0 20px 0 ${servicio.accent}05`
          : '0 1px 3px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        {/* Index number — blinking */}
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: '11px',
            fontWeight: 700,
            color: hovered ? servicio.accent : '#CCCCCC',
            letterSpacing: '0.1em',
            transition: 'color 0.3s ease',
            animation: hovered ? 'blink 0.8s step-end infinite' : 'none',
          }}
        >
          [{servicio.index}]
        </span>

        {/* Symbol */}
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: '20px',
            fontWeight: 700,
            color: hovered ? servicio.accent : 'rgba(10,10,10,0.12)',
            transition: 'color 0.3s ease, transform 0.3s ease',
            transform: hovered ? 'scale(1.15)' : 'scale(1)',
            letterSpacing: '0.04em',
            lineHeight: 1,
          }}
        >
          {servicio.symbol}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '24px',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#0A0A0A',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {servicio.title}
        </h3>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontSize: '14px',
          lineHeight: 1.65,
          color: '#7A7A7A',
          margin: 0,
          flex: 1,
        }}
      >
        {servicio.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {servicio.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: '10px',
              letterSpacing: '0.06em',
              padding: '3px 8px',
              border: hovered
                ? `1px solid ${servicio.accent}40`
                : '1px solid rgba(10,10,10,0.1)',
              color: hovered ? servicio.accent : '#7A7A7A',
              backgroundColor: hovered ? `${servicio.accent}08` : 'transparent',
              transition: 'all 0.25s ease',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom CTA on hover */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          marginTop: '-8px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: servicio.accent,
            fontWeight: 600,
          }}
        >
          Saber más
        </span>
        <span style={{ color: servicio.accent, fontSize: '14px' }}>→</span>
      </div>

      {/* Left accent border on hover */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          bottom: '20%',
          width: '2px',
          backgroundColor: servicio.accent,
          transform: hovered ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)',
        }}
      />
    </motion.div>
  );
}

export default function ServiciosSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section
      id="servicios"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '100px',
        paddingBottom: '100px',
        borderTop: '1px solid rgba(10,10,10,0.06)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          style={{ marginBottom: '64px' }}
        >
          {/* Section tag */}
          <div
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: '#FF2D00',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '20px',
                height: '1px',
                backgroundColor: '#FF2D00',
              }}
            />
            // SERVICIOS
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: '#0A0A0A',
                margin: 0,
              }}
            >
              Lo que
              <br />
              construimos
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#7A7A7A',
                maxWidth: '360px',
                margin: 0,
              }}
            >
              Cuatro áreas de especialización.
              Un único objetivo: que tu web funcione y convierta.
            </p>
          </div>
        </motion.div>

        {/* Cards grid 2x2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(10,10,10,0.08)',
            border: '1px solid rgba(10,10,10,0.08)',
          }}
        >
          {SERVICIOS.map((servicio, i) => (
            <ServicioCard key={servicio.index} servicio={servicio} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(10,10,10,0.06)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: '11px',
              color: '#7A7A7A',
              letterSpacing: '0.06em',
            }}
          >
            &gt; ¿Tienes un proyecto en mente?
          </span>
          <a
            href="#contacto"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: '12px',
              letterSpacing: '0.1em',
              fontWeight: 600,
              color: '#FF2D00',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'gap 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.gap = '12px';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.gap = '8px';
            }}
          >
            Hablemos
            <span style={{ fontSize: '16px' }}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
