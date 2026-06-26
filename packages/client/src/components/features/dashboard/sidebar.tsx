import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboardIcon,
  FlaskConicalIcon,
  LayersIcon,
  FileTextIcon,
  BookOpenIcon,
  FolderIcon,
  MailIcon,
  BriefcaseIcon,
  ImageIcon,
  UsersIcon,
  SettingsIcon,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import useAuthStore from '../../../store/auth';

interface NavItem {
  label: string;
  icon: LucideIcon;
  path: string;
}

const mainNav: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboardIcon, path: '/admin/dashboard' },
  { label: 'Chemical Management', icon: FlaskConicalIcon, path: '/admin/dashboard/chemicals' },
  { label: 'Solutions Management', icon: LayersIcon, path: '/admin/dashboard/solutions' },
  { label: 'Blog Articles', icon: FileTextIcon, path: '/admin/dashboard/blog' },
  { label: 'Knowledge Centre', icon: BookOpenIcon, path: '/admin/dashboard/knowledge' },
  { label: 'Product Brochures', icon: FolderIcon, path: '/admin/dashboard/brochures' },
  { label: 'Enquiries', icon: MailIcon, path: '/admin/dashboard/enquiries' },
  { label: 'Careers', icon: BriefcaseIcon, path: '/admin/dashboard/careers' },
];

const systemNav: NavItem[] = [
  { label: 'Media Library', icon: ImageIcon, path: '/admin/dashboard/media' },
  { label: 'Users & Roles', icon: UsersIcon, path: '/admin/dashboard/users' },
  { label: 'Settings', icon: SettingsIcon, path: '/admin/dashboard/settings' },
];

const SidebarLink: React.FC<NavItem> = ({ label, icon: Icon, path }) => (
  <NavLink
    to={path}
    end={path === '/admin/dashboard'}
    className={({ isActive }) =>
      cn(
        'flex items-center gap-3 px-4 py-3 rounded-[4px] text-[16px] tracking-[0.0625px] transition-colors',
        isActive ? 'bg-secondary text-white' : 'text-muted hover:text-white hover:bg-white/5'
      )
    }
  >
    <Icon size={16} className="shrink-0" />
    <span>{label}</span>
  </NavLink>
);

const Sidebar: React.FC = () => {
  const { auth, logout } = useAuthStore();

  return (
    <aside className="bg-accent flex flex-col h-full text-left">
      <div className="px-4.5 py-8 shrink-0">
        <img src="/general/logo-alternate.svg" alt="Eunisell" className="h-13.5 w-auto" />
      </div>

      <nav className="flex-1 min-h-0 flex flex-col gap-1 px-4 overflow-y-auto pb-4">
        {mainNav.map((item) => (
          <SidebarLink key={item.path} {...item} />
        ))}

        <p className="text-[11px] uppercase tracking-[1px] text-muted/60 font-semibold px-4 mt-6 mb-1">System</p>

        {systemNav.map((item) => (
          <SidebarLink key={item.path} {...item} />
        ))}
      </nav>

      <div className="px-4 py-6 border-t border-white/10 shrink-0">
        <button onClick={logout} className="flex items-center gap-3 w-full text-left group">
          <div className="size-9 rounded-full bg-secondary flex items-center justify-center text-white text-[13px] font-semibold shrink-0">
            {auth?.user.firstName?.[0]}
            {auth?.user.lastName?.[0]}
          </div>

          <div className="min-w-0">
            <p className="text-white text-[14px] leading-5 truncate">
              {auth?.user.firstName} {auth?.user.lastName}
            </p>

            <p className="text-muted text-[12px] leading-4">Super User</p>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
