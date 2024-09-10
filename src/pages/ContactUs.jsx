// Contact component
// Displays contact information and social media links
// Uses i18next for translations and includes social media icons

import { useTranslation } from 'react-i18next';
import faceBook from '../assets/fb.png'
import linkedIn from '../assets/in.png'

const Contact = () => {
    const { t } = useTranslation();
  
    return (
      <div className="about">
        <div className="container">
          <div className="card m-2">
                <h1 className="card-header mb-2">{t("contact.heading")}</h1> 
                <div className="card-text m-1">
                    <p>{t("contact.body")}</p>
                    <a href="https://facebook.com" target="_blank" className="btn">
                        <img style={{width: '50px', height: "50px"}} src={faceBook}></img>
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="btn">
                        <img style={{width: '50px', height: "50px"}} src={linkedIn}></img>
                    </a>
                </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;