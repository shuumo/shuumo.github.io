import shuumopfp from '/img4.png'
import Slider from "react-slick";

import type { Settings } from "react-slick";

import "./CardImage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardImages() {
   const settings: Settings = {
    dots: false,
    lazyLoad: "progressive",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    variableWidth: false,
    centerPadding: "0px"
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="ImgSlide" >
          <img src={shuumopfp}/>
        </div>
        <div className="ImgSlide">
          <img src={shuumopfp}/>
        </div>
        <div className="ImgSlide">
          <img src={shuumopfp}/>
        </div>
        <div className="ImgSlide">
          <img src={shuumopfp}/>
        </div>
      </Slider>
    </div>
  );
}

export default CardImages; 

