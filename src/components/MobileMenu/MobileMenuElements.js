import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorPalette } from "../../assets/design/Theme/Colors";

export const MobileMenuContainer = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0 1rem 0 2rem;
  width: 100vw;
  height: 20vh;
  top: 0;
  left: ${({ mobileActive }) => (mobileActive ? "0" : "-120%")};
  transition: 0.2s ease all;
  background-color: ${colorPalette.White};

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const CloseMenuButton = styled.img`
  width: 20px;
  height: 20px;
`;

export const MobileLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileLink = styled(Link)`
  color: ${colorPalette.Black};
  margin: 0 0.75rem;
  text-decoration: none;
  font-family: "Spartan", sans-serif;
  font-size: 14px;
  font-weight: 700;
`;
