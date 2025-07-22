import React, { useEffect, useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import PanelHeader from '../components/panel/components/PanelHeader';
import PanelSidebar from '../components/panel/components/PanelSidebar';
import { useAuth } from '../context/Auth/useAuth';
import toast from 'react-hot-toast';

const UserPanel: React.FC = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { phone } = useAuth();

  useEffect(() => {
    if (!phone) {
      toast.error('ابتدا وارد حساب خود شوید.');
      navigate('/login');
    }
  }, [phone, navigate]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 md:flex-row">
      <PanelHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <PanelSidebar sidebarOpen={sidebarOpen} />

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
