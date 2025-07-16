import type { BlogType } from '../../pages/Blog';

const LatestArticles = ({ id, src, title, readTime, readed }: BlogType) => {
  return (
    <div key={id} className="flex items-center gap-3">
      <img
        src={src}
        alt="article"
        className="h-16 w-16 rounded-md object-cover"
      />
      <div className="text-sm">
        <h3 className="text-sm font-bold">{title}</h3>
        <div className="mt-1 flex items-center gap-2 text-gray-500">
          <span>{readTime} دقیقه</span>
          <span>👁 {readed}</span>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
