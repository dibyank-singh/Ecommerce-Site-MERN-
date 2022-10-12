import React from 'react'
import Announcement from './Announcement';
import Categories from './Categories/Categories';
import Footer from './Footer';
import Navbar from './Navbar';
import Notification from './Notification';
import Products from './Products/Products';
import Slider from './Slider';

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Notification/>
        <Footer/>
    </div>
  )
}

export default Home;