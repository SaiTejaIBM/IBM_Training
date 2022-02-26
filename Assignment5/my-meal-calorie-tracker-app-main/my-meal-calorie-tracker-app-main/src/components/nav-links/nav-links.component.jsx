import { Badge } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCookBookCount } from "../../store/cook-book/cook-book.selectors";
import { selectMealCardCount } from "../../store/meal-diary/mealdiary.selectors";
import { LinkItem, LinksContainer, LogoContainer } from "./nav-links.styles";

const NavLinks = ({ mealCardCount, cookBookCount }) => {
  return (
    <>
      <LogoContainer>
        <LinkItem to="/">My Calories</LinkItem>
      </LogoContainer>
      <LinksContainer>
        <Badge
          overlap="circular"
          badgeContent={mealCardCount}
          color="secondary"
          showZero
        >
          <LinkItem to="/meal-diary">Meal Diary</LinkItem>
        </Badge>
        <Badge
          overlap="circular"
          badgeContent={cookBookCount}
          color="secondary"
          showZero
        >
          <LinkItem to="/">Cook Book</LinkItem>
        </Badge>

        <LinkItem to="/">Healthy Recipes</LinkItem>
        <LinkItem to="/">Calorie counter</LinkItem>
      </LinksContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  mealCardCount: selectMealCardCount,
  cookBookCount: selectCookBookCount,
});
export default connect(mapStateToProps)(NavLinks);
