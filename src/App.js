import "./App.css";
import { Nav } from "./component/Nav";
import { Home } from "./component/Home";
import { Free } from "./component/Free";
import { Clients } from "./component/Clients";
import Super from "./component/Super";
import { Releases } from "./component/Releases";
import { Like } from "./component/Like";
import { SignUp } from "./component/SignUp";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    const registerAnimations = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <>
      <div className="home-bg">
        <Nav />
        <Home />
        <Free />
        <Clients />
        <Super />
        <Releases />
        <Like />
        <SignUp />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
