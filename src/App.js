import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./component/pages/LoginPage";
import AdminPanel from "./component/pages/AdminPanel";
import Promotions from "./NavBar/promotions/Promotions";

const App = () => (
  <div>
    <Route path="/" exact component={LoginPage} />
    <Route path="/AdminPanel" exact component={AdminPanel} />
    <Route path="/AdminPanel/Promotions" exact component={Promotions} />
  </div>
);

export default App;
