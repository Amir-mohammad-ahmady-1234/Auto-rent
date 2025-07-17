import type { BlogType } from '../../pages/Blog';

const MainBlogCards = ({
  content,
  id,
  readTime,
  readed,
  src,
  title,
}: BlogType) => {
  return (
    <div
      key={id}
      className="h-fit overflow-hidden rounded-lg bg-white shadow-sm hover:scale-110"
    >
      <img src={src} alt="car" className="h-48 w-full object-cover" />
      <div className="p-4 text-right">
        <h3 className="mb-2 font-bold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{content.slice(0, 90)}...</p>
        <div className="-center flex justify-between text-sm text-gray-500">
          <span>{readTime} دقیقه</span>
          <span>👁 {readed}</span>
        </div>
      </div>
    </div>
  );
};

export default MainBlogCards;
