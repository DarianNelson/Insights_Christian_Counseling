import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ScrollToTop from './components/common/ScrollToTop'; // Smooth scroll-to-anchor behavior on route change

export default function AppRouter() {
  return (
    <>
      {/* 
        ScrollToTop handles smooth scrolling to anchor links (e.g., #contact) and 
        scrolls to top on route changes for better UX -Prevents users from landing mid-page unexpectedly.
      */}
      <ScrollToTop />

      {/* 
        Defines all top-level routes for the app. 
        STRUCTURE: Each <Route> maps a URL path to a page-level component.
      */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Main landing page */}
        <Route path="/about" element={<About />} /> {/* Therapist bios, fees, appointment info */}
        <Route path="/blog" element={<Blog />} /> {/* Blog overview page */}
        <Route path="/blog/sample-post" element={<BlogDetail />} /> {/* Static sample blog detail page */}
      </Routes>
    </>
  );
}