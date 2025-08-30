import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import PageNotFound from "./pages/pagenotfound/PageNotFound"
import Home from "./pages/home/Home"
import Navbar from "./components/commonComponents/navbar/Navbar"
import Footer from "./components/commonComponents/footer/Footer"
import ContactUs from "./pages/contactus/ContactUs"
import Homepage_PropertyDetails from "./components/homepage_components/homepage_Propertydetails/Homepage_PropertyDetails"
import About from "./pages/about/About"
import ScrollToTop from "./ScrollTop"
import Homepage_LocationDetails from "./components/homepage_components/homepage_locationsdetails/Homepage_LocationDetails"
import TermsAndConditions from "./components/termsAndConditions/TermsAndConditions"
import PrivacyPolicy from "./pages/t&c/PrivacyPolicy"
import CancellationPolicy from "./pages/t&c/CancellationPolicy"
import ShippingAndDeliveryPolicy from "./pages/t&c/ShippingAndDeliveryPolicy"
import TermsAndConditionsPolicy from "./pages/t&c/TermsAndConditionsPolicy"
import EssentialsPage from "./pages/essentials/EssentialsPage"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={'/contact'} element={<ContactUs />} />
          <Route path={'/property_details/:id'} element={<Homepage_PropertyDetails />} />
          <Route path={"/terms-and-conditions"} element={<TermsAndConditions />} />
          <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
          <Route path={"/cancellation-policy"}element={<CancellationPolicy />} />
          <Route path={"/shipping-and-delivery-policy"} element={<ShippingAndDeliveryPolicy />} />
          <Route path={"/terms-and-conditions-policy"} element={<TermsAndConditionsPolicy />} />
          <Route path={'/property_LocationDetails/:id'} element={<Homepage_LocationDetails />} />
          <Route path="/essentials/:city/:type" element={<EssentialsPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App