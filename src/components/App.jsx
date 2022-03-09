import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);


  function handleChange(event) {
    setInputText(event.target.value);

  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText]; //use spread operator
    });
    setInputText("");
  }


  //Delete funtion pass as a prop and fillter items
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter(
        (items, index) => {
          return index !== id
        }
      );
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button
          onClick={addItem}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) =>
            <ToDoItem
              key={index} //unique
              id={index} //to tracking the delete items
              name={item}
              checked={deleteItem} // delete function here

            />

          )}

        </ul>
      </div>
    </div>
  );
}

export default App;
