import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [login, setLogin] = useState("Login");
  const {loggedInUser } = useContext(UserContext);

  const status = onlineStatus ? { color: "green" } : { color: "red" };

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div>
        <img
          className="h-20"
          alt="res-logo"
          src="https://e7.pngegg.com/pngimages/815/847/png-clipart-take-out-android-sindelantal-app-food-text.png"
        />
      </div>

      <div className="flex items-center">
        <ul className="flex gap-4 justify-center p-4">
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li>Cart</li>
          <li style={status}>{onlineStatus ? "online" : "offline"}</li>
          <button
            onClick={() =>
              login === "Login" ? setLogin("Login") : setLogin("Logout")
            }
          >
            {login}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
