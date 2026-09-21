import type { FC } from 'react';
import {
  LayoutDashboard,
  Map,
  Sliders,
  Layers,
  BarChart2,
  FileText,
  Bell,
  Settings,
  HelpCircle,
} from 'lucide-react';

export type NavView =
  | 'overview'
  | 'heatmap'
  | 'simulator'
  | 'layers'
  | 'analytics'
  | 'reports'
  | 'alerts'
  | 'settings'
  | 'about';

interface SidebarNavProps {
  activeView: NavView;
  onSelectView: (view: NavView) => void;
}

export const SidebarNav: FC<SidebarNavProps> = ({ activeView, onSelectView }) => {
  const navItems: Array<{ id: NavView; label: string; icon: any }> = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'heatmap', label: 'Heat Map', icon: Map },
    { id: 'simulator', label: 'Mitigation Simulator', icon: Sliders },
    { id: 'layers', label: 'Feature Layers', icon: Layers },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'about', label: 'About', icon: HelpCircle },
  ];

  return (
    <aside className="app-sidebar-nav">
      {/* Brand Logo & Title */}
      <div className="sidebar-brand">
        <div className="brand-logo-icon">
          <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="#0ea5e9" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="2" />
            <path d="M12 28V18L17 14L22 18V28H12Z" fill="#38bdf8" />
            <path d="M22 28V12L28 8L34 12V28H22Z" fill="#10b981" />
            <path d="M16 28V24H18V28H16Z" fill="#0b132b" />
            <path d="M26 28V22H30V28H26Z" fill="#0b132b" />
            <circle cx="20" cy="11" r="3" fill="#f59e0b" />
          </svg>
        </div>
        <div className="brand-text">
          <div className="brand-title">Urban Heat</div>
          <div className="brand-subtitle">Mitigation</div>
          <span className="brand-tag">Dashboard</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-menu">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`nav-item-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectView(item.id)}
            >
              <Icon size={18} className="nav-item-icon" />
              <span className="nav-item-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Profile Footer */}
      <div className="sidebar-user-footer">
        <div className="user-avatar-circle">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div className="user-info">
          <div className="user-name">Admin User</div>
          <div className="user-team">Team ISRO</div>
        </div>
      </div>
    </aside>
  );
};
