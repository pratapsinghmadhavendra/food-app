import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menuApi } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCardCategory from "./RestaurantCardCategory";

const RestaurantMenu = () => {
  // state variabl
  // const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();
  // get the API data when the new rest page load
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //        menuApi + resId
  //   );
  //   const json = await data.json();
  //    console.log(json, "data");
  //   setResMenu(json);
  //   //  console.log(resMenu, "resmenu");
  // }

  // * using the hook useRestaurantMenu for fetching the data;

  const [showIndex, setShowIndex] = useState(null);

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) {
    return <Shimmer />;
  }
  //  console.log(resMenu, "resmenu");

  const { name, cuisines, costForTwoMessage, areaName } =
    resMenu?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  // console.log("itemCards", resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1>{name}</h1>
      <h5>{areaName}</h5>
      <h5>{costForTwoMessage}</h5>

      <h3> {cuisines.join(" ,")}</h3>

      {categories.map((category, index) => (
      
        <RestaurantCardCategory 
         key = {category?.card?.card.title}
          data= {category?.card?.card}  
          showItems = {index === showIndex ? true:false}
          setShowIndex = {() =>  setShowIndex(index===showIndex? null:index)}
          
        />
       
      ))}
    </div>
  );
};

export default RestaurantMenu;
