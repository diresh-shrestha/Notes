import React from 'react';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return <footer>Copyright &copy; {year}</footer>;
};

export default Footer;
