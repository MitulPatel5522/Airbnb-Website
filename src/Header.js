import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>

      <div style={{ backgroundColor: "white" }} className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>

        <Button variant="outlined" onClick={() => history.push("/addlisting")}>
          Add a Listing
        </Button>

        <Avatar />
      </div>
    </div>
  );
}

export default Header;
