import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <div
    className={`flex cursor-pointer items-center text-sm ${active ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
  >
    {icon}
    <span className="mr-3">{label}</span>
  </div>
);

export default NavItem;
