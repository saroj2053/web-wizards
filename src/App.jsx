import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GoToTopButton from "./components/GoToTopButton/GoToTopButton";
import Header from "./components/Header/Header";
import HeaderImage from "./components/HeaderImage/HeaderImage";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";

import TeamInfo from "./components/TeamInfo/TeamInfo";

const App = () => {
  return (
    <>
      <Header />
      <HeaderImage />
      <About />
      <ProductShowcase />
      <TeamInfo />
      <Contact />
      <Footer />
      <GoToTopButton />
    </>
  );
};

export default App;
