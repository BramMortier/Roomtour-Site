import styled from "styled-components";
import { colorPalette } from "../../../assets/design/Theme/Colors";

export const ButtonsContainer = styled.div`
  display: ${({ mobileButtons }) => (mobileButtons ? "none" : "flex")};
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: ${({ mobileButtons }) => (mobileButtons ? "flex" : "none")};
  }
`;

export const PrevBtn = styled.button`
  background-color: ${colorPalette.Black};
  outline: none;
  cursor: pointer;
  border: none;
  width: 5vw;
  height: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: ease 0.2s background-color;
    background-color: ${colorPalette.VeryDarkGray};
  }

  @media screen and (max-width: 1024px) {
    height: 60px;
    width: 60px;
  }
`;

export const NextBtn = styled.button`
  background-color: ${colorPalette.Black};
  outline: none;
  cursor: pointer;
  border: none;
  width: 5vw;
  height: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: ease 0.5s background-color;
    background-color: ${colorPalette.VeryDarkGray};
  }

  @media screen and (max-width: 1024px) {
    height: 60px;
    width: 60px;
  }
`;

export const ArrowRight = styled.img`
  width: 15px;
  height: 30%;

  @media screen and (max-width: 1024px) {
    width: 15%;
  }
`;

export const ArrowLeft = styled.img`
  width: 15px;
  height: 30%;

  @media screen and (max-width: 1024px) {
    width: 15%;
  }
`;
