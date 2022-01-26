import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setsReducer } from "../reducers/sets";
import { miniReducer } from "../reducers/mini";
import { partsReducer } from "../reducers/parts";
import { favReducer } from "../reducers/favorite";
import { ReduxStore } from "../../types/reduxStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["fav"], // only navigation will be persisted
};

export const initialState: ReduxStore = {
  sets: {
    data: [],
    error: false,
    loading: true,
  },
  minifigs: {
    data: [],
    error: false,
    loading: true,
  },
  parts: {
    data: [],
    error: false,
    loading: true,
  },
  fav: {
    liked: [],
  },
};

const rootReducer = combineReducers({
  sets: setsReducer,
  parts: partsReducer,
  minifigs: miniReducer,
  fav: favReducer,
});

const configPersist = persistReducer(persistConfig, rootReducer);

export const configStore = createStore(
  configPersist,
  initialState,
  process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(thunk)
      )
    : compose(applyMiddleware(thunk))
);
export const persistor = persistStore(configStore);
export default { configStore, persistor };
