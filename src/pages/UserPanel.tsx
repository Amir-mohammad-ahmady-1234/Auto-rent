import React, { useState } from 'react';
import {
  FaUserCircle,
  FaWallet,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDollarSign,
  FaCommentAlt,
  FaSignOutAlt,
  FaEdit,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import NavItem from '../components/panel/components/NavItem';
import { Outlet } from 'react-router-dom';

const UserPanel: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 md:flex-row">
      {/* Mobile header */}
      <header className="flex w-full items-center justify-between bg-white p-4 shadow md:hidden">
        <h1 className="text-lg font-semibold">پنل کاربری</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-xl text-gray-600"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white p-6 shadow transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 md:shadow-none`}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            {/* User Info */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <FaUserCircle className="text-4xl text-gray-400" />
                <div className="mr-3">
                  <p className="font-semibold">اولدور بهارور</p>
                  <p className="text-sm text-gray-500">0912 345 6789</p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <FaEdit />
              </button>
            </div>

            {/* Navigation */}
            <nav className="space-y-4">
              <NavItem icon={<FaWallet />} label="کیف پول" active />
              <NavItem icon={<FaCalendarAlt />} label="رزروهای من" />
              <NavItem icon={<FaMapMarkerAlt />} label="آدرس‌های من" />
              <NavItem icon={<FaDollarSign />} label="پرداخت‌های من" />
              <NavItem icon={<FaCommentAlt />} label="نظرات من" />
              <NavItem icon={<FaSignOutAlt />} label="خروج" />
            </nav>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default UserPanel;
