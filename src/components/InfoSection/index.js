import React from "react";
import {
  InfoContainer,
  PrimaryInfoImage,
  SecondaryInfoImage,
  InfoTextContainer,
  InfoHeading,
  InfoParagraph,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <InfoContainer>
      <PrimaryInfoImage></PrimaryInfoImage>
      <InfoTextContainer>
        <InfoHeading>About our furniture</InfoHeading>
        <InfoParagraph>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </InfoParagraph>
      </InfoTextContainer>
      <SecondaryInfoImage></SecondaryInfoImage>
    </InfoContainer>
  );
};

export default InfoSection;
