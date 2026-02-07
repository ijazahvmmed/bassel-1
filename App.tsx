import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import SeriesReadingOrder from './pages/SeriesReadingOrder';

const App: React.FC = () => {
   return (
      <Router>
         <div className="bg-black min-h-screen text-white selection:bg-brand-red selection:text-white">
            <TopBanner />
            <Navigation />

            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/series-reading-order" element={<SeriesReadingOrder />} />
            </Routes>

            <Footer />
         </div>
      </Router>
   );
};

export default App;