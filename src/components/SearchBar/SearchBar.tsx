import React from "react";
import "./SearchBar.css";

const SerachBar = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit} className="form" role="search">
        <input
          className="input"
          id="search"
          type="search"
          placeholder="Search..."
          autoFocus
          required
        />
      </form>
    </div>
  );
};

export default SerachBar;
