import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/data/types/screen";
import HomePage from ".";

//aynan Homepage ni qolga olamiz:
const selecthomePage = (state: AppRootState) => state.homePage;

// data ni retrive orqali qabul qilamiz
export const retrievePopularDishes = createSelector(
  selecthomePage,
  (HomePage) => HomePage.popularDishes,
);

export const retrieveNewDishes = createSelector(
  selecthomePage,
  (HomePage) => HomePage.newDishes,
);

export const retrieveTopUsers = createSelector(
  selecthomePage,
  (HomePage) => HomePage.topUsers,
);
