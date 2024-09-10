// App component
// Includes routes for home, about, and contact pages
import {Route, Routes, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './layouts/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/ContactUs.jsx';


function App() {
  // Uses i18n for internationalization
  const { i18n } = useTranslation();

  return (
    <div>
    <Header />
    {/* Sets up the routing structure for the application */}
    <Routes>
      <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
      <Route path={`/${i18n.language}`} element={<Home />} />
      <Route path={`/${i18n.language}/about`} element={<About />} />
      <Route path={`/${i18n.language}/contact`} element={<Contact />} />
      <Route path="*" element={<Navigate to={`/${i18n.language}`} replace />} />
    </Routes>
  </div>
  );
}


export default App;
