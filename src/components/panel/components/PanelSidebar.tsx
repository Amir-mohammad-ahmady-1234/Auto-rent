import { FaEdit } from 'react-icons/fa';

import { useAuth } from '../../../context/Auth/useAuth';

import Navigations from './Navigations';

const PanelSidebar = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  const { phone } = useAuth();

  return (
    <aside
      className={`fixed inset-y-0 right-0 z-30 w-64 transform bg-white p-6 shadow transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      } md:static md:translate-x-0 md:shadow-none`}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          {/* User Info */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${phone}`}
                alt="User Avatar"
                className="h-10 w-10 rounded-full"
              />

              <div className="mr-3">
                <p className="font-semibold">اولدور بهارور</p>
                <p className="text-sm text-gray-500">0912 345 6789</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <FaEdit />
            </button>
          </div>

          <Navigations />
        </div>
      </div>
    </aside>
  );
};

export default PanelSidebar;
