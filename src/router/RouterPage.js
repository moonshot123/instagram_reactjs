import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "../component/organism/Pageheader";
import Main from "../component/page/Main";
import Login from "../component/page/Login";
import { React } from "react";

const RouterPage = () => {
  return (
    <>
      <BrowserRouter>
        <PageHeader />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/main" exact>
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default RouterPage;
