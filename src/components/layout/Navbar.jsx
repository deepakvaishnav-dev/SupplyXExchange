import { useState } from 'react';
import { ChevronDown, Globe, Menu, Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ activePage = '' }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navSearchQuery, setNavSearchQuery] = useState('');

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleNavSearch = (e) => {
    e.preventDefault();
    if (navSearchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(navSearchQuery)}`);
      setNavSearchQuery('');
      closeMenu();
    }
  };

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
    <header className="public-navbar" style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#ffffff', borderBottom: '1px solid #EAECF0', padding: '0 32px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {/* Brand Logo matching screenshot */}
      <div
        className="brand-logo-text"
        onClick={() => { navigate('/'); closeMenu(); }}
        style={{ cursor: 'pointer', fontSize: '1.45rem', fontWeight: 800, color: '#101828', display: 'flex', alignItems: 'center', tracking: '-0.02em' }}
      >
        Supply<span style={{ color: '#FF5400' }}>X</span>Exchange
      </div>

      {/* Desktop Nav Links */}
      <nav className="public-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        <a href="#how-it-works" onClick={(e) => handleNavAnchor(e, 'how-it-works')} className={`public-nav-link ${activePage === 'how' ? 'active' : ''}`}>
          How It Works
        </a>
        <a href="#for-buyers" onClick={(e) => { e.preventDefault(); navigate('/search'); closeMenu(); }} className={`public-nav-link ${activePage === 'buyers' ? 'active' : ''}`}>
          For Buyers
        </a>
        <a href="#for-manufacturers" onClick={(e) => { e.preventDefault(); navigate('/register/manufacturer'); closeMenu(); }} className={`public-nav-link ${activePage === 'manufacturers' ? 'active' : ''}`}>
          For Manufacturers
        </a>
        <a href="#resources" onClick={(e) => { e.preventDefault(); navigate('/products'); closeMenu(); }} className={`public-nav-link ${activePage === 'resources' ? 'active' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          Resources <ChevronDown size={14} />
        </a>
        <a href="#about" onClick={(e) => handleNavAnchor(e, 'about')} className={`public-nav-link ${activePage === 'about' ? 'active' : ''}`}>
          About Us
        </a>
      </nav>

      {/* Navbar Search Bar & Right Actions */}
      <div className="topbar-right-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Sleek Search Bar inside Navbar */}
        <form onSubmit={handleNavSearch} className="nav-search-form" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '6px 14px', gap: '8px', width: '220px', transition: 'all 0.2s' }}>
          <Search size={15} color="#64748B" style={{ flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search factories, products..."
            value={navSearchQuery}
            onChange={(e) => setNavSearchQuery(e.target.value)}
            style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.825rem', color: '#0F172A', width: '100%' }}
          />
        </form>

        <button className="btn btn-ghost nav-desktop-btn" onClick={() => { navigate('/login'); closeMenu(); }} style={{ color: '#101828', fontWeight: 600, border: 'none', background: 'none', fontSize: '0.9rem', cursor: 'pointer' }}>
          Login
        </button>

        <button className="btn btn-orange nav-desktop-btn" onClick={() => { navigate('/buyer/dashboard'); closeMenu(); }} style={{ backgroundColor: '#FF5400', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '10px 20px', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>
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
          {/* Mobile Search Input */}
          <form onSubmit={handleNavSearch} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '10px 14px', gap: '8px' }}>
            <Search size={16} color="#64748B" />
            <input
              type="text"
              placeholder="Search apparel, mills..."
              value={navSearchQuery}
              onChange={(e) => setNavSearchQuery(e.target.value)}
              style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.9rem', color: '#0F172A', width: '100%' }}
            />
            <button type="submit" style={{ backgroundColor: '#FF5400', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 600 }}>
              Search
            </button>
          </form>

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
            <button className="btn btn-orange" style={{ width: '100%', backgroundColor: '#FF5400' }} onClick={() => { navigate('/buyer/dashboard'); closeMenu(); }}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
