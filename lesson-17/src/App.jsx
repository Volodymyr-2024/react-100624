import {
  createTheme,
  Divider,
  ThemeProvider,
  Stack,
  Checkbox,
  CssBaseline,
} from "@mui/material";

import Buttons from "./components/Buttons";
import CustomButton from "./components/CustomButton";
import EmotionButton from "./components/EmotionButton";
import EmotionToggleButton from "./components/EmotionToggleButton";
import { useState } from "react";

const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#28536B",
    },
    secondary: {
      main: "#C2948A",
    },
  },
});

const redTheme = createTheme({
  palette: {
    primary: {
      main: "#69140E",
    },
    secondary: {
      main: "#D58936",
    },
    background: {
      default: "#F6EFA6",
    },
  },
  spacing: 16,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [theme, setTheme] = useState(blueTheme);

  function toggleTheme() {
    setTheme((prevTheme) => {
      if (prevTheme === blueTheme) {
        return redTheme;
      } else if (prevTheme === redTheme) {
        return darkTheme;
      } else {
        return blueTheme;
      }
    });
  }

  return (
    <Stack direction="row" spacing={2}>
      <button onClick={toggleTheme}>Toggle</button>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Buttons />
      </ThemeProvider>

      <CustomButton>Custom button</CustomButton>
      <EmotionButton>Emotion button</EmotionButton>
      <EmotionToggleButton>Emotion toggle button</EmotionToggleButton>
      <Buttons />
    </Stack>
  );
}

export default App;
