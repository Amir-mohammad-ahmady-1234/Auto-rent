import React, { useEffect } from 'react';
import { scrollToTop } from '../utils/ScrollToTop';

const ContactPage: React.FC = () => {
  useEffect(function () {
    scrollToTop();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Contact form and other content can be added here */}
      <div className="container mx-auto my-12 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">اطلاعات تماس</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium">آدرس:</span>
                <span>تهران، خیابان ولیعصر، پلاک 123</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium">تلفن:</span>
                <span>021-12345678</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium">ایمیل:</span>
                <span>info@autorent.com</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">فرم تماس</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium"
                >
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium"
                >
                  پیام
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 p-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-[#FDB713] px-4 py-2 font-medium text-white transition hover:bg-[#e9a912]"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
