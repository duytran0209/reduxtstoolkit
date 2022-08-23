import React, { useEffect } from "react";
import StatisticItem from "./components/StatisticItem";
import StudentRankingList from "./components/StudentRankingList";
import Widget from "./components/Widget";
import Box from "@mui/material/Box";
import {
  dashboardActions,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCityList,
} from "./dashboardSlice";
import { Grid, LinearProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import styled from "styled-components";

const DashboardStyled = styled.div`
  .root {
    position: relative;
    padding-top: 8px;
  }
  .loading {
    position: absolute;
    top: -8px;
    width: 100%;
  }
`;

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);

  return (
    <DashboardStyled>
      <Box className="root">
        {loading && <LinearProgress className="loading" />}

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<PeopleAlt fontSize="large" color="primary" />}
              label="male"
              value={statistics.maleCount}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<CommentIcon fontSize="large" color="primary" />}
              label="female"
              value={statistics.femaleCount}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<ChatBubbleIcon fontSize="large" color="primary" />}
              label="mark >= 8"
              value={statistics.highMarkCount}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<LinearScaleIcon fontSize="large" color="primary" />}
              label="mark <= 5"
              value={statistics.lowMarkCount}
            />
          </Grid>
        </Grid>

        <Box mt={5}>
          <Typography variant="h4">All Students</Typography>

          <Box mt={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <Widget title="Student with highest mark">
                  <StudentRankingList studentList={highestStudentList} />
                </Widget>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Widget title="Student with lowest mark">
                  <StudentRankingList studentList={lowestStudentList} />
                </Widget>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box mt={5}>
          <Typography variant="h4">Rankings by city</Typography>

          <Box mt={2}>
            <Grid container spacing={3}>
              {rankingByCityList.map((ranking) => (
                <Grid key={ranking.cityId} item xs={12} md={6} lg={3}>
                  <Widget title={ranking.cityName}>
                    <StudentRankingList studentList={ranking.rankingList} />
                  </Widget>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </DashboardStyled>
  );
}
