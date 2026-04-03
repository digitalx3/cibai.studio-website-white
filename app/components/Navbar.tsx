'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '28px',
          left: 0,
          right: 0,
          zIndex: 9980,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          height: '56px',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : '#FFFFFF',
          borderBottom: '1px solid #FF2D00',
          transition: 'background-color 0.3s cubic-bezier(0.32,0.72,0,1)',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="glitch-hover"
          data-text="CIBAI"
          style={{
            fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
            fontWeight: 800,
            fontSize: '22px',
            letterSpacing: '-0.03em',
            color: '#0A0A0A',
            textDecoration: 'none',
            position: 'relative',
          }}
        >
          CIBAI
          <span style={{ color: '#FF2D00' }}>.</span>
        </a>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '8px' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '12px',
                letterSpacing: '0.06em',
                color: '#3A3A3A',
                textDecoration: 'none',
                padding: '6px 14px',
                position: 'relative',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#FF2D00';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = '#3A3A3A';
              }}
            >
              {link.label}
              <span
                style={{
                  position: 'absolute',
                  bottom: '2px',
                  left: '14px',
                  right: '14px',
                  height: '1px',
                  backgroundColor: '#FF2D00',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.25s cubic-bezier(0.32,0.72,0,1)',
                }}
                className="nav-underline"
              />
            </a>
          ))}
          <a
            href="#contacto"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: '#FFFFFF',
              backgroundColor: '#FF2D00',
              padding: '7px 18px',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all 0.2s cubic-bezier(0.32,0.72,0,1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#0A0A0A';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#FF2D00';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            [ INICIAR PROYECTO ]
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              backgroundColor: '#0A0A0A',
              transformOrigin: 'center',
              transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)',
              transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              backgroundColor: '#0A0A0A',
              transition: 'opacity 0.2s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              backgroundColor: '#0A0A0A',
              transformOrigin: 'center',
              transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)',
              transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9970,
              backgroundColor: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.3,
                  delay: 0.05 + i * 0.07,
                  ease: [0.32, 0.72, 0, 1],
                }}
                style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
              style={{
                marginTop: '24px',
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '13px',
                letterSpacing: '0.12em',
                color: '#FFFFFF',
                backgroundColor: '#FF2D00',
                padding: '12px 28px',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              [ INICIAR PROYECTO ]
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        a:hover .nav-underline,
        a:focus .nav-underline {
          transform: scaleX(1) !important;
        }
      `}</style>
    </>
  );
}
