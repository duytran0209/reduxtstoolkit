import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SideBarStyled = styled.div`
  width: 100%;
  max-width: 360px;
  background-color: #eee;
  .link {
    color: inherit;
    text-decoration: none;
    &.active > div {
      background-color: #eee;
    }
  }
`;
export function Sidebar() {
  return (
    <SideBarStyled>
      <List component="nav" aria-label="main mailbox folders">
        <NavLink to="/admin/dashboard" className="link">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </NavLink>

        <NavLink to="/admin/students" className="link">
          <ListItem button>
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
        </NavLink>
      </List>
    </SideBarStyled>
  );
}
