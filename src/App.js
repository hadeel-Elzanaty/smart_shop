
import './App.css';
import Home from './pages/home';

import { Route, Routes } from 'react-router-dom';
import Prods from './pages/prods';
import Services from './pages/services'
import AboutUs from './pages/about-us'
import Conditions from './pages/coditions'
import Blog from './pages/blog'
import Cart from './pages/cart';
import ContactUs from './pages/contact-us'
import SingleProduct from './components/shared/singleProduct/singleProduct';
import Prod from './pages/prod';
import Search from './components/shared/search/search';
import Signup from './pages/signup';
import Login from './pages/login';
import LogOut from './pages/logout';
import Signout from './pages/signout';
import Visitor from './components/shared/visitor/visitor';
import NotFound from './components/notfound/notfound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/visitor" element={<Visitor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/services" element={<Services />} />
        <Route path="/prods" element={<Prods />} >
        <Route path="search" element={<Prods />} />
        </Route>
        <Route path="/prods/:id" element={<Prod />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>

    </div>
  );
}

export default App;
