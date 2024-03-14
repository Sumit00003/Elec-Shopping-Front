import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Ourstore from './pages/Ourstore';
import Blog from './pages/Blog';
import CompareProd from './pages/CompareProd';
import Wishlist from './pages/wishlist';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsConditions from './pages/TermsConditions';
//import ProductCart from './components/ProductCart';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { PrivateRoutes } from './routing/privaterouting';
import { OpenRoutes } from './routing/openroute';
import Orders from './pages/Orders';
import Profile from './pages/Profile';



function App() {
  return( <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="product" element={<Ourstore />}/>
        <Route path="product/:id" element={<SingleProduct />}/>
        <Route path="blogs" element={<Blog />}/>
        <Route path="blog/:id" element={<SingleBlog />}/>
        <Route path="cart" element={<PrivateRoutes><Cart /></PrivateRoutes>}/>
        <Route path="my-orders" element={<PrivateRoutes><Orders /></PrivateRoutes>}/>
        <Route path="my-profile" element={<PrivateRoutes><Profile /></PrivateRoutes>}/>
        <Route path="checkout" element={<PrivateRoutes><Checkout /></PrivateRoutes>}/>
        <Route path="compare-products" element={<CompareProd />}/>
        <Route path="wishlist" element={<PrivateRoutes><Wishlist /></PrivateRoutes>}/>
        <Route path="login" element={<LoginPage />}/>
        <Route path="forgot-password" element={<ForgotPassword />}/>
        <Route path="sign-up" element={<OpenRoutes><Signup /></OpenRoutes>}/>
        <Route path="reset-password/:token" element={<ResetPassword />}/>
        <Route path="privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="refund-policy" element={<RefundPolicy />}/>
        <Route path="shipping-policy" element={<ShippingPolicy />}/>
        <Route path="term-and-condition" element={<TermsConditions />}/>
        








      </Route>


    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
