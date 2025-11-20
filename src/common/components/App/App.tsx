import { BrowserRouter } from "react-router-dom";
import Router from "@common/routes";
import "./index.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
