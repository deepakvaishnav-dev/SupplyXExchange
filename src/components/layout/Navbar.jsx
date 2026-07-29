import { useState, useEffect } from 'react';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

export default function Navbar({ activePage = '' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navSearchQuery, setNavSearchQuery] = useState('');

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Prevent background body scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    if (location.pathname === '/') {
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
    <header className="public-navbar">
      {/* Brand Logo Image */}
      <div
        className="brand-logo-wrapper"
        onClick={() => { navigate('/'); closeMenu(); }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') { navigate('/'); closeMenu(); } }}
      >
        <img src={logoImg} alt="SupplyXExchange Logo" className="brand-logo-img" />
      </div>

      {/* Desktop Nav Links */}
      <nav className="public-nav-links" aria-label="Main Navigation">
        <a
          href="#how-it-works"
          onClick={(e) => handleNavAnchor(e, 'how-it-works')}
          className={`public-nav-link ${activePage === 'how' ? 'active' : ''}`}
        >
          How It Works
        </a>
        <a
          href="#for-buyers"
          onClick={(e) => { e.preventDefault(); navigate('/search'); closeMenu(); }}
          className={`public-nav-link ${activePage === 'buyers' ? 'active' : ''}`}
        >
          For Buyers
        </a>
        <a
          href="#for-manufacturers"
          onClick={(e) => { e.preventDefault(); navigate('/register/manufacturer'); closeMenu(); }}
          className={`public-nav-link ${activePage === 'manufacturers' ? 'active' : ''}`}
        >
          For Manufacturers
        </a>
        <a
          href="#resources"
          onClick={(e) => { e.preventDefault(); navigate('/products'); closeMenu(); }}
          className={`public-nav-link ${activePage === 'resources' ? 'active' : ''}`}
        >
          Resources <ChevronDown size={14} />
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavAnchor(e, 'about')}
          className={`public-nav-link ${activePage === 'about' ? 'active' : ''}`}
        >
          About Us
        </a>
      </nav>

      {/* Navbar Right Actions (Search & Buttons) */}
      <div className="topbar-right-actions">
        {/* Search Bar inside Navbar */}
        <form onSubmit={handleNavSearch} className="nav-search-form">
          <Search size={15} color="#64748B" style={{ flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search factories, products..."
            value={navSearchQuery}
            onChange={(e) => setNavSearchQuery(e.target.value)}
            aria-label="Search factories and products"
          />
        </form>

        <button
          className="btn btn-ghost nav-desktop-btn"
          onClick={() => { navigate('/login'); closeMenu(); }}
        >
          Login
        </button>

        <button
          className="btn btn-orange nav-desktop-btn"
          onClick={() => { navigate('/buyer/dashboard'); closeMenu(); }}
        >
          Get Started
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-trigger"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Slide-down Drawer Menu & Backdrop */}
      {isMobileMenuOpen && (
        <>
          <div className="mobile-drawer-backdrop" onClick={closeMenu} />
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
            {/* Mobile Search Input */}
            <form onSubmit={handleNavSearch} className="mobile-search-form">
              <Search size={16} color="#64748B" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search factories, products..."
                value={navSearchQuery}
                onChange={(e) => setNavSearchQuery(e.target.value)}
                aria-label="Search factories and products on mobile"
              />
              <button type="submit" className="mobile-search-btn">
                Search
              </button>
            </form>

            <nav className="mobile-nav-menu-list">
              <a
                href="#how-it-works"
                onClick={(e) => handleNavAnchor(e, 'how-it-works')}
                className={`mobile-nav-item ${activePage === 'how' ? 'active' : ''}`}
              >
                <span>How It Works</span>
              </a>
              <a
                href="#for-buyers"
                onClick={(e) => { e.preventDefault(); navigate('/search'); closeMenu(); }}
                className={`mobile-nav-item ${activePage === 'buyers' ? 'active' : ''}`}
              >
                <span>For Buyers</span>
              </a>
              <a
                href="#for-manufacturers"
                onClick={(e) => { e.preventDefault(); navigate('/register/manufacturer'); closeMenu(); }}
                className={`mobile-nav-item ${activePage === 'manufacturers' ? 'active' : ''}`}
              >
                <span>For Manufacturers</span>
              </a>
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); navigate('/products'); closeMenu(); }}
                className={`mobile-nav-item ${activePage === 'resources' ? 'active' : ''}`}
              >
                <span>Resources & Categories</span>
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavAnchor(e, 'about')}
                className={`mobile-nav-item ${activePage === 'about' ? 'active' : ''}`}
              >
                <span>About Us</span>
              </a>
            </nav>

            <div className="mobile-drawer-actions">
              <button
                className="btn btn-outline mobile-drawer-btn"
                onClick={() => { navigate('/login'); closeMenu(); }}
              >
                Login
              </button>
              <button
                className="btn btn-orange mobile-drawer-btn"
                onClick={() => { navigate('/buyer/dashboard'); closeMenu(); }}
              >
                Get Started
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

