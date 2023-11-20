import Calculation from "./views/Calculation";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Calculation />
    </ThemeProvider>
  );
};

export default App;
