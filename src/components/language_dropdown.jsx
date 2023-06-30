import React, { useState } from 'react';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import globe from '../images/globe.png'




const LanguageDropdown = () => {
const {languages, originalPath, language} = useI18next();
const labels = {"it":"Italiano","en":"English"}
  return (
    <div className="language-dropdown">
      <button className="language-dropdown__button">
        <span className="language-dropdown__label"><img src={globe} class="language-dropdown__globe"/>{labels[language]}</span>
        <span className="language-dropdown__icon"></span>
      </button>
      <ul className="language-dropdown__menu">
      {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {labels[lng]}
            </Link>
          </li>
        ))}
        
          
      </ul>
    </div>
  );
};

export default LanguageDropdown;




