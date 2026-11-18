import { Member } from "./member";
import { Product } from "./product";

/* REACT APP STATE =>1)(current use) Screen component based type integration / 2) Target oriented type integration*/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
}

/* HOMEPAGE SC => define homepage state type */
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/* PRODUCTS PAGE SC => define productspage state type */
/* ORDERS PAGE SC => define orderspage state type */
