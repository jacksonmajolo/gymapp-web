import { Outlet } from "react-router-dom";
import "./index.scss";
import { useAuth } from "@admin/contexts/AuthContext";

export const Template = () => {
  const { user } = useAuth();

  return (
    <div className="admin-template">
      <h1>Admin</h1>
      {user && <p><b>id:</b> {user.id}<br/><b>username:</b> {user.username}<br/><b>email:</b> {user.email}<br/><b>roles:</b> {user.roles.join(", ")}<br/><b>permissions:</b> {user.permissions.join(", ")}</p>}
      <Outlet />
    </div>
  );
};
