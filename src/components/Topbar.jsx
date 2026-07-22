import { Search, Bell, HelpCircle, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Topbar({ title, subtitle, role = 'buyer', onToggleMobile, isMobileOpen }) {
  const navigate = useNavigate();
  const initials = role === 'buyer' ? 'AJ' : role === 'manufacturer' ? 'RK' : 'AU';

  return (
    <header className="topbar">
      {onToggleMobile && (
        <button
          className="mobile-menu-btn"
          onClick={onToggleMobile}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}
      <div className="topbar-title-wrap">
        <div className="topbar-title">{title}</div>
        {subtitle && <div className="topbar-subtitle">{subtitle}</div>}
      </div>
      <div className="topbar-spacer" />
      <div className="topbar-search">
        <Search size={15} color="var(--slate-400)" />
        <input placeholder="Search anything..." />
      </div>
      <div className="topbar-actions">
        <button className="topbar-icon-btn" onClick={() => navigate('/notifications')} title="Notifications">
          <Bell size={17} />
          <span className="topbar-notif-dot" />
        </button>
        <button className="topbar-icon-btn" title="Help">
          <HelpCircle size={17} />
        </button>
        <div
          className="topbar-avatar"
          onClick={() => navigate('/profile')}
          title="View Profile"
        >
          {initials}
        </div>
      </div>
    </header>
  );
}

