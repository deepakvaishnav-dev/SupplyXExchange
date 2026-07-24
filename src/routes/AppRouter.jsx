import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Public & Landing
import Landing from '@/pages/Landing';

// Info & Footer Pages
import AboutUs from '@/pages/info/AboutUs';
import PrivacyPolicy from '@/pages/info/PrivacyPolicy';
import TermsConditions from '@/pages/info/TermsConditions';
import Careers from '@/pages/info/Careers';
import Blog from '@/pages/info/Blog';
import HelpCenter from '@/pages/info/HelpCenter';
import TrustSafety from '@/pages/info/TrustSafety';
import EscrowProtection from '@/pages/info/EscrowProtection';
import ContactUs from '@/pages/info/ContactUs';
import FAQs from '@/pages/info/FAQs';

// Auth Pages
import Login from '@/pages/auth/Login';
import RegisterBuyer from '@/pages/auth/RegisterBuyer';
import RegisterManufacturer from '@/pages/auth/RegisterManufacturer';

// Dashboard Pages
import BuyerDashboard from '@/pages/dashboard/BuyerDashboard';
import ManufacturerDashboard from '@/pages/dashboard/ManufacturerDashboard';
import AdminDashboard from '@/pages/dashboard/AdminDashboard';

// Manufacturer Pages
import SearchManufacturers from '@/pages/manufacturer/SearchManufacturers';
import ManufacturerProfile from '@/pages/manufacturer/ManufacturerProfile';
import SavedManufacturers from '@/pages/manufacturer/SavedManufacturers';
import CompanyProfile from '@/pages/manufacturer/CompanyProfile';

// Product Pages
import ProductListing from '@/pages/products/ProductListing';
import ProductDetails from '@/pages/products/ProductDetails';

// RFQ Pages
import RFQCreate from '@/pages/rfq/RFQCreate';
import RFQDetails from '@/pages/rfq/RFQDetails';
import MyInquiries from '@/pages/rfq/MyInquiries';
import QuotationCompare from '@/pages/rfq/QuotationCompare';

// Order Pages
import Orders from '@/pages/orders/Orders';
import ProductionTracking from '@/pages/orders/ProductionTracking';
import Shipments from '@/pages/orders/Shipments';
import Returns from '@/pages/orders/Returns';

// Payment Pages
import Payments from '@/pages/payments/Payments';
import PaymentMethods from '@/pages/payments/PaymentMethods';

// User / Account Pages
import Profile from '@/pages/user/Profile';
import Settings from '@/pages/user/Settings';
import Notifications from '@/pages/user/Notifications';
import Reviews from '@/pages/user/Reviews';
import Chat from '@/pages/user/Chat';
import Analytics from '@/pages/user/Analytics';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public & Info Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/trust-and-safety" element={<TrustSafety />} />
        <Route path="/escrow-protection" element={<EscrowProtection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register/buyer" element={<RegisterBuyer />} />
        <Route path="/register/manufacturer" element={<RegisterManufacturer />} />

        {/* Dashboards */}
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/manufacturer/dashboard" element={<ManufacturerDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Feature Pages */}
        <Route path="/search" element={<SearchManufacturers />} />
        <Route path="/manufacturer/:id" element={<ManufacturerProfile />} />
        <Route path="/inquiries" element={<MyInquiries />} />
        <Route path="/rfq/create" element={<RFQCreate />} />
        <Route path="/rfq/:id" element={<RFQDetails />} />
        <Route path="/rfq/:id/compare" element={<QuotationCompare />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id/tracking" element={<ProductionTracking />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/saved" element={<SavedManufacturers />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/messages" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/analytics" element={<Analytics />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

