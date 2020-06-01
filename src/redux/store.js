import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import sagas from "./sagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore();
