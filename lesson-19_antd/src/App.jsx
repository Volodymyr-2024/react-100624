import { Button, ConfigProvider } from "antd";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2e4057",
            colorInfo: "#2e4057",
            borderRadius: 1,
          },
        }}
      >
        <LoginForm />
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#47ca06",
            borderRadius: 1,
          },
        }}
      >
        <Button>Button</Button>
        <Button color="primary" variant="solid">
          Button
        </Button>
        <Button color="danger" variant="dashed">
          Button
        </Button>
        <Button type="primary">Button</Button>
        <Button type="primary">Button</Button>
      </ConfigProvider>
    </>
  );
}

export default App;
