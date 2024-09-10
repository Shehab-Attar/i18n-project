// About component
// Displays information about the company or project
// Uses i18next for translations

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="container">
        <div className="card m-2">
                <h1 className="card-header mb-2">{t("about.title")}</h1> 
                <div className="card-text m-1">
                <p>{t("about.description")}</p>
                <p>{t("about.info")}</p>
                </div>
        </div>
      </div>
    </div>
  );
}

export default About;