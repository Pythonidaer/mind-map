import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      style={{
        position: 'fixed',
        width: '100%',
        backgroundColor: 'white',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease-in-out',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        zIndex: 1000,
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>
        JavaScript Paradigms
      </Link>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
        <Link to="/functional" style={{ textDecoration: 'none', color: '#333' }}>Functional</Link>
        <Link to="/declarative" style={{ textDecoration: 'none', color: '#333' }}>Declarative</Link>
        <Link to="/oop" style={{ textDecoration: 'none', color: '#333' }}>OOP</Link>
        <Link to="/procedural" style={{ textDecoration: 'none', color: '#333' }}>Procedural</Link>
        <Link to="/imperative" style={{ textDecoration: 'none', color: '#333' }}>Imperative</Link>
      </div>
    </nav>
  );
};

export default Navbar;
