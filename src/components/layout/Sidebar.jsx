import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Search, FileText, Scale, ShoppingBag, CreditCard,
  Truck, RotateCcw, User, Building, Heart, Wallet, Settings, Headphones,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const sidebarConfig = [
  {
    items: [
      { to: '/buyer/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/search', icon: Search, label: 'Find Manufacturers' },
      { to: '/inquiries', icon: FileText, label: 'My Inquiries', badge: '8' },
      { to: '/rfq/SXR-001/compare', icon: Scale, label: 'Compare Quotations' },
    ]
  },
  {
    section: 'ORDERS',
    items: [
      { to: '/orders', icon: ShoppingBag, label: 'My Orders' },
      { to: '/payments', icon: CreditCard, label: 'Payments' },
      { to: '/shipments', icon: Truck, label: 'Shipments' },
      { to: '/returns', icon: RotateCcw, label: 'Returns' },
    ]
  },
  {
    section: 'ACCOUNT',
    items: [
      { to: '/profile', icon: User, label: 'Profile' },
      { to: '/company-profile', icon: Building, label: 'Company Profile' },
      { to: '/saved', icon: Heart, label: 'Saved Manufacturers' },
      { to: '/payment-methods', icon: Wallet, label: 'Payment Methods' },
      { to: '/settings', icon: Settings, label: 'Settings' },
    ]
  }
];

export default function Sidebar({ isMobileOpen = false, onCloseMobile }) {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(() => {
    return localStorage.getItem('sidebar_collapsed') === 'true';
  });

  const toggleCollapsed = () => {
    setIsCollapsed(prev => {
      const nextState = !prev;
      localStorage.setItem('sidebar_collapsed', nextState ? 'true' : 'false');
      return nextState;
    });
  };

  const handleNavClick = () => {
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'open' : ''}`}>
      {/* Brand Logo & Collapse Toggle Button */}
      <div className="sidebar-logo">
        <div
          className="brand-logo-text"
          onClick={() => { navigate('/'); handleNavClick(); }}
          style={{ cursor: 'pointer' }}
        >
          {isCollapsed ? (
            <span>S<span className="brand-x">X</span>E</span>
          ) : (
            <>Supply<span className="brand-x">X</span>Exchange</>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {/* Arrow Collapse Toggle Button */}
          <button
            className="sidebar-toggle-btn"
            onClick={toggleCollapsed}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>
      </div>

      {/* Navigation list */}
      <nav className="sidebar-nav">
        {sidebarConfig.map((group, idx) => (
          <div key={idx} className="sidebar-group">
            {group.section && !isCollapsed && (
              <div className="sidebar-section-title">{group.section}</div>
            )}
            {group.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                title={isCollapsed ? item.label : undefined}
                className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
              >
                <item.icon size={18} />
                <span className="sidebar-link-label">{item.label}</span>
                {item.badge && (
                  <span className="sidebar-badge">{item.badge}</span>
                )}
              </NavLink>
            ))}
          </div>
        ))}

        {/* Support Card */}
        <div className="sidebar-help-card">
          <div className="sidebar-help-icon">
            <Headphones size={18} />
          </div>
          {!isCollapsed && (
            <>
              <div className="sidebar-help-title">Need Help?</div>
              <div className="sidebar-help-text">Our support team is here to help you.</div>
              <button
                className="btn btn-orange btn-sm"
                style={{ width: '100%' }}
                onClick={() => { navigate('/messages'); handleNavClick(); }}
              >
                Contact Support
              </button>
            </>
          )}
        </div>
      </nav>
    </aside>
  );
}
