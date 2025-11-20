import { Route, Routes } from "react-router-dom";
import Home from "@client/pages/Home";
import NotFound from "@client/pages/NotFound";
import Template from "@client/components/Template";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
