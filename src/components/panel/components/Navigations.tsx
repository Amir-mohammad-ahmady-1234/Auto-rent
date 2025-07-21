import { Link, NavLink } from 'react-router-dom';

import {
  FaCalendarAlt,
  FaCommentAlt,
  FaDollarSign,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaWallet,
} from 'react-icons/fa';

import NavItem from './NavItem';

const Navigations = () => {
  return (
    <nav className="space-y-4">
      <NavLink to="walet" className="block">
        {({ isActive }) => (
          <NavItem icon={<FaWallet />} label="کیف پول" active={isActive} />
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
          <NavItem icon={<FaCommentAlt />} label="نظرات من" active={isActive} />
        )}
      </NavLink>

      <Link to="/">
        <NavItem icon={<FaSignOutAlt color="red" />} label="خروج" />
      </Link>
    </nav>
  );
};

export default Navigations;
