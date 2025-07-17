import { useParams } from 'react-router-dom';
import { useFetchBlogs } from '../hooks/useBlogQuery';
import FullPageLoading from '../ui/FullPageLoading';
import NotBlogsFounded from '../components/blogSection/NotBlogsFounded';
import BlogSidebar from '../components/blogSection/BlogSidebar';
import ArticleContent from '../components/blogSection/ArticleContent';

const ArticlePage = () => {
  const { id } = useParams();
  const { blogs, error, isLoading } = useFetchBlogs();

  const mainArticle = blogs?.find((article) => article.id === id);
  const lastArticles = blogs?.slice(blogs.length - 5, blogs.length - 1);

  if (isLoading) return <FullPageLoading />;
  if (error) return <NotBlogsFounded />;

  return (
    <div className="bg-gray-100 px-4 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
        <BlogSidebar lastArticles={lastArticles ?? []} />

        <ArticleContent mainArticle={mainArticle} />
      </div>
    </div>
  );
};

export default ArticlePage;
