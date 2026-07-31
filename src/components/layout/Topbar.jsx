import { useState } from 'react';
import { Search, Bell, Mail, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Topbar({ role = 'buyer', onToggleMobile, isMobileOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const isPublicPage = ['/', '/login', '/register/buyer', '/register/manufacturer'].includes(location.pathname);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowMobileSearch(false);
    }
  };

  const handleNavAnchor = (e, targetId) => {
    e.preventDefault();
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
    <header className="topbar-header">
      <div className="topbar-left-section">
        {onToggleMobile && (
          <button
            className="topbar-mobile-toggle"
            onClick={onToggleMobile}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}

        {/* Desktop Search Bar */}
        <div className="topbar-search-input">
          <Search size={16} color="var(--slate-400)" />
          <input
            type="text"
            placeholder="Search products, manufacturers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>

      {/* Middle: Public links (only on public pages) */}
      {isPublicPage && (
        <div className="public-nav-links">
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); navigate('/buyer/dashboard'); }} className="public-nav-link">How It Works</a>
          <a href="#for-buyers" onClick={(e) => { e.preventDefault(); navigate('/search'); }} className="public-nav-link">For Buyers</a>
          <a href="#for-manufacturers" onClick={(e) => { e.preventDefault(); navigate('/register/manufacturer'); }} className="public-nav-link">For Manufacturers</a>
          <a href="#resources" onClick={(e) => { e.preventDefault(); navigate('/products'); }} className="public-nav-link">Resources <ChevronDown size={14} /></a>
          <a href="#about" onClick={(e) => handleNavAnchor(e, 'about')} className="public-nav-link">About Us</a>
        </div>
      )}

      {/* Right: Actions & User Info */}
      <div className="topbar-right-actions">
        {/* Search icon button for small screens */}
        <button
          className="topbar-icon-button topbar-search-toggle-btn"
          onClick={() => setShowMobileSearch(prev => !prev)}
          title="Search"
          aria-label="Search"
        >
          <Search size={18} />
        </button>

        <div className="topbar-lang-selector" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-700)', cursor: 'pointer' }}>
          <Globe size={16} />
          <span>EN</span>
          <ChevronDown size={14} />
        </div>

        <button className="topbar-icon-button" onClick={() => navigate('/notifications')} title="Notifications" aria-label="Notifications">
          <Bell size={18} />
          <span className="topbar-badge-dot">3</span>
        </button>

        <button className="topbar-icon-button" onClick={() => navigate('/messages')} title="Messages" aria-label="Messages">
          <Mail size={18} />
          <span className="topbar-badge-dot" style={{ backgroundColor: 'var(--blue-600)' }}>2</span>
        </button>

        <div className="user-profile-badge" onClick={() => navigate('/profile')} title="My Profile">
          <div className="avatar-circle">SK</div>
          <div className="user-profile-info">
            <span className="user-name" style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Shrishail Kalagi</span>
            <span className="user-role" style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Buyer</span>
          </div>
          <ChevronDown size={14} color="var(--slate-500)" className="user-chevron" />
        </div>

        <button className="btn btn-orange btn-sm topbar-post-btn" onClick={() => navigate('/rfq/create')}>
          <span className="desktop-btn-label">Post an Inquiry</span>
          <span className="mobile-btn-label">+ Inquiry</span>
        </button>
      </div>

      {/* Expandable Mobile Search Bar */}
      {showMobileSearch && (
        <div className="topbar-mobile-search-bar">
          <Search size={16} color="var(--slate-400)" />
          <input
            type="text"
            placeholder="Search products, manufacturers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              handleSearch(e);
              if (e.key === 'Enter') setShowMobileSearch(false);
            }}
            autoFocus
          />
          <button onClick={() => setShowMobileSearch(false)} className="mobile-search-close" aria-label="Close search">
            <X size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
