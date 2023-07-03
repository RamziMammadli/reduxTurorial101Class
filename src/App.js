import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "./store/reducers/getSlice";

const App = () => {
  const data = useSelector((state) => state.getSlice.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, []);

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
        {data &&
          data.map((item) => {
            return (
              <div style={{padding:20, borderRadius:10, borderWidth:.3, marginBottom:10}}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
