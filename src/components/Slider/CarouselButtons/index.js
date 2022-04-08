import React from "react";
import {
  ButtonsContainer,
  PrevBtn,
  NextBtn,
  ArrowLeft,
  ArrowRight,
} from "./CarouselBtnsElements";
import ChevronRight from "../../../images/icon-angle-right.svg";
import ChevronLeft from "../../../images/icon-angle-left.svg";

const CarouselButtons = ({ prevSlide, nextSlide, mobileButtons }) => {
  return (
    <ButtonsContainer mobileButtons={mobileButtons}>
      <PrevBtn onClick={prevSlide}>
        <ArrowLeft src={ChevronLeft} />
      </PrevBtn>
      <NextBtn onClick={nextSlide}>
        <ArrowRight src={ChevronRight} />
      </NextBtn>
    </ButtonsContainer>
  );
};

export default CarouselButtons;
