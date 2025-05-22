import React, { useState } from "react";

function AddNewItemForm({ handleAddItem }) {
  const [item, setItem] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddItem(item);
    setItem("");
  }

  return (
    <div className="new-list-item-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-list-form-input">New item:</label>

        <div className="row">
          <input
            required={true}
            id="new-list-form-input"
            type="text"
            value={item}
            onChange={(evt) => setItem(evt.target.value)}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;
