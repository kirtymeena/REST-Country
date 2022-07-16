import React from "react";
import {useSelector} from "react-redux"
const Search = () => {
    const theme = useSelector(state=>state.themeReducer.isDark)
  return (
    <div>
        <div className="search__icon">
      <svg
        className="search__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1.8rem"
        viewBox="0 0 24 24"
      >
        <path
          fill={`${theme?"#fafaf9":"#080808"}`}
          d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
        />
      </svg>
      </div>
      <div>
      <input
        className={`search ${theme?"dark__input":"light__input"}`}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
    </div>
  );
};

export default Search;
