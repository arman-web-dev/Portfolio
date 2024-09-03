import './App.css';
import Banner from './components/banner/Banner';
import Education from './components/education/Education';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Number from './components/number/Number';
import Service from './components/serviceSection/Service';
import ScrollToTop from 'react-scroll-to-top';
import { FaArrowUp } from 'react-icons/fa';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Hero />
      <Education />
      <Service />
      <Number />
      <Portfolio/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      <Footer/>
            <div/>
      <ScrollToTop 
        smooth
        component={<FaArrowUp />}
        className="scroll-to-top-button"
      />
    </>
  );
}

export default App;
