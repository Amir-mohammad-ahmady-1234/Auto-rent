import type { BlogType } from '../../pages/Blog';
import { convertDateToPersian } from '../../utils/converDateToPersian';
import ContactForm from '../Contact/ContactForm';

const ArticleContent = ({ mainArticle }: { mainArticle: BlogType }) => {
  const { title, content, src, readTime, created_at } = mainArticle;

  const createdDate = new Date(created_at ?? '');

  return (
    <div className="order-2 flex flex-col gap-8 md:order-1 md:col-span-3">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>

        <div className="flex gap-6 text-sm text-gray-500">
          <h3>{readTime} دقیقه</h3>
          <h3>{convertDateToPersian(createdDate)}</h3>
        </div>

        <img
          src={src}
          alt="car image"
          className="w-full rounded-lg object-cover"
        />
      </div>

      <main className="text-justify leading-loose text-gray-700">
        {content}
      </main>

      <ContactForm />
    </div>
  );
};

export default ArticleContent;
