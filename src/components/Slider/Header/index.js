import React, { useState } from "react";
import logo from "../../../images/logo.svg";
import {
  HeaderContainer,
  HeaderLinks,
  HeaderLink,
  Logo,
  HamburgerButton,
} from "./HeaderElements";
import HamburgerMenuIcon from "../../../images/icon-hamburger.svg";
import MobileMenu from "../../MobileMenu";

const Header = ({ mobileActive, setMobileActive }) => {
  return (
    <HeaderContainer>
      <MobileMenu
        mobileActive={mobileActive}
        setMobileActive={setMobileActive}
      />
      <HamburgerButton
        src={HamburgerMenuIcon}
        onClick={() => {
          setMobileActive(!mobileActive);
        }}
      />
      <Logo src={logo} />
      <HeaderLinks>
        <HeaderLink to="#">home</HeaderLink>
        <HeaderLink to="#">shop</HeaderLink>
        <HeaderLink to="#">about</HeaderLink>
        <HeaderLink to="#">contact</HeaderLink>
      </HeaderLinks>
    </HeaderContainer>
  );
};

export default Header;
