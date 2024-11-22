import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import ContactsPage from "./pages/ContactsPage";
import CartContextProvider from "./context/CartContextProvider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Main>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
