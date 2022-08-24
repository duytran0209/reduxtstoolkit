import React, { memo, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "../src/app/hook";
import Home from "./pages/Home";
import LoginPage from "./features/auth/pages/LoginPage";
import { darkTheme, lightTheme } from "utils/constants";
import Dashboard from "./features/dashboard/index";
const App = memo(() => {
  const { theme } = useAppSelector((state) => state.ui);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
});

export default App;
