import React from 'react';
import { Parallax } from 'react-parallax';
import './banner.css';  // Import your CSS file
import bannerImage from '../../assets/bg1.jpg';  // Adjust the path as needed
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
    return (
      <section id='ban'>
          <Parallax bgImage={bannerImage} strength={200}>
            <div className="banner-content">
                <h2 className="heading-small">I Love To Design</h2>
                
                <h1 className="heading-large">
                    <span className="bold-text">I am </span>
   <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Arman Hossain',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A Developer',
        1000,
        'A Designer',
        1000,
      ]}
      wrapper="span"
      speed={60}
      deletionSpeed={60}
      cursor={false}
      style={{ fontSize: '70px', display: 'inline-block', fontWeight:'900'}}
      repeat={Infinity}
    />
                </h1>
            </div>
        </Parallax>
      </section>
    );
};

export default Banner;
