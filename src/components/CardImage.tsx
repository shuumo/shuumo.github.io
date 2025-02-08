import shuumopfp from '/img4.png'
import Slider from "react-slick";

import type { Settings } from "react-slick";

import "./CardImage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type prp = {
    image_paths: string[];
}

function CardImages(props : prp) {
   const settings: Settings = {
    dots: true,
    lazyLoad: "progressive",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    variableWidth: false,
    centerPadding: "0px"
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
            {props.image_paths.map((imgpath: string, i) => (
            <div key={i} className="ImgSlide">
                <img src={imgpath}/>
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardImages; 

