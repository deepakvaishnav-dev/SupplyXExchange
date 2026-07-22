import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import RegisterBuyer from './pages/RegisterBuyer';
import RegisterManufacturer from './pages/RegisterManufacturer';
import BuyerDashboard from './pages/BuyerDashboard';
import ManufacturerDashboard from './pages/ManufacturerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import SearchManufacturers from './pages/SearchManufacturers';
import ManufacturerProfile from './pages/ManufacturerProfile';
import RFQCreate from './pages/RFQCreate';
import RFQDetails from './pages/RFQDetails';
import QuotationCompare from './pages/QuotationCompare';
import Chat from './pages/Chat';
import Orders from './pages/Orders';
import ProductionTracking from './pages/ProductionTracking';
import Reviews from './pages/Reviews';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/buyer" element={<RegisterBuyer />} />
        <Route path="/register/manufacturer" element={<RegisterManufacturer />} />

        {/* Buyer */}
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />

        {/* Manufacturer */}
        <Route path="/manufacturer/dashboard" element={<ManufacturerDashboard />} />
        <Route path="/manufacturer/:id" element={<ManufacturerProfile />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Shared authenticated */}
        <Route path="/search" element={<SearchManufacturers />} />
        <Route path="/rfq/create" element={<RFQCreate />} />
        <Route path="/rfq/:id" element={<RFQDetails />} />
        <Route path="/rfq/:id/compare" element={<QuotationCompare />} />
        <Route path="/messages" element={<Chat />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id/tracking" element={<ProductionTracking />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analytics" element={<Analytics />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
