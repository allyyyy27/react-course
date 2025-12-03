/**
 * 1. React Component
 * 2. React Fragment
 * 3. Rendering Lists
 * 4. Conditional Rendering
 */

import { useState } from "react";

//import { Fragment } from "react/jsx-runtime"; --para di na magkaroon ng additional element sa DOM
//<><> -- shorter approach for fragment

//import type { MouseEvent } from "react";

/**passing data via props */
// objects: {items: [], heading: string}

interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //declare constant
  //from constant, make it a variable
  // let items = ["New York", "Korea", "Japan", "Paris", "England"];

  //to keep track of the index of selected item
  // let selectedIndex = 0;

  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /*
    arr[0] //variable (selectedIndex)
    arr[1] //updater function
  */

  // const [name, setName] = useState('');

  //declare a function for event handling *always start with "handle"
  //const handleClick = (event: MouseEvent) => console.log(event);

  //then re-assign
  // items = [];

  //for cleaner code, use a constant
  //const message = items.length === 0 ? <p>No item found</p> : null;

  //using a function
  /*const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };*/

  //conditional
  /*if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );*/

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
