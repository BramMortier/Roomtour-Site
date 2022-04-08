import styled from "styled-components";
import { colorPalette } from "../../assets/design/Theme/Colors";

export const SliderContainer = styled.div`
  height: 65vh;
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const ImageCarousel = styled.div`
  height: 100%;
  width: 55vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const InfoCarousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45vw;
  background-color: ${colorPalette.White};

  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: fit-content;
  }
`;

export const Heading = styled.h1`
  font-family: "Spartan", sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${colorPalette.Black};
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const Paragraph = styled.p`
  font-family: "Spartan", sans-serif;
  font-size: 12px;
  line-height: 160%;
  color: ${colorPalette.DarkGray};
  margin-bottom: 2rem;
`;

export const ShopBtn = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    transition: ease 0.2s color;
    color: ${colorPalette.DarkGray};
  }
`;

export const Arrow = styled.img`
  width: 40px;
  margin-left: 2rem;
`;

export const Info = styled.div`
  padding: 6rem 8rem 0 8rem;

  @media screen and (max-width: 1440px) {
    padding: 4rem 4rem 0 4rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 4rem 2rem;
  }
`;
