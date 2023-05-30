import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout";
import { routes } from "routes";

export const RoutesComponent = () => (
  <Routes>
    <Route element={<Layout />}>
      {routes.map((route) => (
        <Route key={route.path} index={route.path === "/"} element={route.element} path={route.path} />
      ))}
    </Route>
  </Routes>
);
