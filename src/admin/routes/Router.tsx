import { Route, Routes } from "react-router-dom";
import Home from "@admin/pages/Home";
import CountryList from "@admin/pages/Country/CountryList";
import CountryForm from "@admin/pages/Country/CountryForm";
import { LoginFormPage } from "@admin/pages/Login/LoginForm/LoginFormPage";
import NotFound from "@admin/pages/NotFound";
import Template from "@admin/components/Template";

export const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginFormPage />} />

      <Route element={<Template />}>
        <Route index element={<Home />} />
        <Route path="countries" element={<CountryList />} />
        <Route path="countries/create" element={<CountryForm />} />
        <Route path="countries/:id/edit" element={<CountryForm />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
