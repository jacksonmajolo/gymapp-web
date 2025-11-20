import { Outlet } from "react-router-dom";
import "./index.scss";

export const Template = () => {
  return (
    <div className="admin-template">
      <h1>Admin</h1>
      
      <Outlet />
    </div>
  );
};
