import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppLayout from '../layouts/appLayout/AppLayout';
import BannerLayout from '../layouts/pagesBannerLayout/BannerLayout';
import { ScrollToToPage } from '../utils/ScrollToTopPage';
import CarsProvider from '../context/cars/CarsProvider';
import FilterInputProvider from '../context/filtersInputContext/FilterInputProvider';
import { AuthProvider } from '../context/Auth/AuthProvider';
import { ReserveProvider } from '../context/carReservedData/ReservedProvider';
import { StepProvider } from '../context/handleReserveSteps/StepProvider';
import UserReservedInfoProvider from '../context/userReservedData/UserReservedInfoProvider';
import DepositPricePrivider from '../context/price deposit/DepositPricePrivider';
import FullPageLoading from '../ui/FullPageLoading';
import Blog from '../pages/Blog';

// Lazy load صفحات
const Home = lazy(() => import('../pages/Home'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const FAQ = lazy(() => import('../pages/FAQ'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const BrowseCarsPage = lazy(() => import('../pages/BrowseCarsPage'));
const SelectCarInfo = lazy(() => import('../pages/SelectCarInfo'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SelectUserInfo = lazy(() => import('../pages/SelectUserInfo'));
const Payment = lazy(() => import('../pages/Payment'));
const OrderDetails = lazy(() => import('../pages/OrderDetails'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToToPage />
      <AuthProvider>
        <StepProvider>
          <ReserveProvider>
            <UserReservedInfoProvider>
              <CarsProvider>
                <FilterInputProvider>
                  <DepositPricePrivider>
                    <Suspense fallback={<FullPageLoading />}>
                      <Routes>
                        <Route path="/" element={<AppLayout />}>
                          <Route index element={<Home />} />
                          <Route element={<BannerLayout />}>
                            {/* Non-functional Pages  */}
                            <Route path="faq" element={<FAQ />} />
                            <Route path="concat" element={<ContactPage />} />
                            <Route path="about" element={<AboutUs />} />

                            {/* Dynamic Pages */}
                            <Route path="rent">
                              <Route
                                index
                                element={<Navigate to="cars" replace />}
                              />
                              <Route path="cars" element={<BrowseCarsPage />} />
                              <Route
                                path="chose_car_info/:brand"
                                element={<SelectCarInfo />}
                              />
                              <Route
                                path="select_user_info"
                                element={<SelectUserInfo />}
                              />
                              <Route path="payment" element={<Payment />} />
                              <Route
                                path="order-details"
                                element={<OrderDetails />}
                              />
                            </Route>

                            <Route path="Blog" element={<Blog />} />
                          </Route>
                        </Route>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </Suspense>
                  </DepositPricePrivider>
                </FilterInputProvider>
              </CarsProvider>
            </UserReservedInfoProvider>
          </ReserveProvider>
        </StepProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
