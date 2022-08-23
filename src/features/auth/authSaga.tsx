import { PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
  const navigate = useNavigate();

  try {
    yield delay(1000);

    localStorage.setItem("access_token", "fake_token");
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: "Easy Frontend",
      })
    );

    // redirect to admin page
    yield put(navigate("/admin/dashboard"));
  } catch (error) {
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem("access_token");
  // redirect to login page
  yield put(navigate("/login"));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
