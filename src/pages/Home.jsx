// Home component
// Displays a greeting and introduction
// Uses i18next for translations

import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css'
const Home = () => {
    const { t } = useTranslation();
    
    return (
        <div className="container">
            <div className="card m-2">
                    <h1 className='card-header mb-2'>{t("greeting")}</h1>
                    <div className="card-text m-1">
                        <p>{t("intro.line1")}</p>
                        <span>{t("intro.line2")}</span>
                    </div>
            </div>
        </div>
    );
}

export default Home;