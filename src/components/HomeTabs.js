import React, { useState } from "react";
import "../assets/styles/HomeTabs.css";

const HomeTabs = () => {
  const types = ["All", "Creative", "Editorial"];

  const [active, setActive] = useState(types[0]);

  return (
    <div className="col-md-4 toggleBox">
      {types.map((type) => {
        return (
          <button
            key={type}
            className="toggleButton"
            active={active === type}
            style={{
              backgroundColor: active === type ? "#000" : "#fff",
              color: active === type ? "#fff" : "#000",
              border: "solid 1px",
            }}
            onClick={() => setActive(type)}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default HomeTabs;
