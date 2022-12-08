import React, { useState } from "react";
import ToDoList from "./todolist";

function App() {
  const [newItem, setNewItem] = useState("");
  const [itemList, setItemList] = useState(["Buy Milk"]);

  function storeNewItem(event) {
    const theNewItem = event.target.value;
    setNewItem(theNewItem);

    //add item to array
  }

  function addItem() {
    setItemList((prevValue) => {
      return [...prevValue, newItem];
    });
    setNewItem("");
    //add item to array
  }

  //to delete itmes
  function deleteItem(theID) {
    setItemList((prevList) => {
      return prevList.filter((items, index) => {
        return index !== theID;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={newItem} onChange={storeNewItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((x, index) => {
            return (
              <ToDoList
                key={index}
                itemName={x}
                index={index}
                onChange={deleteItem}
              />
            );
          })}
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
