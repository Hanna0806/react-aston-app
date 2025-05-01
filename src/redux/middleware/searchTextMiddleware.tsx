import { Middleware } from "@reduxjs/toolkit";
import { addSearchText, removeSearchText } from "../slices/searchTextSlice";
import { STORAGE_KEYS } from "../../constants/storageKeys";

export const searchTextMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (addSearchText.match(action)) {
    localStorage.setItem(STORAGE_KEYS.SEARCH_REQUEST, action.payload);
  }

  if (removeSearchText.match(action)) {
    localStorage.removeItem(STORAGE_KEYS.SEARCH_REQUEST);
  }

  return result;
};