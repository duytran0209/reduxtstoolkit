import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AddEditPage from "./pages/AddEditPage";
import ListPage from "./pages/ListPage";
import { useAppDispatch } from "../../app/hook";
import { cityActions } from "../auth/city/CitySlice";

export default function StudentFeature() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cityActions.fetchCityList());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/admin/students">
        <ListPage />
      </Route>

      <Route path="/admin/students/add">
        <AddEditPage />
      </Route>

      <Route path="/admin/students/:studentId">
        <AddEditPage />
      </Route>
    </Routes>
  );
}
