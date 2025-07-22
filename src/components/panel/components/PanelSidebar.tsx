import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';

import { useAuth } from '../../../context/Auth/useAuth';

import Navigations from './Navigations';
import Modal from './Modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { changeUserName } from '../../../services/apiChangeName';
import FullPageLoading from '../../../ui/FullPageLoading';

const PanelSidebar = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  const { phone } = useAuth();
  const name = localStorage.getItem('name');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const queryClient = useQueryClient();

  const { mutateAsync, error, isPending } = useMutation({
    mutationFn: changeUserName,
    mutationKey: ['users', phone],
    onSuccess: () => {
      toast.success('نام کاربری شما با موفقیت تغییر یافت.');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  if (isPending) return <FullPageLoading />;

  if (!phone) return;

  const handleSubmit = async (newName: string) => {
    await mutateAsync({ newName, phone });
    localStorage.setItem('name', newName);
    handleCloseModal();
  };

  if (error) {
    toast.error('شما افلاین هستید. اتصال خود رو برسی کرده و دوباره تلاش کنید.');
  }

  return (
    <>
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
                  <p className="font-semibold">{name ? name : 'بدون نام'}</p>
                  <p className="text-sm text-gray-500">{phone}</p>
                </div>
              </div>
              <button
                onClick={handleOpenModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaEdit />
              </button>
            </div>

            <Navigations />
          </div>
        </div>
      </aside>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default PanelSidebar;