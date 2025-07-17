import type { BlogType } from '../../pages/Blog';
import BlogTags from './BlogTags';
import LatestArticles from './LatestArticles';

const BlogSidebar = ({ lastArticles }: { lastArticles: BlogType[] }) => {
  return (
    <div className="order-1 space-y-6 md:order-2 md:col-span-1">
      <div className="rounded-lg bg-white p-4">
        <h2 className="mb-4 inline-block border-b-4 border-yellow-400 text-xl font-bold">
          آخرین مقالات
        </h2>
        <div className="space-y-4">
          {lastArticles?.map((item) => (
            <LatestArticles 
              content={item.content}
              id={item.id}
              readTime={item.readTime}
              readed={item.readed}
              src={item.src}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <BlogTags />
    </div>
  );
};

export default BlogSidebar;
