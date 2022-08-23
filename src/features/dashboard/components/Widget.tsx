import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export interface WidgetProps {
  title: string;
  children: any;
}

const WidgetStyled = styled.div`
  padding: 16px;
  border: 1px solid #e0e0e0;
`;
export default function Widget({ title, children }: WidgetProps) {
  return (
    <WidgetStyled>
      <Paper className="root">
        <Typography variant="button">{title}</Typography>

        <Box mt={2}>{children}</Box>
      </Paper>
    </WidgetStyled>
  );
}
