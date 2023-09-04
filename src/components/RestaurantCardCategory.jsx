import React, { useState } from "react";
import CategoryItemList from "./CategoryItemList";

// Direct destructurng happening here insted od writing const {data} = props  just passing {data}
const RestaurantCardCategory = ({ data, showItems, setShowIndex }) => {
//   console.log(data);

// const [showItems, setShowItems] = useState(false);

const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
    

}

  return (
    <div cleas className="w-6/12 mx-auto my-4 bg-gray-50 p-4 " >
    {/* accordian UI */}
     <div className="flex justify-between cursor-pointer" onClick={handleClick}>
      <span className="text-lg font-semibold">{data.title} ({data.itemCards.length})</span>
      <span> 
            ▼
     </span>
     </div>


     {showItems && <CategoryItemList  items = {data.itemCards}/>}
     
    </div>
  );
};

export default RestaurantCardCategory;
