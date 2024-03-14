import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeFooter from './components/HomeFooter'
import Home from "./pages/Home";
import './App.css'
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Work from "./pages/Work";
import OurWork from "./components/OurWork";
import Reviews from "./pages/Reviews";
import LoadingBar from 'react-top-loading-bar'
import { useState, useEffect } from "react";
import FullTeam from "./components/FullTeam";
import Designs from "./components/Designs";
import SocialmediaMarketing from "./components/SocialmediaMarketing";
import Blogs from "./pages/Blogs";
import BlogCategories from "./components/BlogCategories";

function App() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const delay = setTimeout(() => {
      setProgress(90);
      setTimeout(() => {
        setProgress(100);
      }, 500); // half second delay before reaching 100%
    }, 100); // Initial delay before starting the progress bar

    return () => clearTimeout(delay);
  }, [location]);
  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/fullteam" element={<FullTeam/>} /> */}
        <Route path="/category/:category" element={<Work />} />
        <Route path="/blog/:category" element={<BlogCategories />} />
        {/* <Route path="/category/marketing" element={<SocialmediaMarketing/>} /> */}
        <Route path="/gdcategory/:category" element={<Designs />} />
      </Routes>
      <LoadingBar
        color="var(--color-primary)"
        progress={progress}
        height={3}
      />
      <HomeFooter />
    </>
  );
}

export default App;
