import React from 'react';
import './education.css';
import { Col, Container, Row } from 'react-bootstrap';
import { TfiPencilAlt } from "react-icons/tfi";
import { VscBriefcase } from "react-icons/vsc";
import { SlLayers } from "react-icons/sl";
import Progressbar from '../progressbar/Progressbar';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Start animation only once
    threshold: 0.4, // Start when 30% of the component is in view
  });

  return (
    <section id='skill' ref={ref}>
      <div className="education-content">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="edu_total">
                <div className="Edu_icon">
                  <a href="#"><TfiPencilAlt /></a>
                </div>
                <h5 className='edu_title'>Education</h5>
                <ul>
                  <li>
                    <h6>University of Engineering</h6>
                    <p>Bachelor of Science</p>
                  </li>
                  <li>
                    <h6>College of Awesomeness</h6>
                    <p>
                      Master of Fine Arts</p>
                  </li>
                  <li>
                    <h6>School of Amusement</h6>
                    <p>
                      Bachelor of Fine Arts</p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="edu_total">
                <div className="Edu_icon">
                  <a href="#"><VscBriefcase />
                  </a>
                </div>
                <h5 className='edu_title'>Experience</h5>
                <ul>
                  <li>
                    <h6>Lead Web Developer</h6>
                    <p>
                      State of Art company</p>
                  </li>
                  <li>
                    <h6>UI/UX Web Designer</h6>
                    <p>
                      Design Art Corporation</p>
                  </li>
                  <li>
                    <h6>Front-End Developer</h6>
                    <p>
                      Creative Design Studio</p>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={6}>
              <div className="Edu_icon">
                <a href="#"><SlLayers />
                </a>
              </div>
              <h5 className='edu_title'>My Skills</h5>
              {inView && (
                <div>
                  <Progressbar value={90} label="Web Design" />
                  <Progressbar value={80} label="Development" />
                  <Progressbar value={85} label="Branding" />
                  <Progressbar value={75} label="Marketing" />
                  {/* Add more Progressbar components as needed */}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Education;
