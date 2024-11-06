import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  return (
    <>
      <Header />
      <Main>
        <NoteForm />
        <NoteList />
      </Main>
      <Footer />
    </>
  );
}

export default App;
