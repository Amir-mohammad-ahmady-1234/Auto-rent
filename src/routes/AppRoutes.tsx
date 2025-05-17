import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
