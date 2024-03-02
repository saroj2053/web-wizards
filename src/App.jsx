import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GoToTopButton from "./components/GoToTopButton/GoToTopButton";
import Header from "./components/Header/Header";
import HeaderImage from "./components/HeaderImage/HeaderImage";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import DetailTeamInfo from "./components/TeamInfo/DetailTeamInfo";
import TeamInfo from "./components/TeamInfo/TeamInfo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <HeaderImage />
        <About />
        <ProductShowcase />
        <TeamInfo />
        <Routes>
          <Route path="/detail" element={<DetailTeamInfo />} />
        </Routes>
        <Contact />
        <Footer />
        <GoToTopButton />
      </>
    </Router>
  );
};

export default App;
