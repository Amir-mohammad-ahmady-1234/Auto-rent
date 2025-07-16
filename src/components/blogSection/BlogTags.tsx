const BlogTags = () => {
  return (
    <div className="rounded-lg bg-white p-4">
      <h2 className="mb-4 inline-block border-b-4 border-yellow-400 text-xl font-bold">
        برچسب‌ها
      </h2>
      <div className="flex flex-wrap gap-2">
        {['اجاره خودرو', 'مرسدس بنز', 'ون', 'بدون راننده'].map((tag) => (
          <span
            key={tag}
            className="cursor-pointer rounded-full bg-gray-200 px-3 py-1 text-sm transition hover:bg-yellow-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogTags;
