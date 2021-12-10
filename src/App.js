import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StaticView from "./components/home/StaticView";
import Footers from "./components/nav-foot/Footers";
import TopNav from "./components/nav-foot/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <StaticView />
      <Footers />
    </div>
  );
}

export default App;
