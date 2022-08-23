import * as React from "react";
// import Dashboard from "features/dashboard";
// import StudentFeature from "features/student";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Header } from "../common/Header";
import { Sidebar } from "../common/SideBar";

const AdminStyled = styled.div`
  .root {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 240px 1fr;
    grid-template-areas: "header header" "sidebar main";
    min-height: 100vh;
  }
  .header {
    grid-area: header;
  }
  .sidebar {
    grid-area: sidebar;
    border-right: 1px solid ${(props) => props.theme.palette.divider};
    background-color: ${(props) => props.theme.palette.background.paper};
  }
  .main {
    grid-area: main;
    background-color: ${(props) => props.theme.palette.background.paper};
    padding: ${(props) => props.theme.spacing(2, 3)};
  }
`;

export function AdminLayout() {
  return (
    <AdminStyled>
      <Box className="root">
        <Box className="header">
          <Header />
        </Box>

        <Box className="sidebar">
          <Sidebar />
        </Box>

        <Box className="main">
          <Routes>
            <Route path="/admin/dashboard">{/* <Dashboard /> */}</Route>

            <Route path="/admin/students">{/* <StudentFeature /> */}</Route>
          </Routes>
        </Box>
      </Box>
    </AdminStyled>
  );
}
