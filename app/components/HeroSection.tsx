'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TERMINAL_LINES = [
  '> CIBAI_STUDIO --mode=creative',
  'Initializing design engine...',
  '[--------------------] 100%',
  'READY. Diseñamos el futuro digital.',
];

function TerminalTyping() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (currentLine >= TERMINAL_LINES.length) {
      setDone(true);
      return;
    }

    const line = TERMINAL_LINES[currentLine];
    const isProgressBar = line.includes('[---');

    // Progress bar animation
    if (isProgressBar) {
      const filledChars = ['[', ']'];
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress++;
        const filled = '='.repeat(progress);
        const empty = '-'.repeat(20 - progress);
        const progressLine = `[${filled}${empty}] ${Math.floor((progress / 20) * 100)}%`;
        setDisplayedLines(prev => {
          const updated = [...prev];
          updated[currentLine] = progressLine;
          return updated;
        });
        if (progress >= 20) {
          clearInterval(progressInterval);
          setDisplayedLines(prev => {
            const updated = [...prev];
            updated[currentLine] = '[====================] 100%';
            return updated;
          });
          setTimeout(() => {
            setCurrentLine(l => l + 1);
            setCurrentChar(0);
          }, 400);
        }
      }, 60);
      return () => clearInterval(progressInterval);
    }

    // Normal typing
    if (currentChar < line.length) {
      const delay = line[currentChar] === ' ' ? 30 : line.startsWith('>') ? 60 : 45;
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const updated = [...prev];
          if (updated[currentLine] === undefined) {
            updated[currentLine] = line[currentChar];
          } else {
            updated[currentLine] = updated[currentLine] + line[currentChar];
          }
          return updated;
        });
        setCurrentChar(c => c + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, done]);

  return (
    <div
      style={{
        fontFamily: 'var(--font-jetbrains-mono), "JetBrains Mono", monospace',
        fontSize: '13px',
        lineHeight: '1.8',
        color: '#3A3A3A',
      }}
    >
      {TERMINAL_LINES.map((_, lineIdx) => {
        const text = displayedLines[lineIdx] ?? '';
        const isActive = lineIdx === currentLine && !done;
        const isCommand = TERMINAL_LINES[lineIdx].startsWith('>');
        const isProgress = TERMINAL_LINES[lineIdx].includes('[---') || TERMINAL_LINES[lineIdx].includes('[===');
        const isReady = lineIdx === 3;

        return (
          <div key={lineIdx} style={{ display: 'flex', alignItems: 'center', minHeight: '24px' }}>
            {text && (
              <span
                style={{
                  color: isCommand ? '#FF2D00' : isProgress ? '#00C9B4' : isReady ? '#0A0A0A' : '#7A7A7A',
                  fontWeight: isCommand || isReady ? 600 : 400,
                  letterSpacing: isProgress ? '0.08em' : '0.02em',
                }}
              >
                {text}
              </span>
            )}
            {isActive && text !== undefined && (
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '14px',
                  backgroundColor: '#FF2D00',
                  marginLeft: '2px',
                  animation: 'blink 0.8s step-end infinite',
                  verticalAlign: 'middle',
                }}
              />
            )}
            {done && lineIdx === TERMINAL_LINES.length - 1 && (
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '14px',
                  backgroundColor: '#FF2D00',
                  marginLeft: '2px',
                  animation: 'blink 0.8s step-end infinite',
                  verticalAlign: 'middle',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function FloatingDecoration({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        fontFamily: 'var(--font-jetbrains-mono), monospace',
        color: '#7B00FF',
        opacity: 0.25,
        fontSize: '24px',
        fontWeight: 700,
        pointerEvents: 'none',
        userSelect: 'none',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const lineNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

  return (
    <section
      style={{
        minHeight: '100dvh',
        paddingTop: '84px',
        paddingBottom: '80px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Line numbers column */}
      <div
        className="hidden lg:flex"
        style={{
          flexDirection: 'column',
          paddingTop: '80px',
          paddingLeft: '32px',
          gap: '0',
          userSelect: 'none',
          flexShrink: 0,
          width: '64px',
        }}
      >
        {lineNumbers.map(n => (
          <div
            key={n}
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              color: '#CCCCCC',
              fontSize: '11px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: '12px',
              borderRight: '1px solid rgba(10,10,10,0.08)',
            }}
          >
            {n}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 32px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '48px',
          position: 'relative',
        }}
      >
        {/* Floating decorations */}
        <FloatingDecoration style={{ top: '10%', right: '8%', fontSize: '28px' }}>
          {'{'}
        </FloatingDecoration>
        <FloatingDecoration style={{ top: '15%', right: '12%', fontSize: '28px' }}>
          {'}'}
        </FloatingDecoration>
        <FloatingDecoration style={{ bottom: '20%', right: '6%', fontSize: '20px' }}>
          {'< />'}
        </FloatingDecoration>
        <FloatingDecoration style={{ top: '50%', right: '20%', fontSize: '16px', opacity: 0.15 }}>
          {'{ }'}
        </FloatingDecoration>
        <FloatingDecoration style={{ bottom: '35%', left: '2%', fontSize: '18px', opacity: 0.12 }}>
          {'//'}
        </FloatingDecoration>

        {/* Terminal block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          style={{
            backgroundColor: '#F5F5F5',
            border: '1px solid rgba(10,10,10,0.1)',
            borderLeft: '3px solid #FF2D00',
            padding: '20px 24px',
            maxWidth: '560px',
            position: 'relative',
          }}
        >
          {/* Terminal header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '14px',
              paddingBottom: '10px',
              borderBottom: '1px solid rgba(10,10,10,0.08)',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF2D00' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFE500' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00C9B4' }} />
            <span
              style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '10px',
                color: '#7A7A7A',
                marginLeft: '8px',
                letterSpacing: '0.06em',
              }}
            >
              cibai@studio:~
            </span>
          </div>
          <TerminalTyping />
        </motion.div>

        {/* Hero headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
          style={{ maxWidth: '800px' }}
        >
          {/* Eyebrow tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
              border: '1px solid rgba(10,10,10,0.12)',
              padding: '5px 12px',
              fontSize: '10px',
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              letterSpacing: '0.15em',
              color: '#7A7A7A',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#FF2D00',
                animation: 'blink 1s step-end infinite',
                flexShrink: 0,
              }}
            />
            Estudio de diseño & desarrollo
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: 'clamp(40px, 6vw, 88px)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              color: '#0A0A0A',
              margin: 0,
              marginBottom: '20px',
            }}
          >
            Creamos webs que
            <br />
            <span
              className="glitch-text"
              data-text="impactan."
              style={{ color: '#FF2D00', position: 'relative', display: 'inline-block' }}
            >
              impactan.
            </span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#00C9B4',
              margin: 0,
              maxWidth: '520px',
              letterSpacing: '-0.01em',
            }}
          >
            Diseño de alto nivel + desarrollo preciso.
            <br />
            Cada píxel tiene un propósito.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}
        >
          <CTAButton
            href="#contacto"
            primary
            label="[ INICIAR PROYECTO ]"
          />
          <CTAButton
            href="#portfolio"
            primary={false}
            label="[ VER PORTFOLIO ]"
          />
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(10,10,10,0.08)',
          }}
        >
          {[
            { value: '47+', label: 'Proyectos entregados' },
            { value: '100%', label: 'Código propio' },
            { value: '< 2s', label: 'Carga media' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#0A0A0A',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: '10px',
                  color: '#7A7A7A',
                  letterSpacing: '0.06em',
                  marginTop: '4px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right decorative panel - desktop only */}
      <div
        className="hidden xl:flex"
        style={{
          width: '280px',
          flexShrink: 0,
          borderLeft: '1px solid rgba(10,10,10,0.06)',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px 24px',
          gap: '24px',
        }}
      >
        <SidePanel />
      </div>
    </section>
  );
}

function CTAButton({ href, primary, label }: { href: string; primary: boolean; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'var(--font-jetbrains-mono), monospace',
        fontSize: '12px',
        letterSpacing: '0.1em',
        fontWeight: 600,
        textDecoration: 'none',
        padding: '12px 24px',
        transition: 'all 0.2s cubic-bezier(0.32,0.72,0,1)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        ...(primary
          ? {
              backgroundColor: hovered ? '#0A0A0A' : '#FF2D00',
              color: '#FFFFFF',
              border: '1px solid transparent',
            }
          : {
              backgroundColor: 'transparent',
              color: '#0A0A0A',
              border: '1px solid #0A0A0A',
            }),
      }}
    >
      {label}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '20px',
          height: '20px',
          backgroundColor: primary
            ? 'rgba(255,255,255,0.2)'
            : 'rgba(10,10,10,0.06)',
          transition: 'transform 0.2s ease',
          transform: hovered ? 'translate(2px, -1px) scale(1.1)' : 'translate(0,0) scale(1)',
          fontSize: '12px',
        }}
      >
        ↗
      </span>
    </a>
  );
}

function SidePanel() {
  return (
    <>
      {/* Tech stack tags */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: '9px',
            letterSpacing: '0.15em',
            color: '#7A7A7A',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          // Stack
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer', 'Node.js', 'Figma'].map(tech => (
            <span
              key={tech}
              style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '10px',
                padding: '3px 8px',
                border: '1px solid rgba(10,10,10,0.15)',
                color: '#3A3A3A',
                letterSpacing: '0.04em',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Status indicator */}
      <div
        style={{
          border: '1px solid rgba(10,10,10,0.1)',
          padding: '14px 16px',
          backgroundColor: '#F5F5F5',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: '9px',
            letterSpacing: '0.15em',
            color: '#7A7A7A',
            marginBottom: '10px',
          }}
        >
          // Estado actual
        </div>
        {[
          { label: 'Proyectos activos', value: '3', color: '#FF2D00' },
          { label: 'Slots disponibles', value: '2', color: '#00C9B4' },
          { label: 'Tiempo entrega', value: '2-4 sem', color: '#7B00FF' },
        ].map(item => (
          <div
            key={item.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '4px 0',
              borderBottom: '1px solid rgba(10,10,10,0.06)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '10px',
                color: '#7A7A7A',
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '11px',
                fontWeight: 700,
                color: item.color,
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
