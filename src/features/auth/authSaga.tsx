import { PayloadAction } from "@reduxjs/toolkit";
import { fork, take } from "redux-saga/effects";
import { LoginPayload, authActions } from "./authSlice";
function* handleLoggin(payload: LoginPayload) {
  console.log("handle login", payload);
}
function* handleLogout() {
  console.log("handle logout");
}
function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(
      authActions.login.type
    );
    yield fork(handleLoggin, action.payload);
    yield take(authActions.logout.type);
    yield fork(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}