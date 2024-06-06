import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ShopPage from './pages/ShopPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;