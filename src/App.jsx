import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <About />
      <Testimonial />
      <GallerySection />
      <Contact />
      <Footer />
      <Copyright />
      <WhatsAppButton />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};


export default App;

