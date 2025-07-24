import { Link } from 'react-router-dom';
import type { BlogType } from '../../pages/Blog';

const MainBlogCards = ({
  content,
  id,
  readTime,
  views,
  src,
  title,
}: BlogType) => {
  return (
    <div className="mx-auto h-fit max-w-full overflow-hidden rounded-lg bg-white shadow-sm transition-transform duration-300 hover:scale-105 sm:max-w-md md:max-w-sm">
      <Link to={`/blogs/article/${id}`}>
        <img src={src} alt="car" className="h-48 w-full object-cover" />

        <div className="p-4 text-right">
          <h3 className="mb-2 text-lg font-bold sm:text-xl">{title}</h3>
          <p className="mb-4 text-sm text-gray-600">
            {content.slice(0, 90)}...
          </p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{readTime} دقیقه</span>
            <span>👁 {views}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainBlogCards;
