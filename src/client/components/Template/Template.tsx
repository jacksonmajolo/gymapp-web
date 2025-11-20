import { Outlet } from "react-router-dom";
import "./index.scss";

export const Template = () => {
  return (
    <div className="client-template">
      <h1>Client</h1>
      
      <Outlet />
    </div>
  );
};
