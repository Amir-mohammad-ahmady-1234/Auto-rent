import { useState } from 'react';
import SearchArticle from '../components/blogSection/SearchArticle';
import { useFetchBlogs } from '../hooks/useBlogQuery';
import FullPageLoading from '../ui/FullPageLoading';
import NotBlogsFounded from '../components/blogSection/NotBlogsFounded';
import BlogList from '../components/blogSection/BlogList';
import BlogSidebar from '../components/blogSection/BlogSidebar';

export interface BlogType {
  id: string;
  title: string;
  content: string;
  readTime: number;
  readed: number;
  src: string;
  created_at?: string;
}

const Blog = () => {
  const { blogs, error, isLoading } = useFetchBlogs();

  const [search, setSearch] = useState('');
  const [isSeeAll, setIsSeeAll] = useState(false);

  if (isLoading) return <FullPageLoading />;
  if (error || !blogs?.length) return <NotBlogsFounded />;

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.includes(search.trim()) || blog.content.includes(search.trim())
  );

  const lastArticles = blogs?.slice(blogs.length - 5, blogs.length - 1);

  return (
    <div className="bg-gray-100 px-4 py-10">
      <SearchArticle search={search} setSearch={setSearch} />

      <div className="max-w-8xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <BlogList
          filteredBlogs={filteredBlogs}
          isSeeAll={isSeeAll}
          setIsSeeAll={setIsSeeAll}
          search={search}
        />

        <BlogSidebar lastArticles={lastArticles} />
      </div>
    </div>
  );
};

export default Blog;
