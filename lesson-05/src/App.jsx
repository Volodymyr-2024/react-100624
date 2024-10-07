import "./App.css";
import Header from "./components/Header/Header";
import CategoryList from "./components/CategoryList/CategoryList";
import JobSearch from "./components/JobSearch/JobSearch";
import Footer from "./components/Footer/Footer";
import BrandList from "./components/BrandList/BrandList";
import JobList from "./components/JobList/JobList";

function App() {
  return (
    <>
      <Header />
      <JobSearch />
      <BrandList />
      <CategoryList />
      <JobList />
      <Footer />
    </>
  );
}

export default App;
