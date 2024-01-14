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
        <Route path="cart" element={<Cart />}/>
        <Route path="checkout" element={<Checkout />}/>
        <Route path="compare-products" element={<CompareProd />}/>
        <Route path="wishlist" element={<Wishlist />}/>
        <Route path="login" element={<LoginPage />}/>
        <Route path="forgot-password" element={<ForgotPassword />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="reset-password" element={<ResetPassword />}/>
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
