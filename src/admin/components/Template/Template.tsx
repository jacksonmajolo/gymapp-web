import { Outlet } from "react-router-dom";
import "./index.scss";

export const Template = () => {
  return (
    <>
      Admin
      <Outlet />
    </>
  );
};
