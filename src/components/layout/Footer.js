import React from "react";

const Footer = () => {
  return (
    <footer className="footer grey darken-4">
      <div className="container white-text">
        <h6 className="center">Copyright &copy; {new Date().getFullYear()}</h6>
      </div>
    </footer>
  );
};

export default Footer;
