import React from 'react'
import './hero.css'
import { Col, Container, Row } from 'react-bootstrap'
import Hero1 from '../../assets/hero.jpg'
import { FaFacebookF, FaTwitter, FaBehance, FaInstagram, FaVimeoV, FaTelegramPlane } from 'react-icons/fa'
const Hero = () => {
    return (
        <section id='hero'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="hero_img">
                            <img src={Hero1} alt="hero" />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="title_total">
                            <h4 className='title'>
                                I Am UI / UX Designer
                            </h4>
                        </div>
                        <p>I am <strong>Arman Hossain</strong> fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam Fusce Fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam Fusce Fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam</p>
                        <p>We’re full service which means we’ve got you covered on design and content right through to digital. You’ll form a lasting relationship with us, collaboration is central to everything we do. We’ll push you out of your comfort zone from time-to-time.</p>
                        <div className="social_icon">
                            <a href="#"><FaFacebookF className='fb' /></a>
                            <a href="#"><FaTwitter className='fb' /></a>
                            <a href="#"> <FaInstagram className='fb' /></a>
                            <a href="#"><FaBehance className='fb' /></a>
                            <a href="#"><FaVimeoV className='fb' /></a>
                        </div>
                        <div className="btn_btn">
                            <span className="buton text-center">
                                <a href="#0" front="Hire Me" back="&#xf1d8;" className='first_btn'></a>
                            </span>
                            <span className="buton buton-bord text-center">
                                <a href="CV.pdf" front="Download C.V" back="&#xf019;" download="CV.pdf"></a>
                            </span>
                        </div>


                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Hero
