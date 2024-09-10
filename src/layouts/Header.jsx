// Header component for the application
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  // Uses react-router-dom for navigation and i18next for translations
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
	const location = useLocation();
  
  
  
  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          {/* Includes navigation links and language toggle button */}
          <button 
              className='btn btn-secondary m-1' 
              onClick={() => {
                const newLang = i18n.language === 'en' ? 'ar' : 'en';
                i18n.changeLanguage(newLang);
                const currentPath = location.pathname;
                const newPath = currentPath.replace(/^\/[^/]+/, `/${newLang}`);
                navigate(newPath);
              }}>
              {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>
          
          {/* NavLinks used for correct routing between Components */}
          <nav>
            <ul className="nav d-flex justify-content-center">
              <li className="nav-item btn btn-link">
                <NavLink to={`/${i18n.language}`} className="nav-link">
                  {t('nav.home')}
                </NavLink>
              </li>
              <li className="nav-item mx-2 btn btn-link">
                <NavLink to={`/${i18n.language}/about`} className="nav-link">
                  {t('nav.about')}
                </NavLink>
              </li>
              <li className="nav-item mx-2 btn btn-link">
                <NavLink to={`/${i18n.language}/contact`} className="nav-link">
                  {t('nav.contact')}
                </NavLink>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;