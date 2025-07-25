interface SearchArticlePropType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchArticle = ({ search, setSearch }: SearchArticlePropType) => {
  return (
    <div className="mx-auto mb-10 max-w-6xl">
      <input
        value={search}
        type="text"
        placeholder="جستجو در سایت اجاره خودرو اتورنت"
        className="w-full rounded-lg border p-3 text-right focus:ring focus:ring-yellow-400 focus:outline-none"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchArticle;
