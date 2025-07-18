import type { BlogType } from '../../pages/Blog';
import MainBlogCards from './MainBlogCards';
import SeeAllBlogs from './SeeAllBlogs';

const BlogList = ({
  filteredBlogs,
  isSeeAll,
  setIsSeeAll,
  search,
}: {
  filteredBlogs: BlogType[];
  isSeeAll: boolean;
  setIsSeeAll: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
}) => {
  const blogs = isSeeAll ? filteredBlogs : filteredBlogs.slice(0, 3);

  return (
    <div className="order-2 grid grid-cols-1 gap-6 md:order-1 md:col-span-3 md:grid-cols-2 lg:grid-cols-3">
      {blogs?.map((item) => (
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
      {!search.trim() && (
        <SeeAllBlogs setIsSeeAll={setIsSeeAll} isSeeAll={isSeeAll} />
      )}
    </div>
  );
};

export default BlogList;
