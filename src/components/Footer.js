import React from 'react';
import '../styles/footer.css';

export const Footer = () => {
    return (
          <footer>
            <div className="social"><a href="https://www.linkedin.com/in/smriti-naik-a0067a1a5/"><i className="fa fa-linkedin"></i></a><a href="https://github.com/shruti1421"><i className="fab fa fa-github"></i></a><a href=""><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
            <p>This site is Built with React.js and deployed to netlify</p>
            <p className="copyright">Smriti Naik © 2021</p>
        </footer>
    )
}
