import { useFetchBlogs } from '../../../hooks/useBlogQuery';
import FullPageLoading from '../../../ui/FullPageLoading';
import MainBlogCards from '../../blogSection/MainBlogCards';

const Blogs = () => {
  const { blogs: allBlogs, error, isLoading } = useFetchBlogs();

  if (isLoading) return <FullPageLoading />;

  const someBlogs = allBlogs?.slice(0, 3);

  return (
    <div className="order-2 grid grid-cols-1 gap-6 md:order-1 md:col-span-3 md:grid-cols-2 lg:grid-cols-3">
      {!error &&
        someBlogs?.map((item) => (
          <MainBlogCards
            content={item.content}
            id={item.id}
            readTime={item.readTime}
            views={item.views}
            src={item.src}
            title={item.title}
            key={item.id}
          />
        ))}
      {error && <h1 className="">مشکل در بارگذازی مقالات</h1>}
    </div>
  );
};

export default Blogs;
