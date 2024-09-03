import React from 'react'
import './testimonial.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Col, Container, Row } from 'react-bootstrap';
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <section id='test'>

            <div className="slider-container">
                <Container>

                    <Slider {...settings}>
                        <div>
                            <div className="t_icon">
                                <BiSolidQuoteAltRight className='test_icon' />
                            </div>
                            <Row>
                                <Col lg={{ span: 4, offset: 4 }}>
                                    <div className="section_title">
                                        <h3>My Testimonials</h3>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{ span: 10, offset: 1 }}>
                                <div className="test_text">
                                <p>Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy, when an unknown printer took a galley of type a type specimen book.</p>
                            </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{ span:4, offset: 4 }}>
                                <div className="test_bottom_name">
                                    <div className="_bottom_name">

                                <h4>Alex Smith</h4>
                                    </div>
                                    <div className="_bottom_title">

                                <h5>Envato Author</h5>
                                    </div>

                                </div>

                                </Col>
                            </Row>

                        </div>

                        <div>
                            <div className="t_icon">
                                <BiSolidQuoteAltRight className='test_icon' />
                            </div>
                            <Row>
                                <Col lg={{ span: 4, offset: 4 }}>
                                    <div className="section_title">
                                        <h3>My Testimonials</h3>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={{ span: 10, offset: 1 }}>
                                <div className="test_text">
                                <p>Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy, when an unknown printer took a galley of type a type specimen book.</p>
                            </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{ span:4, offset: 4 }}>
                                <div className="test_bottom_name">
                                    <div className="_bottom_name">

                                <h4>Alex Smith</h4>
                                    </div>
                                    <div className="_bottom_title">

                                <h5>Envato Author</h5>
                                    </div>

                                </div>

                                </Col>
                            </Row>


                        </div>

                        <div>
                            <div className="t_icon">
                                <BiSolidQuoteAltRight className='test_icon' />
                            </div>
                            <Row>
                                <Col lg={{ span: 4, offset: 4 }}>
                                    <div className="section_title">
                                        <h3>My Testimonials</h3>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{ span: 10, offset: 1 }}>
                                <div className="test_text">
                                <p>Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy, when an unknown printer took a galley of type a type specimen book.</p>
                            </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{ span:4, offset: 4 }}>
                                <div className="test_bottom_name">
                                    <div className="_bottom_name">

                                <h4>Alex Smith</h4>
                                    </div>
                                    <div className="_bottom_title">

                                <h5>Envato Author</h5>
                                    </div>

                                </div>

                                </Col>
                            </Row>


                        </div>


                    </Slider>
                </Container>
            </div>
        </section>
    )
}

export default Testimonials
