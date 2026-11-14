import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/data/types/product";

/**REDUX & SLICE SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes }),
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);

  // 3 Selector:Store => Data(olib foydalanamiz)

  useEffect(() => {
    // 1 Backend server data request=>Data (kirib keldi)
    const result = [
      {
        _id: "6aeb4b8aa059d3694711524d",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Lagman",
        productPrice: 10,
        productLeftCount: 9,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "This is cat",
        productImages: [
          "uploads/products/6df32703-1d1c-46e1-bd03-4b457681dcdc.jpeg",
        ],
        productViews: 1,
        createdAt: "2026-11-04T15:13:14.273Z",
        updatedAt: "2026-11-04T17:55:05.810Z",
        __v: 0,
      },
    ];
    // 2 Slice:Data => Store (joylandi)
    //@ts-ignore
    setPopularDishes(result);
  }, []);

  console.log("popularDishes", popularDishes);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
