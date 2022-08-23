import cityApi from "api/cityApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { ListResponse } from "../../../models/common";
import { City } from "../../../models/city";
import { cityActions } from "./CitySlice";

function* fetchCityList() {
  try {
    const response: ListResponse<City> = yield call(cityApi.getAll);
    yield put(cityActions.fetchCityListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch city list", error);
    yield put(cityActions.fetchCityListFailed());
  }
}

export default function* citySaga() {
  yield takeLatest(cityActions.fetchCityList.type, fetchCityList);
}
