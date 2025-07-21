import React from 'react';
import toast from 'react-hot-toast';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = React.useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      toast.error('لطفا نام خود را وارد نمایید');
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">ویرایش نام</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
            >
              بستن
            </button>
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
