import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "./store/reducers/getSlice";
import { _createPost } from "./store/reducers/postSlice";
// Assuming you have the necessary actions defined in "./store/reducers"

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const data = {
    name,
    description
  }

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const postData = () => {
    dispatch(_createPost(data));
    setName("");
    setDescription("");
  };

  

  return (
    <div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "#dedede",
        }}
      >
        <p>Categories</p>
      </div>
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <div>
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={postData}>Gonder</button>
        </div>

        <div>
          {categories &&
            categories.map((item) => (
              <div
                key={item.id} // Assuming each category has a unique "id" property
                style={{
                  padding: 20,
                  borderRadius: 10,
                  borderWidth: 0.3,
                  marginBottom: 10,
                }}
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
