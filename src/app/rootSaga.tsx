import { all } from "redux-saga/effects";
import authSaga from "../features/auth/authSaga";

function* helloSaga() {
  yield all([
    console.log("hello saga"),
    // ... other sagas
  ]);
}

export default function* rootSaga() {
  console.log("root saga");
  yield all([helloSaga(), authSaga()]);
  // chay tat ca saga trong function rootSaga; rootSaga chi chay 1 lan
}
