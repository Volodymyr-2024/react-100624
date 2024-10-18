import LangSwitcher from "./LangSwitcher";
import { LanguageProvider } from "./LanguageContext";
import Text from "./Text";

function App() {
  return (
    <LanguageProvider>
      <Text />
      <LangSwitcher />
    </LanguageProvider>
  );
}

export default App;
