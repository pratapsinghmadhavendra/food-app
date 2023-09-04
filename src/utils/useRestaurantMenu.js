// creating useRestaurantMenu hook to fetch data from the API. 

import { useEffect, useState } from "react";
import { menuApi } from "./constants";

const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

  useEffect (()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data  = await fetch(menuApi + resId)
    const json = await data.json();

    setResInfo(json);
  }

    return resInfo;
}

export default useRestaurantMenu;