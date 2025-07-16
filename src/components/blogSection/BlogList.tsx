import type { BlogType } from '../../pages/Blog';
import MainBlogCards from './MainBlogCards';

const BlogList = ({ filteredBlogs }: { filteredBlogs: BlogType[] }) => {
  return (
    <div className="order-2 grid grid-cols-1 gap-6 md:order-1 md:col-span-3 md:grid-cols-2 lg:grid-cols-3">
      {filteredBlogs?.map((item) => (
        <MainBlogCards
          content={item.content}
          id={item.id}
          readTime={item.readTime}
          readed={item.readed}
          src={item.src}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default BlogList;
