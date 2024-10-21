import MainComponent from "./components/MainComponent";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <MainComponent />
    </AuthProvider>
  );
}

export default App;
