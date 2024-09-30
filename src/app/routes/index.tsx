import {
  Routes as Switch,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { Home, PagWebs } from "../pages";
import { Projetos } from "../pages/Projetos/Projetos";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/pagwebs" element={<PagWebs />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};
