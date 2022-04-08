import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorPalette } from "../../../assets/design/Theme/Colors";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 3rem 0;
  width: 100%;
  align-items: center;
`;

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderLink = styled(Link)`
  position: relative;
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  font-family: "Spartan", sans-serif;
  font-size: 14px;

  &::before {
    opacity: 0;
    transition: opacity 0.2s ease;
    position: absolute;
    content: "";
    top: 25px;
    left: 15%;
    right: -15%;
    width: 70%;
    height: 2px;
    background-color: ${colorPalette.White};
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const Logo = styled.img`
  width: 65px;
  height: 100%;
  margin: 0 60px;

  @media screen and (max-width: 1024px) {
    margin: 0 40px;
  }
`;

export const HamburgerButton = styled.img`
  display: none;
  margin-left: 2rem;

  @media screen and (max-width: 1024px) {
    display: inline-block;
  }
`;
