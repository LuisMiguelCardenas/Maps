import React, { ChangeEvent, useContext, useRef } from "react";
import { PlacesConstext } from "../context";
import { SearchResult } from '.';

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesConstext);
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 1000);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar"
        onChange={onQueryChange}
      />
      <SearchResult/>
    </div>
  );
};
