import type { BlogType } from '../../pages/Blog';
import ContactForm from '../Contact/ContactForm';

const ArticleContent = ({ mainArticle }: { mainArticle: BlogType }) => {
  const { title, content, src, readTime, created_at } = mainArticle;

  return (
    <div className="order-2 md:order-1 md:col-span-3 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>

        <div className="flex gap-6 text-gray-500 text-sm">
          <h3>{readTime} دقیقه</h3>
          <h3>{created_at}</h3>
        </div>

        <img src={src} alt="car image" className="rounded-lg w-full object-cover" />
      </div>

      <main className="text-gray-700 leading-loose">{content}</main>

      <ContactForm />
    </div>
  );
};

export default ArticleContent;
