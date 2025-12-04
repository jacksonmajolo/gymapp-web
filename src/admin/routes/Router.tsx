import { Route, Routes } from "react-router-dom";
import Home from "@admin/pages/Home";
import CountryList from "@admin/pages/Country/CountryList";
import CountryForm from "@admin/pages/Country/CountryForm";
import NotFound from "@admin/pages/NotFound";
import Template from "@admin/components/Template";
import ProtectedRoute from "@common/components/ProtectedRoute";
import StateForm from "@admin/pages/State/StateForm";
import StateList from "@admin/pages/State/StateList";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route index element={<Home />} />
        <Route path="countries" element={
            <ProtectedRoute guardName="admin" permission="countries.view">
              <CountryList />
            </ProtectedRoute>
          }
        />
        <Route path="countries/create" element={
            <ProtectedRoute guardName="admin" permission="countries.create">
              <CountryForm />
            </ProtectedRoute>
          }
        />
        <Route path="countries/:id/edit" element={
            <ProtectedRoute guardName="admin" permission="countries.update">
              <CountryForm />
            </ProtectedRoute>
          }
        />
        <Route path="states" element={
            <ProtectedRoute guardName="admin" permission="states.view">
              <StateList />
            </ProtectedRoute>
          }
        />
        <Route path="states/create" element={
            <ProtectedRoute guardName="admin" permission="states.create">
              <StateForm />
            </ProtectedRoute>
          }
        />
        <Route path="states/:id/edit" element={
            <ProtectedRoute guardName="admin" permission="states.update">
              <StateForm />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
