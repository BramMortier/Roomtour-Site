import React, { useState } from "react";
import Header from "./Header";
import CarouselButtons from "./CarouselButtons";
import ArrowImg from "../../images/icon-arrow.svg";
import {
  SliderContainer,
  ImageCarousel,
  InfoCarousel,
  Heading,
  Paragraph,
  ShopBtn,
  Arrow,
  Info,
} from "./SliderElements";
import { carouselContent } from "./data";

const Slider = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [mobileActive, setMobileActive] = useState(false);

  const checkIndex = (index) => {
    if (index < 0) {
      return carouselContent.length - 1;
    }
    if (index > carouselContent.length - 1) {
      return 0;
    }
    return index;
  };

  const prevSlide = () => {
    setCurrentContent((currentContent) => {
      const newContent = currentContent - 1;
      return checkIndex(newContent);
    });
  };

  const nextSlide = () => {
    setCurrentContent((currentContent) => {
      const newContent = currentContent + 1;
      return checkIndex(newContent);
    });
  };

  return (
    <div>
      <SliderContainer>
        <ImageCarousel
          style={{
            backgroundImage: `url(${carouselContent[currentContent].image})`,
          }}
        >
          <Header
            mobileActive={mobileActive}
            setMobileActive={setMobileActive}
          />
          <CarouselButtons
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            mobileButtons={true}
          />
        </ImageCarousel>
        <InfoCarousel>
          <Info>
            <Heading>{carouselContent[currentContent].heading}</Heading>
            <Paragraph>{carouselContent[currentContent].text}</Paragraph>
            <ShopBtn>
              Shop now
              <Arrow src={ArrowImg} />
            </ShopBtn>
          </Info>
          <CarouselButtons prevSlide={prevSlide} nextSlide={nextSlide} />
        </InfoCarousel>
      </SliderContainer>
    </div>
  );
};

export default Slider;
