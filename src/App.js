import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StaticView from "./components/home/StaticView";
import Footers from "./components/nav-foot/Footers";
import TopNav from "./components/nav-foot/TopNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Info from "./components/info/Info";
import Login from "./components/info/Login";
import MiniFigs from "./components/home/MiniFigs";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <Route exact path="/" component={StaticView} />
        <Route exact path="/" component={MiniFigs} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/login" component={Login} />
        <Footers />
      </Router>
    </div>
  );
}

export default App;
