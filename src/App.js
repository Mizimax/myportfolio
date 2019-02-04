import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Navbar } from "./components/shared/Navbar";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";

class App extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      location: {}
    };
    console.log(this.props);
  }

  componentWillMount() {
    this.setState({ location: this.props.location });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    this.setState({ location: this.props.location });
  }

  render() {
    return (
      <div>
        <Navbar location={this.state.location} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/exp" component={Experience} />
          <Route component={() => <div>Not found</div>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(props => <App {...props} />);
