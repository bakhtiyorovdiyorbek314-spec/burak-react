import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

//aynan Homepage ni qolga olamiz:
const selectProductsPage = (state: AppRootState) => state.productsPage;

// data ni retrive orqali qabul qilamiz
export const retrieveRestaurant = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.restaurant,
);

export const retrieveChosenProduct = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.chosenProduct,
);

export const retrieveProducts = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.products,
);
