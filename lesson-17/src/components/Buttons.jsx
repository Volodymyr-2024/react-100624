import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Buttons() {
  return (
    <Stack spacing={1}>
      <Button variant="contained">Default color</Button>
      <Button variant="contained" color="secondary">
        Secondary color
      </Button>
      <Button variant="contained" color="success">
        Success color
      </Button>
      <Button variant="contained" color="warning">
        Warning color
      </Button>
      <Button variant="contained" color="error">
        Error color
      </Button>
      <Button variant="contained" color="info">
        Info color
      </Button>
      <Button
        sx={[
          {
            padding: "10px 20px",
          },
          (theme) => {
            return {
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              color: "white",
            };
          },
        ]}
      >
        Custom button
      </Button>
    </Stack>
  );
}
