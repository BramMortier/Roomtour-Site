import styled from "styled-components";
import PrimaryImage from "../../images/image-about-dark.jpg";
import SecondaryImage from "../../images/image-about-light.jpg";
import { colorPalette } from "../../assets/design/Theme/Colors";

export const InfoContainer = styled.div`
  height: 35vh;
  width: 100vw;
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const PrimaryInfoImage = styled.div`
  width: 30vw;
  height: 100%;
  background-image: url(${PrimaryImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: 40vh;
  }
`;

export const SecondaryInfoImage = styled.div`
  width: 35vw;
  height: 100%;
  background-image: url(${SecondaryImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: 40vh;
  }
`;

export const InfoTextContainer = styled.div`
  background-color: ${colorPalette.White};
  width: 35vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: fit-content;
    padding: 3rem 2rem;
  }
`;

export const InfoHeading = styled.h2`
  font-family: "Spartan", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  color: ${colorPalette.Black};
  letter-spacing: 4px;
  margin-bottom: 1rem;
  align-self: flex-start;
`;

export const InfoParagraph = styled.p`
  font-family: "Spartan", sans-serif;
  font-size: 12px;
  line-height: 160%;
  color: ${colorPalette.DarkGray};
`;
