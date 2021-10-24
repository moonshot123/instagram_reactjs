import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import PageHeader from "../component/organism/Pageheader";
import Main from "../component/page/Main";
import Login from "../component/page/Login";
import { React, useEffect, useState } from "react";

const RouterPage = () => {
  const [visible, setvisible] = useState(true);
  console.log(useLocation);

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   console.log("====랜더링 확인====");
  //   if (pathname) {
  //     setvisible(!visible);
  //   }
  // }, [pathname]);

  return (
    <>
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

export default RouterPage;
