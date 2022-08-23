import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import uiSlice from "../slices/uiSlice";
import dashboardReducer from "features/dashboard/dashboardSlice";
import studentReducer from "features/student/studentSlice";
import createSagaMiddleware from "redux-saga";
import cityReducer from "../features/auth/city/CitySlice";
import authReducer from "features/auth/authSlice";
import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  student: studentReducer,
  city: cityReducer,
  ui: uiSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
