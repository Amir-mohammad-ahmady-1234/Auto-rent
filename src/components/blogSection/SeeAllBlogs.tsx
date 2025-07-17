const SeeAllBlogs = ({
  setIsSeeAll,
  isSeeAll,
}: {
  setIsSeeAll: React.Dispatch<React.SetStateAction<boolean>>;
  isSeeAll: boolean;
}) => {
  return (
    <div className="mx-auto max-w-6xl text-center">
      <button
        className="cursor-pointer font-bold text-blue-600 transition hover:text-blue-800"
        onClick={() => setIsSeeAll((prev: boolean) => !prev)}
      >
        {isSeeAll ? 'مشاهده کمتر' : 'مشاهده همه'}
      </button>
    </div>
  );
};

export default SeeAllBlogs;
