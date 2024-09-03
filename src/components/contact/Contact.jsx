import React from 'react'
import './contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import { TbDeviceMobileCancel } from "react-icons/tb";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";


const Contact = () => {
    return (
        <section id='contact'>
            <Container>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <div className="section_title">
                            <h3>Get In Touch</h3>
                        </div>
                    </Col>
                </Row>
               <div className="form_design">
                <form action="#">
                <Row>
                    <Col lg={6}>
                    <input type="text" placeholder='Name *' required='required' />
                    </Col>
                    <Col lg={6}>
                    <input type="email" placeholder='Email *' required='required'/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                    <input type='text' placeholder='Subject' required='required'/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                    <textarea name="Comment" id="msg" placeholder='Your Message'></textarea>
                    </Col>
                </Row>
               <div className="send_btn">
               <span className="buton text-center">
                              <a href="#0" front="send message" back="&#xf1d8;" data-scroll-nav="6" className='first_btn'></a>
                            </span>
               </div>
              <div className="up_footer">
              <Row>
                <Col lg={4}>
                <div className="under_contact">
                <div className="u_c_icon">
                    <a href="#"><TbDeviceMobileCancel className='iconicon'/></a>
                </div>
                <div className="u_c_info">
                    <h4>Phone</h4>
                    <p>+8801733695357</p>
                </div>
               </div>
                </Col>
                <Col lg={4}>
                <div className="under_contact">
                <div className="u_c_icon">
                    <a href="#"><MdOutlineMarkEmailRead className='iconicon'/></a>
                </div>
                <div className="u_c_info">
                    <h4>Email</h4>
                    <p>Alex_support@gmail.com</p>
                   

                </div>
               </div>
                </Col>
                <Col lg={4}>
                <div className="under_contact">
                <div className="u_c_icon">
                    <a href="#"><CiLocationOn className='iconicon'/></a>
                </div>
                <div className="u_c_info">
                    <h4>Address</h4>
                    <p>3481 Melrose Place, Los Angeles</p>
                </div>
               </div>
                </Col>
              </Row>
              </div>
                </form>
               </div>
            </Container>

        </section>
    )
}

export default Contact
