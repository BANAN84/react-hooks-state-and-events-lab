import React from "react";
import { useState } from "react";
function Item({ name, category }) {
 let [ classn, setClassn]= useState (false)
  function handleClick(){
   setClassn((classn) => !classn)
  }

  return (
    <li className={classn ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}> {classn? "Remove From Cart":"Add to Cart" }</button>
    </li>
  );
}

export default Item;
