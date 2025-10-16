import "./App.css";
import Navbar from "./components/navbar.jsx";
import Landingimg from "./components/Landingimg.jsx";
import Policies from "../src/components/policies.jsx";
import Category from "../src/components/category.jsx";
import Hotselling from "../src/components/hotselling.jsx";
import Footer from "../src/components/footer.jsx";
import Forgotpass from "../src/pages/forgotpass.jsx";
import Register from "../src/pages/register.jsx";
import Contact from "../src/components/contact.jsx";
import Checkout from "../src/pages/checkout.jsx";
import Wishlist from "../src/pages/wishlist.jsx";
import Login from "../src/pages/login.jsx";
import Cart from "../src/pages/cart.jsx";

import Smartphones from "../src/Catpages/smartphones.jsx";
import Laptop from "../src/Catpages/laptop.jsx";
import Swatch from "../src/Catpages/swatch.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Routes for dynamic content */}
      <Routes>
        {/* Home page when landed the landing page */}
        <Route
          path="/"
          element={
            <>
              <button
                className="top-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Go Top &#8679;
              </button>
              <Landingimg />
              <Policies />
              <div id="category">
                <Category />
              </div>
              <div id="onsale">
                <Hotselling />
              </div>
            </>
          }
        />

        {/* Other pages for navigating */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/hotselling" element={<Hotselling />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/swatch" element={<Swatch />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
