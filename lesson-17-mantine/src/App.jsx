// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { Container, MantineProvider, Title, Text } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

export default function App() {
  return (
    <MantineProvider>
      <Container>
        <Title order={1}>Hello, Mantine!</Title>
        <Text>Hello from Mantine </Text>
        <DatePickerInput
          type="range"
          label="Pick date"
          placeholder="Pick date"
          renderDay={(date) => {
            const day = date.getDate();
            if (day === 1) {
              return <div style={{ color: "red" }}>{day}</div>;
            }

            return <div>{day}</div>;
          }}
        />
      </Container>
    </MantineProvider>
  );
}
