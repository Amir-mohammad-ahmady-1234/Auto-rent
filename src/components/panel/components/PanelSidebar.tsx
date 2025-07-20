import {
  FaCalendarAlt,
  FaCommentAlt,
  FaDollarSign,
  FaEdit,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaWallet,
} from 'react-icons/fa';
import NavItem from './NavItem';
import { useAuth } from '../../../context/Auth/useAuth';
import { NavLink } from 'react-router-dom';

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

          {/* Navigation */}
          <nav className="space-y-4">
            <NavLink to="walet" className="block">
              {({ isActive }) => (
                <NavItem
                  icon={<FaWallet />}
                  label="کیف پول"
                  active={isActive}
                />
              )}
            </NavLink>

            <NavLink to="my_reserved" className="block">
              {({ isActive }) => (
                <NavItem
                  icon={<FaCalendarAlt />}
                  label="رزروهای من"
                  active={isActive}
                />
              )}
            </NavLink>

            <NavLink to="my_address" className="block">
              {({ isActive }) => (
                <NavItem
                  icon={<FaMapMarkerAlt />}
                  label="آدرس‌های من"
                  active={isActive}
                />
              )}
            </NavLink>

            <NavLink to="my_payments" className="block">
              {({ isActive }) => (
                <NavItem
                  icon={<FaDollarSign />}
                  label="پرداخت‌های من"
                  active={isActive}
                />
              )}
            </NavLink>

            <NavLink to="my_comments" className="block">
              {({ isActive }) => (
                <NavItem
                  icon={<FaCommentAlt />}
                  label="نظرات من"
                  active={isActive}
                />
              )}
            </NavLink>

            <NavItem icon={<FaSignOutAlt color='red' />} label="خروج" />
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default PanelSidebar;
