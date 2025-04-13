import "./App.css";
import { Nav } from "./component/Nav";
import { Home } from "./component/Home";
import { Free } from "./component/Fav";
import { Clients } from "./component/Clients";
import { SignUp } from "./component/Footer";
import { Services } from "./component/Services";
import { Support } from "./component/Support";

function App() {
  return (
    <>
      <div className="home-bg">
        <Nav />
        <Home />
        <Free />
        <Clients />
        <Services/>
        <Support />
        <SignUp />
        
      </div>
    </>
  );
}

export default App;
