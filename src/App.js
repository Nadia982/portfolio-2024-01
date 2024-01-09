import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import { MainBody } from "./styles/Global.styled";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <MainBody />
      </ThemeProvider>
  );
}

export default App;
