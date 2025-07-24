import Blogs from './Blogs';
import IntroBlogSection from './IntroBlogSection';

const BlogSection = () => (
  <section className="w-full px-4 py-12 md:py-16 lg:py-20">
    <IntroBlogSection />
    <Blogs />
  </section>
);

export default BlogSection;
