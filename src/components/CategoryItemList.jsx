import React from "react";

export default function CategoryItemList({ items }) {
  //   const { name, price, imageId, description } = items[0]?.card?.info;
  //   console.log(items[0]?.card?.info)
  // console.log(items)
  return (
    <div>
      {items.map((item) => (
        <div
          className="text-left p-2 m-2 border-gray-200 border-b-2 flex justify-between"
          key={item?.card?.info?.id}
        >
          <div>
            <h4>{item.card.info.name}</h4>
            <h6 className="text-sm">
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h6>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

         <div className="w-3/12 p-4">
           <div className="absolute">
            <button className="p-2 rounded-lg bg-black text-white shadow-lg ">
                Add +
            </button>
           </div>
         
          <img
            className="h-20 w-25"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              item.card.info.imageId
            }
            alt=""
          />
          </div>
        </div>
      ))}
    </div>
  );
}
