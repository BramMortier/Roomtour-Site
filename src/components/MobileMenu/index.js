import React from "react";
import {
  MobileMenuContainer,
  CloseMenuButton,
  MobileLinks,
  MobileLink,
} from "./MobileMenuElements";
import closeButtonIcon from "../../images/icon-close.svg";

const MobileMenu = ({ mobileActive, setMobileActive }) => {
  return (
    <MobileMenuContainer mobileActive={mobileActive}>
      <CloseMenuButton
        src={closeButtonIcon}
        onClick={() => {
          setMobileActive(!mobileActive);
        }}
      />
      <MobileLinks>
        <MobileLink to="#">home</MobileLink>
        <MobileLink to="#">shop</MobileLink>
        <MobileLink to="#">about</MobileLink>
        <MobileLink to="#">contact</MobileLink>
      </MobileLinks>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
