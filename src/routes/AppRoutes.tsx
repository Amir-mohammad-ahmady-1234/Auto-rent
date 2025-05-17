import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Home from '../components/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
