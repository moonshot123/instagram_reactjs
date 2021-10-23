import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import PageHeader from "../component/organism/Pageheader";
import Main from "../component/page/Main";
import Login from "../component/page/Login";
import { React, useEffect, useState } from "react";

const Router = () => {
  const [visible, setvisible] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setvisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
      </div>

      <BrowserRouter>
        {visible && <PageHeader />}
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

export default Router;
