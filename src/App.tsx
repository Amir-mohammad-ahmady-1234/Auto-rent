import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div dir="rtl">
      <AppRoutes />
      <ScrollToTop />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: 'IRANYekan, sans-serif',
            fontSize: '14px',
          },
        }}
      />
    </div>
  );
}

export default App;
