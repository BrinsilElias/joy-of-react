import React, { useState } from "react";

import AddNewItemForm from "./AddNewItemForm";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([...items, { name: item, id: crypto.randomUUID() }]);
  }

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        {items.length > 0 && (
          <ol className="shopping-list">
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ol>
        )}
      </div>
      <AddNewItemForm handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
