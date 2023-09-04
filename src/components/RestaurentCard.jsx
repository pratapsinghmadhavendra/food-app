


function RestaurentCard(props)
{
  const  {header, subHeader} = props.resData.aggregatedDiscountInfoV3;
  const  {id, name, cloudinaryImageId,cuisines, avgRating,costForTwo, deliveryTime,  } = props.resData;
//     console.log(props.resData);

    return(
        <div className="h-50 w-40 p-2 m-2 border border-solid border-black bg-gray-50 rounded-xl shadow-lg">
                <div > 
                <img className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-img" />
              </div> 
              <div>
                <h5 className="font-bold py-3 font-serif" > {name}</h5>
                <h6 className="font-sans text-sm"> {cuisines.join(" ,")}</h6>
                <h6 className="font-semibold"> {avgRating}</h6>
                <h6 > {costForTwo}</h6>
                <h6 > {deliveryTime}</h6>
                <h6 className="font-semibold text-slate-500"> {header + " " + subHeader}</h6>
              </div>
        </div>
    )


  //  Higher order Component
  // input-RestaurantCard, output-a component

  

}

export default RestaurentCard;