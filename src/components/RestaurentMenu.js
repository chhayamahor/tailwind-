import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("data====>", json);
    setResInfo(json.data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>
        {
          resInfo?.cards[0]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants[0]?.data?.name
        }
      </h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Cake</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
