const LoginLevelOne = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-4 rounded-3xl border">
      <div className="flex flex-col gap-2">
        <label htmlFor="phone">شماره تلفن خود را وارد نمایید</label>
        <input id="phone" type="number" />
      </div>
      <button className="flex items-center justify-center bg-blue-500 p-3">
        ارسال کد
      </button>
    </div>
  );
};

export default LoginLevelOne;
