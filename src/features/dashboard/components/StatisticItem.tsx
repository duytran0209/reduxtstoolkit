import * as React from "react";
import { Paper } from "@mui/material";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface StatisticItemProps {
  icon: React.ReactElement;
  label: string;
  value: string | number;
}

const StatisticItemStyled = styled.div`
  .root {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.theme.spacing(2)}px;
    border: 1px solid ${(props) => props.theme.palette.divider};
  }
`;

export default function StatisticItem({
  icon,
  label,
  value,
}: StatisticItemProps) {
  return (
    <StatisticItemStyled>
      <Paper className="root">
        <Box>{icon}</Box>
        <Box>
          <Typography variant="h5" align="right">
            {value}
          </Typography>
          <Typography variant="caption">{label}</Typography>
        </Box>
      </Paper>
    </StatisticItemStyled>
  );
}
