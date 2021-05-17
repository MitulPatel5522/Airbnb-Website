import React from "react";
import { useHistory } from "react-router";
import "./SearchResult.css";

function SearchResult({ img, location, title, description, price, id }) {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`/viewListing/${id}`)}
      className="searchResult"
    >
      <img src={img} alt="" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p className="searchResult__capitalize">{location}</p>
          <h3 className="searchResult__capitalize">{title}</h3>
          <p>____</p>
          <p className="searchResult__capitalize">{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResults__price">
            <h2>{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
