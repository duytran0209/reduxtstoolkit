import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAppDispatch } from "app/hook";
import { authActions } from "features/auth/authSlice";
import styled from "styled-components";

const HeaderStyled = styled.div`
  flex-grow: 1;
  .title {
    flex-grow: 1;
  }
`;
export function Header() {
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(authActions.logout());
  };

  return (
    <HeaderStyled>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
            Student Management
          </Typography>

          <Button color="inherit" onClick={handleLogoutClick}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </HeaderStyled>
  );
}
