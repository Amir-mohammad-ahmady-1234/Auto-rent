import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import FAQ from '../pages/FAQ';
import ContactPage from '../pages/ContactPage';
import AppLayout from '../layouts/appLayout/AppLayout';
import BannerLayout from '../layouts/pagesBannerLayout/BannerLayout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route element={<BannerLayout />}>
            <Route path="faq" element={<FAQ />} />
            <Route path="concat" element={<ContactPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
