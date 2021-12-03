import React from "react";
import { ROUTES } from "../constants";
import { Route } from "react-router";
import ActivationEmailPage from "../pages/ActivationEmail";
import ResetPasswordPage from "../pages/ResetPassword";
import LogoutPage from "../pages/Logout";
import WelcomePage from "../pages/Welcome";
const HomePage = React.lazy(() => import("../pages/Home"));
const RegisterPage = React.lazy(() => import("../pages/Register"));
const LoginPage = React.lazy(() => import("../pages/Login"));
const ForgotPasswordPage = React.lazy(() => import("../pages/ForgotPassword"));
const ProfilePage = React.lazy(() => import('../pages/Profile'));
const AdminPage = React.lazy(() => import('../pages/Admin'));
const GrammarAdminPage = React.lazy(() => import("../pages/GrammarAdmin"));
const ListeningAdminPage = React.lazy(() => import("../pages/ListeningAdmin"));
const QuizAdminPage = React.lazy(() => import("../pages/QuizAdmin"));
const WordAdminPage = React.lazy(() => import("../pages/WordAdmin"));
const UserAdminPage = React.lazy(() => import("../pages/UserAdmin"));
const ListeningPage = React.lazy(() => import("../pages/Listening"));
const ListeningDetailPage = React.lazy(() => import("../pages/ListeningDetail"));
const AddWordPage = React.lazy(() => import("../pages/AddWord"));
const EditWordPage = React.lazy(() => import("../pages/EditWord"));
const IPAPage = React.lazy(() => import("../pages/IPA"));
const IPADetailPage = React.lazy(() => import("../components/IPA/DetailIPA"));
const UserDetailPage = React.lazy(() => import("../pages/UserDetail"));
const WordTopicPage = React.lazy(() => import("../pages/WordTopic"));
const GamePage = React.lazy(() => import("../pages/Game"));
const WordListByTopicPage = React.lazy(() => import("../pages/WordListByTopic"));


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
    path: ROUTES.FORGOT_PASSWORD,
    exact: true,
    isProtect: false,
    component: () => <ForgotPasswordPage />,
  },
  {
    path: ROUTES.ACTIVATION_EMAIL,
    exact: true,
    isProtect: false,
    component: () => <ActivationEmailPage />,
  },
  {
    path: ROUTES.RESET_PASSWORD,
    exact: true,
    isProtect: false,
    component: () => <ResetPasswordPage />,
  },
  {
    path: ROUTES.PROFILE,
    exact: true,
    isProtect: true,
    component: () => <ProfilePage />,
  },
  {
    path: ROUTES.LOGOUT,
    exact: true,
    isProtect: false,
    component: () => <LogoutPage />,
  },
  {
    path: ROUTES.LISTENING,
    exact: true,
    isProtect: true,
    component: () => <ListeningPage />,
  },
  {
    path: ROUTES.ADMIN,
    exact: true,
    isProtect: true,
    component: () => <AdminPage />,
  },
  {
    path: ROUTES.GRAMMAR_ADMIN,
    exact: true,
    isProtect: true,
    component: () => <GrammarAdminPage />,
  },
  {
    path: ROUTES.LISTENING_ADMIN,
    exact: true,
    isProtect: true,
    component: () => <ListeningAdminPage />
  },
  {
    path: ROUTES.LISTENING_DETAIL,
    exact: true,
    isProtect: true,
    component: () => <ListeningDetailPage />,
  },
  {
    path: ROUTES.QUIZ_ADMIN,
    exact: true,
    isProtect: true,
    component: () => <QuizAdminPage />
  },
  {
    path: ROUTES.WORD_ADMIN,
    exact: true,
    isProtect: true,
    component: () => <WordAdminPage />
  },
  {
    path: ROUTES.ADD_WORD,
    exact: true,
    isProtect: true,
    component: () => <AddWordPage />
  },
  {
    path: ROUTES.EDIT_WORD,
    exact: true,
    isProtect: true,
    component: () => <EditWordPage />
  },
  {
    path: ROUTES.IPA,
    exact: true,
    isProtect: true,
    component: () => <IPAPage />
  },
  {
    path: ROUTES.IPA_DETAIL,
    exact: true,
    isProtect: true,
    component: () => <IPADetailPage />
  },
  {
    path: ROUTES.USER_ADMIN,
    exact: true,
    isProtect: true,
    component: () => <UserAdminPage />
  },
  {
    path: ROUTES.USER_DETAIL,
    exact: true,
    isProtect: true,
    component: () => <UserDetailPage />
  },
  {
    path: ROUTES.WORD_TOPIC,
    exact: true,
    isProtect: true,
    component: () => <WordTopicPage />
  },
  {
    path: ROUTES.GAME,
    exact: true,
    isProtect: true,
    component: () => <GamePage />
  },
  {
    path: ROUTES.WORD_LIST_BY_TOPIC,
    exact: true,
    isProtect: true,
    component: () => <WordListByTopicPage />
  },
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
