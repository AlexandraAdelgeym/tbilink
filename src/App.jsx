import "./app.scss"
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Links from "./components/navbar/sidebar/links/Links";
import Questions from "./components/questions/Questions";

const App = () => {
  return <div>
    <section id="Главная">
      <Navbar />
      <Hero />
      </section>
    <section id="О нас">
      <About  />
    </section>
    <section id="Частые вопросы">
      <Questions/>
    </section>
    <section id="Контакты">Contact</section>

  </div>;
};

export default App;
