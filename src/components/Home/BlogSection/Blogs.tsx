import { useFetchBlogs } from '../../../hooks/useBlogQuery';
import FullPageLoading from '../../../ui/FullPageLoading';
import MainBlogCards from '../../blogSection/MainBlogCards';

const Blogs = () => {
  const { blogs: allBlogs, error, isLoading } = useFetchBlogs();

  if (isLoading) return <FullPageLoading />;

  const someBlogs = allBlogs?.slice(0, 3);

  return (
    <div className="order-2 grid grid-cols-1 gap-6 md:order-1 md:col-span-3 md:grid-cols-2 lg:grid-cols-3">
      {error ? (
        <div className="col-span-full text-center text-red-600">
          مشکل در بارگذاری مقالات
        </div>
      ) : (
        someBlogs?.map((item) => (
          <MainBlogCards
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            content={item.content}
            views={item.views}
            readTime={item.readTime}
          />
        ))
      )}
    </div>
  );
};

export default Blogs;
