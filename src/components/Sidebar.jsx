import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Package, FileText, MessageSquare, ShoppingCart,
  Truck, Star, Bell, User, Settings, Search, LogOut, Factory,
  BarChart3, Users, Shield, ChevronRight, TrendingUp, X
} from 'lucide-react';

const navConfigs = {
  buyer: [
    { label: 'Overview', items: [
      { to: '/buyer/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/search', icon: Search, label: 'Find Manufacturers' },
    ]},
    { label: 'Procurement', items: [
      { to: '/rfq/create', icon: FileText, label: 'Create RFQ' },
      { to: '/rfq/SXR-001', icon: Package, label: 'My RFQs', badge: '3' },
      { to: '/rfq/SXR-001/compare', icon: TrendingUp, label: 'Quotations' },
    ]},
    { label: 'Operations', items: [
      { to: '/orders', icon: ShoppingCart, label: 'Orders', badge: '2' },
      { to: '/orders/ORD-001/tracking', icon: Truck, label: 'Tracking' },
      { to: '/messages', icon: MessageSquare, label: 'Messages', badge: '5', badgeRed: true },
    ]},
    { label: 'Account', items: [
      { to: '/reviews', icon: Star, label: 'Reviews' },
      { to: '/notifications', icon: Bell, label: 'Notifications', badge: '8' },
      { to: '/profile', icon: User, label: 'Profile' },
      { to: '/settings', icon: Settings, label: 'Settings' },
    ]},
  ],
  manufacturer: [
    { label: 'Overview', items: [
      { to: '/manufacturer/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/analytics', icon: BarChart3, label: 'Analytics' },
    ]},
    { label: 'Business', items: [
      { to: '/rfq/SXR-001', icon: FileText, label: 'RFQ Inbox', badge: '7' },
      { to: '/orders', icon: ShoppingCart, label: 'Orders' },
      { to: '/orders/ORD-001/tracking', icon: Truck, label: 'Production' },
    ]},
    { label: 'Communication', items: [
      { to: '/messages', icon: MessageSquare, label: 'Messages', badge: '3', badgeRed: true },
      { to: '/reviews', icon: Star, label: 'Reviews & Ratings' },
    ]},
    { label: 'Account', items: [
      { to: '/notifications', icon: Bell, label: 'Notifications', badge: '5' },
      { to: '/manufacturer/MFGR-001', icon: Factory, label: 'My Profile' },
      { to: '/settings', icon: Settings, label: 'Settings' },
    ]},
  ],
  admin: [
    { label: 'Overview', items: [
      { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/analytics', icon: BarChart3, label: 'Analytics' },
    ]},
    { label: 'Management', items: [
      { to: '/search', icon: Factory, label: 'Manufacturers' },
      { to: '/orders', icon: ShoppingCart, label: 'Orders' },
      { to: '/rfq/SXR-001', icon: FileText, label: 'RFQs' },
    ]},
    { label: 'Administration', items: [
      { to: '/reviews', icon: Star, label: 'Reviews' },
      { to: '/messages', icon: MessageSquare, label: 'Messages' },
      { to: '/notifications', icon: Bell, label: 'Notifications' },
      { to: '/settings', icon: Shield, label: 'Settings' },
    ]},
  ],
};

const userInfo = {
  buyer: { name: 'Alex Johnson', role: 'Buyer Account', initials: 'AJ' },
  manufacturer: { name: 'Rajesh Kumar', role: 'Manufacturer Account', initials: 'RK' },
  admin: { name: 'Admin User', role: 'Super Admin', initials: 'AU' },
};

export default function Sidebar({ role = 'buyer', isMobileOpen = false, onCloseMobile }) {
  const navigate = useNavigate();
  const config = navConfigs[role] || navConfigs.buyer;
  const user = userInfo[role] || userInfo.buyer;

  const handleNavClick = () => {
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  return (
    <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <div className="sidebar-logo-brand" onClick={() => { navigate('/'); handleNavClick(); }} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="sidebar-logo-icon">SX</div>
          <div>
            <div className="sidebar-logo-text">Supply<span>X</span>Exchange</div>
          </div>
        </div>
        {onCloseMobile && (
          <button className="sidebar-close-btn" onClick={onCloseMobile} aria-label="Close menu">
            <X size={18} />
          </button>
        )}
      </div>

      <nav className="sidebar-nav">
        {config.map(section => (
          <div key={section.label}>
            <div className="sidebar-section-label">{section.label}</div>
            {section.items.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
              >
                <item.icon size={16} />
                {item.label}
                {item.badge && (
                  <span className={`sidebar-badge${item.badgeRed ? ' red' : ''}`}>{item.badge}</span>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-avatar">{user.initials}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="sidebar-user-name truncate">{user.name}</div>
          <div className="sidebar-user-role">{user.role}</div>
        </div>
        <LogOut size={16} style={{ color: 'var(--slate-500)', cursor: 'pointer', flexShrink: 0 }}
          onClick={() => { navigate('/login'); handleNavClick(); }} />
      </div>
    </aside>
  );
}

