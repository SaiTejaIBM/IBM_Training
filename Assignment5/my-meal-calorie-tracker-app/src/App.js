import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";

import { GlobalStyles } from "./globalStyles";
import CookBookPage from "./pages/cook-book-page/cook-book-page.component";
import FindCalorieAmountPage from "./pages/find-calorie-amount-page/find-calorie-amount-page.component";
import FindReceipePage from "./pages/find-receipe-page/find-receipe-page.component";
import HomePage from "./pages/home-page/home-page.component";
import MealDiaryPage from "./pages/meal-diary-page/meal-diary-page.component";
import RecipePage from "./pages/recipe-page/recipe-page.component";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const mainTheme = createTheme({
  typography: {
    fontFamily: "Source Sans Pro",
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        subtitle1: "p",
        subtitle2: "p",
      },
    },
  },
  palette: {
    primary: {
      main: "#206A5D",
      light: "#BFDCAE",
    },
    secondary: {
      main: "#BC4639",
      light: "#BFDCAE",
      dark: "#81B214",
    },
    success: {
      main: "#BFDCAE",
    },
    info: {
      main: "#F1F1E8",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/meal-diary" component={MealDiaryPage} />
        <Route exact path="/cook-book" component={CookBookPage} />
        <Route exact path="/find-receipe" component={FindReceipePage} />
        <Route
          exact
          path="/find-calorie-amount"
          component={FindCalorieAmountPage}
        />
        <Route exact path="/recipe/:recipeName" component={RecipePage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
