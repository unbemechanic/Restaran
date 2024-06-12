import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './navbar/navbar';
import { Body } from './design';
import Home from './home/home';
import Trending from './trending/trending';
import Popular from './popular-items/popular';
import Contact from './contact/contact';
import Footer from './footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Body>
      <Navbar/>
      <Home/>
      <Trending/>
      <Popular/>
      <Contact/>
      <Footer/>
    </Body>
  </React.StrictMode>
);


