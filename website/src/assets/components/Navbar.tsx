import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div id='navbar'>
      <a href='/resources'>Resources</a>
      <a href='/our-games'>Our Games</a>
      <a id='join-button' href='/join-gdc'>
        Join GDC
      </a>

      <a id='gdc-logo' href='/'>
        GDC
      </a>
    </div>
  );
};

export default Navbar;
