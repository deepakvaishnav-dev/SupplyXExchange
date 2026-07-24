import { useState } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ activePage = '' }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleNavAnchor = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    if (window.location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="public-navbar" style={{ position: 'relative' }}>
      {/* Brand Logo */}
      <div
        className="brand-logo-text"
        onClick={() => { navigate('/'); closeMenu(); }}
        style={{ cursor: 'pointer', fontSize: '1.4rem' }}
      >
        Supply<span className="brand-x">X</span>Exchange
      </div>

      {/* Desktop Nav Links */}
      <nav className="public-nav-links">
        <a href="#how-it-works" onClick={(e) => handleNavAnchor(e, 'how-it-works')} className={`public-nav-link ${activePage === 'how' ? 'active' : ''}`}>
          How It Works
        </a>
        <a href="#for-buyers" onClick={(e) => { e.preventDefault(); navigate('/search'); closeMenu(); }} className={`public-nav-link ${activePage === 'buyers' ? 'active' : ''}`}>
          For Buyers
        </a>
        <a href="#for-manufacturers" onClick={(e) => { e.preventDefault(); navigate('/register/manufacturer'); closeMenu(); }} className={`public-nav-link ${activePage === 'manufacturers' ? 'active' : ''}`}>
          For Manufacturers
        </a>
        <a href="#resources" onClick={(e) => { e.preventDefault(); navigate('/products'); closeMenu(); }} className={`public-nav-link ${activePage === 'resources' ? 'active' : ''}`}>
          Resources <ChevronDown size={14} />
        </a>
        <a href="#about" onClick={(e) => handleNavAnchor(e, 'about')} className={`public-nav-link ${activePage === 'about' ? 'active' : ''}`}>
          About Us
        </a>
      </nav>

      {/* Desktop Right Actions */}
      <div className="topbar-right-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)', cursor: 'pointer' }}>
          <Globe size={16} />
          <span>EN</span>
          <ChevronDown size={14} />
        </div>

        <button className="btn btn-outline" onClick={() => { navigate('/login'); closeMenu(); }}>
          Login
        </button>

        <button className="btn btn-orange" onClick={() => { navigate('/buyer/dashboard'); closeMenu(); }}>
          Get Started
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className="btn-icon-only mobile-menu-trigger"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Slide-down Drawer Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--slate-200)',
          boxShadow: 'var(--shadow-lg)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 200
        }}>
          <a href="#how-it-works" onClick={(e) => handleNavAnchor(e, 'how-it-works')} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>
            How It Works
          </a>
          <a href="#for-buyers" onClick={(e) => { e.preventDefault(); navigate('/search'); closeMenu(); }} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>
            For Buyers
          </a>
          <a href="#for-manufacturers" onClick={(e) => { e.preventDefault(); navigate('/register/manufacturer'); closeMenu(); }} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>
            For Manufacturers
          </a>
          <a href="#products" onClick={(e) => { e.preventDefault(); navigate('/products'); closeMenu(); }} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>
            Resources / Categories
          </a>
          <a href="#about" onClick={(e) => handleNavAnchor(e, 'about')} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>
            About Us
          </a>

          <div style={{ borderTop: '1px solid var(--slate-100)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => { navigate('/login'); closeMenu(); }}>
              Login
            </button>
            <button className="btn btn-orange" style={{ width: '100%' }} onClick={() => { navigate('/buyer/dashboard'); closeMenu(); }}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
