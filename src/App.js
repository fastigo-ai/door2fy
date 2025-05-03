import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import LaptopSupport from "./pages/Services/LaptopSupport/LaptopSupport";
import MacbookSupport from "./pages/Services/MacbookSupport/MacbookSupport";
import DesktopSupport from "./pages/Services/DesktopSupport/DesktopSupport";
import CodingSupport from "./pages/Services/CodingSupport/CodingSupport";
import PrinterSupport from "./pages/Services/PrinterSupport/PrinterSupport";
import ServiceSupport from "./pages/Services/ServiceSupport/ServiceSupport";
import ItemPage from "./pages/ItemPage/ItemPage";
import { CartProvider } from "./contexts/CartContext";
import { LocationProvider } from "./contexts/LocationContext";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import UpgradeSupport from "./pages/Services/UpgradeSupport/UpgradeSupport";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./pages/AboutUs/AboutUs";
import TermsOfUse from "./pages/TermOfUse/TermOfUse";
import ContactUs from "./pages/ContactUs/ContactUs";
import AntiDiscriminationPolicy from "./pages/AntiDiscrimationPolicy/AntiDiscrimationPolicy";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
import Blog from "./pages/Blog/Blog";
import ComingSoonPage from "./pages/ComingSoon/ComingSoon";
function App() {
  return (
    <div className="App">
      <CartProvider>
      <LocationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/laptop-support" element={<LaptopSupport/>} />
          <Route path="/macbook-support" element={<MacbookSupport/>} />
          <Route path="/desktop-support" element={<DesktopSupport/>} />          
          <Route path="/coding-support" element={<CodingSupport/>} />          
          <Route path="/printer-support" element={<PrinterSupport/>} />          
          <Route path="/service-support" element={<ServiceSupport/>} />          
          <Route path="/upgrade-support" element={<UpgradeSupport/>} />          
          <Route path="/itemPage/:itemName" element={<ItemPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/terms-of-use" element={<TermsOfUse/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/anti-discrimation-policy" element={<AntiDiscriminationPolicy/>} />
          <Route path="/refund-policy" element={<RefundPolicy/>} />
          <Route path="/ComingSoon" element={<ComingSoonPage/>} />

        </Routes>
      </Router>
      
      </LocationProvider>
      </CartProvider>
    </div>
  );
}

export default App;
