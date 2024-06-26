import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Parallax from "./components/navbar/parallax/Parallax";
import Links from "./components/navbar/sidebar/links/Links";

const App = () => {
  return <div>
    <section id="Главная">
      <Navbar />
      <Hero />
      </section>
    <section id="О нас"><Parallax  type="about"/></section>
    <section>Parallax</section>
    <section id="Частые вопросы"><Parallax type="questions"/></section>
    <section>Portfolio1</section>
    <section id="Контакты">Contact</section>

  </div>;
};

export default App;
