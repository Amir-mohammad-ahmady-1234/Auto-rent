const HeaderCarsFilter = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-4 p-4">
      <input type="text" value="مرتب سازی" readOnly className="min-w-[150px]" />
      <input
        type="text"
        value="تقویم قیمتی"
        readOnly
        className="min-w-[150px]"
      />
    </section>
  );
};

export default HeaderCarsFilter;
