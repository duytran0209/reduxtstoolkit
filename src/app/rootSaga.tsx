import { all } from "redux-saga/effects";

function* helloSaga() {
  yield all([
    console.log("hello saga"),
    // ... other sagas
  ]);
}

export default function* rootSaga() {
  console.log("root saga");
  yield all([helloSaga()]);
  // chay tat ca saga trong function rootSaga; rootSaga chi chay 1 lan
}
