import React, { memo, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/constants.jsx";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "../src/app/hook";
import Home from "./pages/Home";
import LoginPage from "./features/auth/pages/LoginPage";
import { useAppDispatch } from "./app/hook";
import { Button } from "@mui/material";
import { authActions } from "./features/auth/authSlice";
const App = memo(() => {
  const { theme } = useAppSelector((state) => state.ui);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Suspense fallback={<></>}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(authActions.logout())}
        >
          Logout
        </Button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
});

export default App;
