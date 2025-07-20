import { FaBars, FaTimes } from 'react-icons/fa';

interface SideBarTypes {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpen: boolean;
}

const PanelHeader = ({ setSidebarOpen, sidebarOpen }: SideBarTypes) => {
  return (
    <header className="flex w-full items-center justify-between bg-gradient-to-r from-blue-600 to-blue-500 p-4 shadow md:hidden">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="text-2xl text-white transition hover:scale-110 active:scale-95"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <h1 className="text-lg font-bold tracking-wide text-white">پنل کاربری</h1>
      <div className="w-8" /> {/* فضای خالی برای balance layout */}
    </header>
  );
};

export default PanelHeader;
