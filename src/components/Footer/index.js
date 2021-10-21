import React from 'react';

import './footer.scss';

// &nsbp; => entité HTML, représente un espace insécable, on recommande au
// navigateur de ne pas sauter une ligne à cet endroit

const Footer = () => (
  <footer className="footer">
    <p>THE Blog, le énième blog sur le cinéma&nbsp;- 2021&nbsp;&copy;</p>
  </footer>
);

export default Footer;
