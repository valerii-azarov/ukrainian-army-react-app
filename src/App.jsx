import { useState } from "react";
import { 
  Header, 
  Home, 
  Blog, 
  Donation, 
  Footer 
} from "./components";
import { ThemeProvider } from "styled-components";
import { blue } from "./themes/blue.js";
import { yellow } from "./themes/yellow.js";

export default function App() {
  const [theme, setTheme] = useState(blue);

  const changeTheme = () => {
    setTheme(theme.title === "yellow" ? blue : yellow);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Home changeTheme={changeTheme} />
          <Blog />
          <Donation changeTheme={changeTheme} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}