import { ThemeProvider } from "@material-ui/core/styles";
import Navigation from "./components/Navigation";
import GlobalLoading from "./components/UI/GlobalLoading";
import Message from "./components/UI/Message";
import routerConfig from "./configs/routerConfig";
import theme from "./configs/themeConfig";
import useTheme from "./hooks/useTheme";
import useVoice from "hooks/useVoice";
import NotFoundPage from "./pages/NotFound";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Element } from "react-scroll";
import Contact from "./components/Contacts";

import userApi from "./apis/userApi";
import Sidebar from "components/Sidebar";
import { getUserInfo } from "./redux/actions/authAction";
const { routes, routesAdmin, renderRoutes } = routerConfig;

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { isAuth, role } = useSelector((state) => state.authReducer);

  useTheme();
  useVoice();

  useEffect(() => {
    const getUser = async () => {
      const res = await userApi.getUserInfo();
      dispatch(getUserInfo(res));
    };
    getUser();
    setLoading(false);
    return () => {};
  }, [dispatch]);


  const LayoutUser = () => {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="dynonary-app">
            <Element name="scrollTop" />
            <Navigation />
            <Suspense fallback={<GlobalLoading />}>
              <Switch>
                {renderRoutes(routes, isAuth, role)}
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
            </Suspense>
            <div id="_overlay"></div>
            <Message />
          </div>
        </Router>
      </ThemeProvider>
    );
  };
  const LayoutAdmin = () => {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="dynonary-app">
            <Element name="scrollTop" />
            <Navigation />
            <div style={{display: "flex"}}>
              <Sidebar />
              <Suspense fallback={<GlobalLoading />}>
                <Switch>
                  {renderRoutes(routesAdmin, isAuth, role)}
                  <Route>
                    <NotFoundPage />
                  </Route>
                </Switch>
              </Suspense>
            </div>
            <div id="_overlay"></div>
            <Message />
          </div>
        </Router>
      </ThemeProvider>
    );
  };

  return (
    <>
      {loading ? (
        <GlobalLoading />

      ) : !window.location.href.includes("admin") ? (
        <LayoutUser />
      ) : (
        <LayoutAdmin />
      )}
    </>
  );
}

export default App;
