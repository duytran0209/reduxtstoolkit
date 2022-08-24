import { ListParams, Student } from "models";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import StudentFilters from "../components/StudentFilters";
import StudentTable from "../components/StudentTable";
import { useAppSelector, useAppDispatch } from "../../../app/hook";
import { selectCityMap, selectCityList } from "../../auth/city/CitySlice";
import {
  selectStudentList,
  selectStudentPagination,
  selectStudentFilter,
  studentActions,
  selectStudenLoading,
} from "../studentSlice";
import studentApi from "../../../api/studentApi";
import Box from "@mui/material/Box";
import { LinearProgress, Typography, Button, Pagination } from "@mui/material";
import styled from "styled-components";

const ListPageStyled = styled.div`
  .root {
    position: relative;
    padding-top: 8px;
  }
  .title-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
  .loading {
    position: absolute;
    top: -8px;
    width: 100%;
  }
`;

export default function ListPage() {
  const navigate = useNavigate();

  const studentList = useAppSelector(selectStudentList);
  const pagination = useAppSelector(selectStudentPagination);
  const filter = useAppSelector(selectStudentFilter);
  const loading = useAppSelector(selectStudenLoading);
  const cityMap = useAppSelector(selectCityMap);
  const cityList = useAppSelector(selectCityList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  const handlePageChange = (e: any, page: number) => {
    dispatch(
      studentActions.setFilter({
        ...filter,
        _page: page,
      })
    );
  };

  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(studentActions.setFilterWithDebounce(newFilter));
  };

  const handleFilterChange = (newFilter: ListParams) => {
    dispatch(studentActions.setFilter(newFilter));
  };

  const handleRemoveStudent = async (student: Student) => {
    try {
      await studentApi.remove(student?.id || "");

      toast.success("Remove student successfully!");

      const newFilter = { ...filter };
      dispatch(studentActions.setFilter(newFilter));
    } catch (error) {
      console.log("Failed to fetch student", error);
    }
  };

  const handleEditStudent = async (student: Student) => {
    navigate("/admin/students/:studentId");
  };

  return (
    <ListPageStyled>
      <Box className="root">
        {loading && <LinearProgress className="loading" />}

        <Box className="title-container">
          <Typography variant="h4">Students</Typography>
          <Link to="/admin/student/add" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Add new student
            </Button>
          </Link>
        </Box>

        <Box mb={3}>
          <StudentFilters
            filter={filter}
            cityList={cityList}
            onChange={handleFilterChange}
            onSearchChange={handleSearchChange}
          />
        </Box>

        <StudentTable
          studentList={studentList}
          cityMap={cityMap}
          onEdit={handleEditStudent}
          onRemove={handleRemoveStudent}
        />

        <Box my={2} display="flex" justifyContent="center">
          <Pagination
            color="primary"
            count={Math.ceil(pagination._totalRows / pagination._limit)}
            page={pagination?._page}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </ListPageStyled>
  );
}
