import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [current, setCurrent] = useState(0);

  /* You will need to hanle the click on left and right button */
  function left() {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  function right() {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={left} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[current].src} alt={images[current].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={right} />
    </div>
  );
};