import LoginPage from "./pages/Login";
import Welcome from "./pages/Welcome";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./configs/theme";
import RegisterPage from './pages/Register';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RegisterPage />
      </ThemeProvider>
    </>
  );
}

export default App;
