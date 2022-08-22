import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Paper elevation={1} className="box">
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box>
          <Button fullWidth variant="contained" color="primary">
            Fake Login
          </Button>
        </Box>
      </Paper>
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-flow: row nowrap;
  .box {
    padding: 32px;
  }
  h1 {
    margin-bottom: 20px;
  }
`;

export default LoginPage;
