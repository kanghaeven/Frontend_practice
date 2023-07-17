import React from "react";
import "./globals.css";

interface Props {
  className: any;
}

export const SearchBar = ({ className }: Props): JSX.Element => {
  return (
    <div className={`search-bar ${className}`}>
      <img className="search" alt="Search" src="search.svg" />
      <div className="search-placeholder">검색어를 입력하세요</div>
    </div>
  );
};
