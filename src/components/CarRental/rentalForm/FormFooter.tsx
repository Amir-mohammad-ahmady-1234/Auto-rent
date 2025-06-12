const FormFooter = () => {
  return (
    <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-700">
      <p className="flex items-center gap-2">
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        پس از ثبت درخواست، کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت
      </p>
    </div>
  );
};

export default FormFooter;
