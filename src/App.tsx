import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StaticView from "./components/home/StaticView";
import Footers from "./components/nav-foot/Footers";
import TopNav from "./components/nav-foot/TopNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Info from "./components/info/Info";
import Login from "./components/info/Login";
import MiniFigs from "./components/home/MiniFigs";
import Sets from "./components/home/Sets";
import SetDetail from "./components/home/SetDetail";
import MyFav from "./components/home/MyFav";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <Route exact path="/" component={StaticView} />
        <Route exact path="/" component={MiniFigs} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sets" component={Sets} />
        <Route exact path="/favourite" component={MyFav} />
        <Route
          exact
          path="/detail/:id"
          render={(routes) => <SetDetail {...routes} />}
        />
        <Footers />
      </Router>
    </div>
  );
}

export default App;
