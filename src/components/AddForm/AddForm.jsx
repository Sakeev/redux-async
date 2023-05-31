import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/users/users-actions";

const AddForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();

  const handleUser = () => {
    let newUser = {
      name,
      surname,
      age,
    };
    if (!name.trim() || !surname.trim() || !age.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    dispatch(addUser(newUser));

    setName("");
    setSurname("");
    setAge("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleUser}>Register</button>
    </div>
  );
};

export default AddForm;
