import { useParams } from 'react-router-dom';
import { useFetchBlogs } from '../hooks/useBlogQuery';
import FullPageLoading from '../ui/FullPageLoading';
import NotBlogsFounded from '../components/blogSection/NotBlogsFounded';
import BlogSidebar from '../components/blogSection/BlogSidebar';
import ArticleContent from '../components/blogSection/ArticleContent';
import { useIncrementViews } from '../hooks/useIncrementViews';
import { useEffect } from 'react';

const ArticlePage = () => {
  const { id } = useParams();
  const { blogs, error, isLoading } = useFetchBlogs();
  const {
    error: incrementViewsError,
    isPending: loadingIncrement,
    mutate,
  } = useIncrementViews(id ?? '');

  useEffect(
    function () {
      mutate();
    },
    [mutate]
  );

  const mainArticle = blogs?.find((article) => article.id === id);
  const lastArticles = blogs?.slice(blogs.length - 5, blogs.length - 1);

  if (isLoading || loadingIncrement) return <FullPageLoading />;
  if (error || incrementViewsError) return <NotBlogsFounded />;

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
