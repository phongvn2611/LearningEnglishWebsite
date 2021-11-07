import WelcomePage from "../pages/Welcome";
import React from "react";
import { ROUTES } from "../constants";
import { Route } from "react-router";
const HomePage = React.lazy(() => import("../pages/Home"));
const RegisterPage = React.lazy(() => import("../pages/Register"));
const LoginPage = React.lazy(() => import("../pages/Login"));
const AdminPage = React.lazy(() => import("../pages/Admin"));
const GrammarAdminPage = React.lazy(() => import("../pages/GrammarAdmin"))

const routes = [
  {
    path: ROUTES.WELCOME,
    exact: true,
    isProtect: false,
    component: () => <WelcomePage />,
  },
  {
    path: ROUTES.HOME,
    exact: true,
    isProtect: false,
    component: () => <HomePage />,
  },
  {
    path: ROUTES.LOGIN,
    exact: true,
    isProtect: false,
    component: () => <LoginPage />,
  },
  {
    path: ROUTES.REGISTER,
    exact: true,
    isProtect: false,
    component: () => <RegisterPage />,
  },
  {
    path: ROUTES.ADMIN,
    exact: true,
    isProtect: true,
    component: () => <AdminPage />
  },
  {
    path: ROUTES.GRAMMAR_ADMIN,
    exact: true,
    isProtect: true,
    component: () => <GrammarAdminPage />
  }
];
const renderRoutes = (routes, isAuth = false) => {
  return routes.map((route, index) => {
    const { path, exact, component, isProtect } = route;
    const loginComponent = () => <LoginPage />;
    const componentRender = !isProtect
      ? component
      : isAuth
      ? component
      : loginComponent;

    return (
      <Route
        path={path}
        exact={exact}
        key={index}
        component={componentRender}
      />
    );
  });
};

export default {
  routes,
  renderRoutes,
};
