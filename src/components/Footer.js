import "./FooterStyles.css";
import footlogo  from "../assets/footlogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <img className='footer-logo' src={footlogo} alt="Logo" />
        </div>
        <div className="social-icons">
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-facebook-square"></i>
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram-square"></i>
  </a>
  <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-reddit-square"></i>
  </a>
  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-twitter-square"></i>
  </a>
</div>

      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All version</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/contactus">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/contactus">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
