import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute"
import Forms from "./components/Forms/Forms"

class App extends  React.Component {
  render(){
      return (
        <Router>
          <div className="app">
            <Switch>
               <PrivateRoute exact path="/" component={Forms}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
