import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Mywork from "./components/mywork/Mywork";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
