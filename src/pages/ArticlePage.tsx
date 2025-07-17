import { useParams } from 'react-router-dom';
import { useFetchBlogs } from '../hooks/useBlogQuery';
import FullPageLoading from '../ui/FullPageLoading';
import NotBlogsFounded from '../components/blogSection/NotBlogsFounded';

const ArticlePage = () => {
  const { id } = useParams();
  const { blogs, error, isLoading } = useFetchBlogs();

  const mainArticle = blogs?.find((article) => article.id === id);

  if (isLoading) return <FullPageLoading />;
  if (error) return <NotBlogsFounded />;

  return <div>{mainArticle.title}</div>;
};

export default ArticlePage;
