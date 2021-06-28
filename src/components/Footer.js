import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className="outer-layer">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h4>Explore</h4>
                        <Link to='/AboutUs'>About Us</Link>
                        <Link to='/'>Sitemap</Link>
                        <Link to='/SignUp'>Sign in</Link>
                        <Link to='/'>Join Us</Link>
                    </div>
                    <div className="footer-link-items">
                        <h4>Contact Us</h4>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorship</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h4>Videos</h4>
                        <Link to='/'>Submit Videos</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h4>Social Media</h4>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                        <i className="fas fa-play-circle"></i> MyYoutube
                        </Link>
                    </div>
                    <small className="website-rights">MyYoutube &copy; 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to='/' target="_blank" aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to='/' target="_blank" aria-label='Instagram'>
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to='/' target="_blank" aria-label='Twitter'>
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin" to='/' target="_blank" aria-label='Linkedin'>
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className="social-icon-link youtube" to='/' target="_blank" aria-label='Youtube'>
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
}
export default Footer
