import React, { useState } from 'react';
import { IoClose, IoMail } from 'react-icons/io5';

const ContactForm = () => {
  const [message, setMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const maxMessageLength = 200;
  const clear = (setter: React.Dispatch<React.SetStateAction<string>>) => () =>
    setter('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxMessageLength) {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setFullName('');
    setPhoneNumber('');
    setUserEmail('');
  };

  return (
    <div className="font-iransans bg-white px-4 py-8 text-right sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-iranyekan mb-6 text-2xl font-medium text-gray-900">
          ارسال پیام شما به مجموعه اتورنت
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 lg:flex-row-reverse"
        >
          {/* متن پیام */}
          <div className="order-2 flex-1 lg:order-1">
            <textarea
              required
              value={message}
              onChange={handleMessageChange}
              placeholder="متن پیام شما..."
              className="font-iransans h-48 w-full resize-none rounded-xl border border-gray-200 p-4 text-right placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none"
            />
            <div className="font-iransans mt-2 text-left text-sm text-gray-500">
              {message.length} / {maxMessageLength}
            </div>
            <button
              type="submit"
              className="font-iranyekan mt-4 w-full rounded-xl bg-blue-600 py-3 text-white shadow-md transition-shadow hover:bg-blue-700"
            >
              ارسال
            </button>
          </div>

          {/* فیلدهای اطلاعات */}
          <div className="order-1 w-full space-y-6 lg:order-2 lg:w-1/3">
            {/* نام و نام خانوادگی */}
            <div className="relative">
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="نام شما"
                className="font-iransans h-14 w-full rounded-xl border border-gray-200 px-4 pt-6 pb-2 text-right text-gray-700 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:outline-none"
                required
              />
              <label
                htmlFor="fullName"
                className="font-iransans absolute top-2 right-4 text-sm text-gray-400"
              >
                نام و نام خانوادگی
              </label>
              {fullName && (
                <IoClose
                  className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={clear(setFullName)}
                />
              )}
            </div>

            {/* پست الکترونیکی */}
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder={userEmail}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="font-iransans h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pt-6 pb-2 text-right text-gray-700 placeholder-gray-500 shadow-sm"
                required
              />
              <label
                htmlFor="email"
                className="font-iransans absolute top-2 right-4 text-sm text-gray-400"
              >
                پست الکترونیکی
              </label>
              <IoMail className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            </div>

            {/* شماره تماس */}
            <div className="relative">
              <input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="شماره شما"
                className="font-iransans h-14 w-full rounded-xl border border-gray-200 px-4 pt-6 pb-2 text-right text-gray-700 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:outline-none"
                required
              />
              <label
                htmlFor="phone"
                className="font-iransans absolute top-2 right-4 text-sm text-gray-400"
              >
                شماره تماس
              </label>
              {phoneNumber && (
                <IoClose
                  className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={clear(setPhoneNumber)}
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
