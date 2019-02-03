import React, { Component } from "react";
import { Navbar } from "./components/shared/Navbar";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";

class App extends React.Component {
  static propTypes = {
    location: React.PropTypes.object.isRequired
  };

  // ...

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/exp" component={Experience} />
          <Route component={() => <div>Not found</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
