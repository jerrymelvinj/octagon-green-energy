import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer, MobileActionDrawer, WelcomePopup, GlobalCTAForm } from './components';
import { Home, About, Business, Products, Projects, Faqs, Careers, Contact } from './pages';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WelcomePopup />
      <div className="font-sans min-h-screen flex flex-col bg-bg-neutral selection:bg-accent/30 selection:text-primary-dark">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <GlobalCTAForm />
        <Footer />
        <MobileActionDrawer />
      </div>
    </Router>
  );
}

export default App;
