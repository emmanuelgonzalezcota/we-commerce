import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {

  return(

    <footer className="footer pt-3">

        {/* <!-- Social buttons --> */}
        <ul className="footer__social-buttons list-unstyled list-inline text-center mb-0">
          <li className="list-inline-item">
            <Link className="btn-floating btn-fb mx-1" to="#">
              <i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} size="2x"/></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-in mx-1" to="#">
              <i className="fab fa-Instagram"><FontAwesomeIcon icon={faInstagram} size="2x"/></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-tw mx-1" to="#">
              <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} size="2x"/></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-gplus mx-1" to="#">
              <i className="fab fa-google-plus-g"><FontAwesomeIcon icon={faGooglePlusG} size="2x"/></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-li mx-1" to="#">
              <i className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedinIn} size="2x"/></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-gi mx-1" to="#">
              <i className="fab fa-Github"><FontAwesomeIcon icon={faGithub} size="2x"/></i>
            </Link>
          </li>
        </ul>

      {/* <!-- Copyright --> */}
      <div className="footer__copyright text-center">© 2020 Copyright: Gonzalez Inc </div>
      <div className="footer__copyright-site text-center pb-3">Made @ Sonora</div>

    </footer>

  )

}

export default Footer;