import React from 'react';
import './number.css';
import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { SlLayers } from "react-icons/sl";
import { BsCloudDownload } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import CountUp from 'react-countup';
import { Parallax } from 'react-parallax';
import { useInView } from 'react-intersection-observer';
import numberB from '../../assets/b3.jpg';

const Number = () => {
  const commonDuration = 4; // Set a common duration for all counters
  const { ref, inView } = useInView({
    triggerOnce: true, // Start animation only once
    threshold: 0.3, // Start when 30% of the component is in view
  });

  return (
    <section id='number' ref={ref}>
      <Parallax bgImage={numberB} strength={200}>
        <div className="number-content">
          <Container>
            <Row>
              <Col lg={3}>
                <div className="counter-container">
                  <div className="counter-item">
                    <a href="#"><HiOutlineEmojiHappy className='ni'/></a>
                    {inView && (
                      <CountUp start={0} end={340} delay={0} duration={commonDuration}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>
                    )}
                    <p>Happy Customers</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="counter-container">
                  <div className="counter-item">
                    <a href="#"><SlLayers className='ni'/></a>
                    {inView && (
                      <CountUp start={0} end={950} delay={0} duration={commonDuration}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>
                    )}
                    <p>Projects Completed</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="counter-container">
                  <div className="counter-item">
                    <a href="#"><BsCloudDownload className='ni'/></a>
                    {inView && (
                      <CountUp start={0} end={520} delay={0} duration={commonDuration}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>
                    )}
                    <p>Files Downloaded</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="counter-container">
                  <div className="counter-item">
                    <a href="#"><LuPencilLine className='ni'/></a>
                    {inView && (
                      <CountUp start={0} end={6350} delay={0} duration={commonDuration}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>
                    )}
                    <p>Lines Of Code</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>
    </section>
  );
};

export default Number;
