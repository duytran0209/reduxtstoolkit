import { useAppDispatch } from "app/hooks";
import { cityActions } from "features/city/citySlice";
import React, { useEffect } from "react";
import { Route, Routes, useRouteMatch } from "react-router-dom";
import AddEditPage from "./pages/AddEditPage";
import ListPage from "./pages/ListPage";

export default function StudentFeature() {
  const match = useRouteMatch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cityActions.fetchCityList());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={match.path}>
        <ListPage />
      </Route>

      <Route path={`${match.path}/add`}>
        <AddEditPage />
      </Route>

      <Route path={`${match.path}/:studentId`}>
        <AddEditPage />
      </Route>
    </Routes>
  );
}