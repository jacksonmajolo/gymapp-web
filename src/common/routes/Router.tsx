import { Route, Routes } from "react-router-dom";
import AdminApp from "@admin/components/App";
import ClientApp from "@client/components/App";

export const Router = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="/*" element={<ClientApp />} />
    </Routes>
  );
};
