import { createBrowserHistory } from "history";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { connectRouter } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaMiddleware, rootSaga } from "./sagas/index.saga";

export const history = createBrowserHistory();

const reducer = combineReducers({
  router: connectRouter(history),
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
