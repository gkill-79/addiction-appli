

// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
          <div className="header-left">
            {/* Votre logo et autres éléments à gauche */}
          </div>
          <div className="header-right">
            <Link to="/articles">Articles</Link>
            <Link to="/pseudo">Pseudo</Link>
            <Link to="/connexion">Connexion / Déconnexion</Link>
            <Link to="/compte">Compte</Link>
          </div>
        </header>
      );
      
};

export default Header;



















