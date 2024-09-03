import React from 'react'
import './service.css'
import { Col, Container, Row } from 'react-bootstrap'
import { TiDeviceLaptop } from "react-icons/ti";
import { SlLayers } from "react-icons/sl";
import { FaMicrochip } from "react-icons/fa6";
import { BsShieldShaded } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";



const Service = () => {
    return (
        <section id='services'>
            <Container>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <div className="section_title">
                            <h3>My Services</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="service_item bottom_b">
                            <div className="service_icon">
                                <span><TiDeviceLaptop /></span>
                            </div>
                            <h6>Web Design</h6>
                            <p>fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="service_item middle bottom_b">
                            <div className="service_icon">
                                <span><SlLayers /></span>
                            </div>
                            <h6>Development</h6>
                            <p>fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="service_item bottom_b">
                            <div className="service_icon">
                                <span><FaMicrochip /></span>
                            </div>
                            <h6>Branding</h6>
                            <p>fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="service_item">
                            <div className="service_icon">
                                <span><BsShieldShaded /></span>
                            </div>
                            <h6>Clean Code</h6>
                            <p>fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="service_item middle">
                            <div className="service_icon">
                                <span><FiSettings /></span>
                            </div>
                            <h6>Fully Responsive</h6>
                            <p>fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="service_item">
                            <div className="service_icon">
                                <span><TiDeviceLaptop /></span>
                            </div>
                            <h6>Custom Support</h6>
                            <p>fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam
                            </p>
                        </div>
                    </Col>
                </Row>

            </Container>

        </section>
    )
}

export default Service
