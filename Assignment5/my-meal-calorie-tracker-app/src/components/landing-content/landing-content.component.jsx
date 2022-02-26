import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";

import {
  ContentWrapper,
  Image,
  ImageContainer,
  LandingContentContainer,
  LandingHeading,
  LandingPara,
} from "./landing-content.styles";

const LandingContent = ({ history }) => {
  return (
    <LandingContentContainer>
      <ContentWrapper>
        <LandingHeading>What you eat decides your fitness</LandingHeading>
        <LandingPara>
         Track and control your calorie intake
         
        </LandingPara>
        <CustomButton
          onClick={() => history.push("/meal-diary")}
          size="large"
          color="secondary"
          variant="contained"
        >
          Get Started
        </CustomButton>
      </ContentWrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </LandingContentContainer>
  );
};

export default withRouter(LandingContent);
