import "./WelcomeCSS.css";
import { useState } from "react";
import Slider from "react-slick";
import p1 from '../Image/p1.jpg';
import p2 from '../Image/p2.jpg';
import p3 from '../Image/p3.png';
import p5 from '../Image/p5.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [p1,p2,p3,p5];

function Welcome() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    autoplay:true,
    autoplaySpeed:2000,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (


    <div className="Welcome">

      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Welcome;