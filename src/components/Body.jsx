import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


function Body() {
  const [resList, setResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredList, setFilteredList] = useState([]);

  //   Fetch the API using UseEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  function onclickHandeler() {
    const filteredList = resList.filter((res) => res.info.avgRating > 4);
    setFilteredList(filteredList);
  }
  function allRes() {
    fetchData();
  }

  //   Conditional Rendering
  //   if (resList.length ===0) {
  //      return <Shimmer />
  //   }
  // * Above conditional rendering can bbe done by below (ternary operator)

  function inputHandler(event) {
    setSearchText(event.target.value);
  }

  function filterResCards() {
    const filteredList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filteredList);
  }
const onlineStatus = useOnlineStatus();
  if (onlineStatus===false) {
    return <h1>Looks like you are Offline</h1>
  }

  return resList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-pink-30">
      <div className="flex justify-between">
        <div className="search-btn">
          <input className="border shadow-sm px-2 m-1"
            
            placeholder="Search the Restaurant"
            value={searchText}
            onChange={inputHandler}
          />
          <button onClick={filterResCards} className="m-4 px-2 bg-green-200 rounded-lg" >Search</button>
          {/*  */}
        </div>
        <button className="border border-solid m-4 px-2 bg-gray-200 rounded-xl" onClick={onclickHandeler}>
          Top Rated Resataurent
        </button>
        <br></br>
        <button className="border border-solid m-4 px-2 bg-gray-200 rounded-xl"  onClick={allRes}>
          All Resataurents
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredList?.map((resData) => (
            <Link key={resData.info.id} to={"/restaurants/" +resData.info.id} >
          <RestaurentCard  resData={resData.info} />

          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
