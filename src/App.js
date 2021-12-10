import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footers from "./components/nav-foot/Footers";
import TopNav from "./components/nav-foot/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Footers />
    </div>
  );
}

export default App;
