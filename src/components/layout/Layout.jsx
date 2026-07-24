import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children, role = 'buyer', title = 'Dashboard', subtitle }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen(prev => !prev);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <div className="app-shell">
      {isMobileOpen && (
        <div className="sidebar-backdrop active" onClick={closeMobile} />
      )}
      <Sidebar role={role} isMobileOpen={isMobileOpen} onCloseMobile={closeMobile} />
      <div className="main-content">
        <Topbar
          title={title}
          subtitle={subtitle}
          role={role}
          onToggleMobile={toggleMobile}
          isMobileOpen={isMobileOpen}
        />
        <div className="page-content animate-in">
          {children}
        </div>
      </div>
    </div>
  );
}

