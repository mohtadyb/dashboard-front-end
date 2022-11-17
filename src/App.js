import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Ports from "./pages/ports";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/table.css";
import "./assets/styles/responsive.css";
import PortDetails from "./pages/port_details";
import React from "react";

export const PortContext = React.createContext()
const port = {name:"Osman Digna"}

// mhb hassan ali
function App() {
  return (
      <PortContext.Provider value={port}>
        <div className="App">
          <Switch>
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/sign-in" exact component={SignIn} />
            <Main>
              <Route exact path="/dashboard" component={Home} />
              <Route exact path="/ports" component={Ports} />
              <Route exact path="/port_details/:portId/:port_name" component={PortDetails} />
              <Route exact path="/billing" component={Billing} />
              <Route exact path="/rtl" component={Rtl} />
              <Route exact path="/profile" component={Profile} />
              <Redirect from="*" to="/dashboard" />
            </Main>
          </Switch>
        </div>
      </PortContext.Provider>
  );
}

export default App;