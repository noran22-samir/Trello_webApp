import React from 'react'
import "../styles/SortFilterBoards.css";

const SortFilterBoards = () => {
  return (
   <div className="top-bar">

  <div className="left-side">
    <input
      type="text"
      list="list"
      placeholder="Most recently active"
      id="sort2"
    />

    <input
      type="text"
      list="list"
      placeholder="Choose a collection"
      id="filter"
    />
  </div>

  <div className="Search-box2">
    <input type="text" placeholder="Search" />
  </div>

  <datalist id="list">
    <option value="Egypt"/>
    <option value="France"/>
    <option value="India"/>
    <option value="Palestine"/>
  </datalist>

</div>
  );
}

export default SortFilterBoards
