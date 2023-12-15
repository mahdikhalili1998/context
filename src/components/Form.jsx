import React, { useState } from "react";
import { useContext } from "react";
import { InfoContext } from "../context/Provider";
import { v4 as uuidv4 } from "uuid";
function Form() {
  const [name, setName] = useState("");
  const { user, setUser } = useContext(InfoContext);
  console.log(user);
  // console.log(result);
  const saveHandler = () => {
    setUser((user) => [...user, { id: uuidv4(), name: name }]);
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={saveHandler}>Save</button>
    </div>
  );
}

export default Form;
