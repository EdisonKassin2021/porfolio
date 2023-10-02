import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { BASE_ROUTE } from "./constants";
import App from "../App";
import Layout from "./Layout";
import Profils from "../pages/Profils";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Blogs from "../pages/Blogs";
import CustomCV from "../pages/CV";
import Contacts from "../pages/Contacts";
import FormationForm from "../pages/CV/Formations/FormationForm";
import CreateForm from "../pages/CV/Formations/CreateForm";
import EditForm from "../pages/CV/Formations/EditForm";
import LoginScreen from "../pages/Login/LoginScreen";
import _ from "lodash";
import ScreenOutlet from "../pages/ScreenOutlet";
import BlogsForm from "../pages/Blogs/BlogsForm";
import Home from "../pages/Accueil/Home";
import Maintenance from "../pages/Maintenance/Maintenance";
import Dashboard from "../pages/Accueil";
import { useScreenSize } from "../hooks/useScreenSize";

const RouteGroups = () => {
  const { pathname } = useLocation();
  const screen = useScreenSize();
  return (
    <Layout
      hidden={
        _.includes(pathname, "/login") ||
        _.includes(pathname, "/accueil") ||
        _.includes(pathname, "/maintenance")
      }
    >
      <Routes>
        <Route
          path={`${BASE_ROUTE}`}
          index
          element={<Navigate to={`${BASE_ROUTE}/accueil`} />}
        />

        <Route path={`${BASE_ROUTE}/login`} element={<LoginScreen />} />
        <Route path={`${BASE_ROUTE}/accueil`} element={<Home />} />
        <Route path={`${BASE_ROUTE}/maintenance`} element={<Maintenance />} />

        <Route path={BASE_ROUTE} element={<App />}>
          {/* <Route path="home/voir-plus" element={<Accueil />} /> */}

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profils" element={<Profils />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<Contacts />} />

          <Route path="blogs" element={<ScreenOutlet />}>
            <Route path="" element={<Blogs />} />
            {!_.includes(["xs", "sm", "md"], screen) && (
              <Route path="create" element={<BlogsForm />} />
            )}
            {!_.includes(["xs", "sm", "md"], screen) && (
              <Route path="edit/:blog_id" element={<BlogsForm />} />
            )}
          </Route>

          <Route path="cv" element={<CustomCV />} />
          <Route path="cv/formation" element={<FormationForm />}>
            <Route path="create" element={<CreateForm />} />
            <Route path="edit/:formation_id" element={<EditForm />} />
          </Route>
        </Route>
      </Routes>
    </Layout>
  );
};

export default RouteGroups;
