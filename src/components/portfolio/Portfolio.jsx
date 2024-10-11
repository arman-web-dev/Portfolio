import React, { useEffect, useRef } from 'react';
import mixitup from 'mixitup';
import Mix1 from '../../assets/mix1.jpg';
import Mix2 from '../../assets/mix2.jpg';
import Mix3 from '../../assets/mix3.jpg';
import Mix4 from '../../assets/mix4.jpg';
import Mix5 from '../../assets/mix5.jpg';
import Mix6 from '../../assets/mix6.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './portfolio.css';

const Portfolio = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mixer = mixitup(containerRef.current);
    return () => {
      mixer.destroy();
    };
  }, []);

  return (
    <section id="gallary">
      <Container>
        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <div className="section_title">
              <h3>My Portfolio</h3>
            </div>
          </Col>
        </Row>
      <Row>
        <Col lg={{ span:6, offset:3}}>

        <div className="controls mb-3">
          <Button  data-filter="all" className="me-2">All</Button>
          <Button  data-filter=".category-a" className="me-2">Brand</Button>
          <Button  data-filter=".category-b" className="me-2">Design</Button>
          <Button  data-filter=".category-c" className="me-2">Graphic</Button>
        </div>
        </Col>
      </Row>

        <Row className="mixitup-container" ref={containerRef}>
          <Col lg={4} className="mix category-a">
            <img src={Mix1} alt="" className="img-fluid" />
          </Col>
          <Col lg={4} className="mix category-b category-c">
            <img src={Mix3} alt="" className="img-fluid" />
          </Col>
          <Col lg={4} className="mix category-a category-b">
            <img src={Mix5} alt="" className="img-fluid" />
          </Col>
          <Col lg={4} className="mix category-a category-c">
            <img src={Mix2} alt="" className="img-fluid" />
          </Col>
          <Col lg={4} className="mix category-a category-c">
            <img src={Mix4} alt="" className="img-fluid" />
          </Col>
          <Col lg={4} className="mix category-b">
            <img src={Mix6} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
