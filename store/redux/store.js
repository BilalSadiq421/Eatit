//npm install @reduxjs/toolkit react-redux
//Docs : https://redux-toolkit.js.org/tutorials/quick-start
import { configureStore } from "@reduxjs/toolkit";
import FavouritesReducer from "./favourites-slice";

export const store = configureStore({
  reducer: {
    favouriteMeals: FavouritesReducer,
  },
});
