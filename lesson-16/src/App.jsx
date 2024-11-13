import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import RegistrationForm from "./components/RegistrationForm";
import CssBaseline from "@mui/material/CssBaseline";
import ToDo from "./components/ToDo";
import { HorizontalRule } from "@mui/icons-material";
import { Divider } from "@mui/material";

function App() {
  return (
    <div>
      <CssBaseline />
      <ResponsiveAppBar />
      <Container>
        <Stack mt={2} spacing={2}>
          <ToDo />
          <Divider />
          <RegistrationForm />
          <Button variant="contained">Click me!!!!</Button>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
