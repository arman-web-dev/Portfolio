import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slide1 from '../../assets/slide1.jpg'
import Slide2 from '../../assets/slide2.jpg'
import Slide3 from '../../assets/slide3.jpg'
import './blog.css'

const Blog = () => {
    return (
        <section id='blog'>
            <Container>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <div className="section_title">
                            <h3>My Blog</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="blog_card">
                            <div className="blog_img">
                                <img src={Slide1} alt="" />
                                <div className="extra">
                                    <a href="#">WordPress</a>
                                </div>
                            </div>
                            <div className="blog_content">
                                <h3>The Best WordPress Real Estate Themes & Plugins</h3>
                                <p>We’ve assembled a collection of sci-fi After Effects templates most likely to induce awe and wonder and tried to pick …</p>
                                <div className="info">
                                    <span className='tag'>
                                        <a href="#">Read More</a>
                                    </span>
                                    <span className='done'>
                                        <a href="#">By : Admin</a>
                                    </span>


                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="blog_card">
                            <div className="blog_img">
                                <img src={Slide2} alt="" />
                                <div className="extra">
                                    <a href="#">ThemeForest</a>
                                </div>
                            </div>
                            <div className="blog_content">
                                <h3>The Best Advice for Novice Web Designers in 2018</h3>
                                <p>We’ve assembled a collection of sci-fi After Effects templates most likely to induce awe and wonder and tried to pick …</p>
                                <div className="info">
                                    <span className='tag'>
                                        <a href="#">Read More</a>
                                    </span>
                                    <span className='done'>
                                        <a href="#">By: Arman</a>
                                    </span>


                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="blog_card">
                            <div className="blog_img">
                                <img src={Slide3} alt="" />
                                <div className="extra">
                                    <a href="#">Trends</a>
                                </div>
                            </div>
                            <div className="blog_content">
                                <h3>4 Deadly Sins of UI and UX Design You Need to Avoid</h3>
                                <p>We’ve assembled a collection of sci-fi After Effects templates most likely to induce awe and wonder and tried to pick …</p>
                                <div className="info">
                                    <span className='tag'>
                                        <a href="#">Read More</a>
                                    </span>
                                    <span className='done'>
                                        <a href="#">By: Arman</a>
                                    </span>


                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Blog
