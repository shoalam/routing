import Navbar from "./components/navbar";
import { Home } from "./components/home";
// import Products from "./components/products";
// import Admin from "./components/admin";
// import Posts from "./components/posts";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from "react-router-dom";
import Profile from "./components/profile";
import Issues from "./components/issues";
import Marketplace from "./components/marketplace";
import Username from "./components/username";
import Repositories from "./components/repositories";
import { CliArguments } from "./components/cliarguments";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path="/home"
          render={(props) => <Home selected={true} {...props} />}
        />
        <Route path="/profile" component={Profile} />
        <Route path="/profile/:username?" component={Username} />
        <Route path="/username" component={Username} />
        <Route path="/issues" component={Issues} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/marketplace/cliarguments" component={CliArguments} />
        <Route path="/cliarguments" component={CliArguments} />
        <Route path="/repositories" component={Repositories} />
        <Route path="/notFound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </>
  );
}

export default App;
