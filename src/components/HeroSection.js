import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-7.mp4" autoPlay loop muted/>
            
            <div className="hero-items">
                <div className="wrapper">
            <h2>WelCome To MyYoutube</h2>
                <p> This is a platform where you can save yourself from getting distracted. </p>
                </div>
                </div>
            <div className="hero-btn">
                {/* <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button> */}
                {/* <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button> */}
            </div>
        </div>
    )
}
//  className='hero-container'
export default HeroSection