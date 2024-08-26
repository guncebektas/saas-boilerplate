import React, { useState, useEffect } from "react";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { PUBLISH } from "../../../../imports/modules/links/enums/publish";
import { linkRepository } from "../../../../imports/modules/links/linkRepository";

export const Avukat = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ id: null, text: "" });

  useSubscribe(PUBLISH.LINKS);
  const links = useFind(() => linkRepository.find());

  useEffect(() => {
    setItems(links);
  }, [links]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const createItem = () => {
    console.log("Creating item:", currentItem.text);
    linkRepository.insert({ text: currentItem.text }, (error) => {
      if (error) {
        console.error("Error creating item:", error);
      } else {
        setCurrentItem({ id: null, text: "" });
      }
    });
  };

  const updateItem = (id) => {
    console.log("Updating item:", id, currentItem.text);
    linkRepository.update(id, { $set: { text: currentItem.text } }, (error) => {
      if (error) {
        console.error("Error updating item:", error);
      } else {
        setCurrentItem({ id: null, text: "" });
      }
    });
  };

  const deleteItem = (id) => {
    console.log("Deleting item:", id);
    linkRepository.remove(id, (error) => {
      if (error) {
        console.error("Error deleting item:", error);
      }
    });
  };

  const editItem = (item) => {
    console.log("Editing item:", item);
    setCurrentItem({ id: item._id, text: item.text });
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <div>
        <input
          type="text"
          name="text"
          value={currentItem.text}
          onChange={handleInputChange}
        />
        {currentItem.id ? (
          <button onClick={() => updateItem(currentItem.id)}>Update</button>
        ) : (
          <button onClick={createItem}>Create</button>
        )}
      </div>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.text}
            <button onClick={() => editItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};