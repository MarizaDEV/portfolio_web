import {
  Routes as Switch,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { Home, PagWebs, Projetos } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter basename="portfolio-web">
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/pagwebs" element={<PagWebs />} />

        <Route path="/*" element={<Navigate to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};
