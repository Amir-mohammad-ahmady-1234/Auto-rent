import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import FAQ from '../pages/FAQ';
import ContactPage from '../pages/ContactPage';
import AppLayout from '../layouts/appLayout/AppLayout';
import BannerLayout from '../layouts/pagesBannerLayout/BannerLayout';
import AboutUs from '../pages/AboutUs';
import BrowseCarsPage from '../pages/BrowseCarsPage';
import { ScrollToToPage } from '../utils/ScrollToTopPage';
import CarsProvider from '../context/cars/CarsProvider';
import FilterInputProvider from '../context/filtersInputContext/FilterInputProvider';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToToPage />
      <CarsProvider>
        <FilterInputProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />

              <Route element={<BannerLayout />}>
                {/* Non-functional Page  */}
                <Route path="faq" element={<FAQ />} />
                <Route path="concat" element={<ContactPage />} />
                <Route path="about" element={<AboutUs />} />
                {/* Dynamic Page */}
                <Route path="cars" element={<BrowseCarsPage />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </FilterInputProvider>
      </CarsProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
