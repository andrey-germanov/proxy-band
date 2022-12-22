import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { postAPI } from "./Services/PostService";
import { userAPI } from "./Services/UserService";
import { albumAPI } from "./Services/AlbumService";

const rootReducer = combineReducers({
  [postAPI.reducerPath]: postAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [albumAPI.reducerPath]: albumAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(postAPI.middleware)
        .concat(userAPI.middleware)
        .concat(albumAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
