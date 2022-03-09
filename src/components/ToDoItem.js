import React from 'react';


function ToDoItem(props) {
  return (

    <div onClick={() => {
      props.checked(props.id)
    }}>
      <li>{props.name}</li>
    </div>
  );
}

export default ToDoItem;