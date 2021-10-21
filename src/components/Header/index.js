import React from 'react';
import PropTypes from 'prop-types';
// composant Link : permet de représenter un lien (balise a) vers une autre page,
// placera la valeur de sa prop "to" dans la barre d'adresse, mais sans recharger
// la page quand on clique sur le lien
import { NavLink } from 'react-router-dom';

import './header.scss';

/* header-link--active */

const Header = ({ categories }) => (
  <header className="header">
    <nav>
      {categories.map((category) => (
        <NavLink
          key={category.label}
          className="header-link"
          to={category.route}
          activeClassName="header-link--active"
          exact
        >
          {category.label}
        </NavLink>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;
