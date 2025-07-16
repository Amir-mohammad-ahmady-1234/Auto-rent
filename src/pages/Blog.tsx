import { useEffect, useState } from 'react';
import SearchArticle from '../components/blogSection/SearchArticle';
import MainBlogCards from '../components/blogSection/MainBlogCards';
import LatestArticles from '../components/blogSection/LatestArticles';
import BlogTags from '../components/blogSection/BlogTags';
import SeeAllBlogs from '../components/blogSection/SeeAllBlogs';
import { useFetchBlogs } from '../hooks/useBlogQuery';
import FullPageLoading from '../ui/FullPageLoading';
import NotBlogsFounded from '../components/blogSection/NotBlogsFounded';

export interface BlogType {
  id: string;
  title: string;
  content: string;
  readTime: number;
  readed: number;
  src: string;
}

const Blog = () => {
  const { blogs, error, isLoading } = useFetchBlogs();

  const [filteredSearch, setFilteredSearch] = useState<BlogType[] | []>([]);
  const [search, setSearch] = useState('');

  useEffect(
    function () {
      setFilteredSearch(blogs ?? []);
      console.log(blogs);
    },
    [blogs]
  );

  const lastArticles = blogs?.slice(blogs.length - 5, blogs.length - 1);

  function handleSearch(searchText: string) {
    const filteredContent = blogs?.filter((blog) => {
      return (
        blog.title.includes(searchText) || blog.content.includes(searchText)
      );
    });

    setFilteredSearch(filteredContent ?? []);
  }

  if (isLoading) return <FullPageLoading />;

  if (error || !blogs?.length) return <NotBlogsFounded />;

  return (
    <div className="bg-gray-100 px-4 py-10">
      <SearchArticle
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <div className="max-w-8xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="order-2 grid grid-cols-1 gap-6 md:order-1 md:col-span-3 md:grid-cols-2 lg:grid-cols-3">
          {filteredSearch?.map((item) => (
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

        {/* Sidebar - Latest Articles */}
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

          {/* Tags */}
          <BlogTags />
        </div>
      </div>

      {/* View All */}
      <SeeAllBlogs />
    </div>
  );
};

export default Blog;
