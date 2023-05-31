import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getOneUser } from "../../features/users/users-actions";
import { selectOneUser } from "../../features/users/users-selectors";

const EditForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneUser(id));
  }, []);

  const oneUser = useSelector(selectOneUser);

  useEffect(() => {
    if (oneUser) {
      setName(oneUser.name);
      setSurname(oneUser.surname);
      setAge(oneUser.age);
    }
  }, [oneUser]);

  const handleUser = () => {
    let editedUser = {
      name,
      surname,
      age,
      id,
    };
    if (!name.trim() || !surname.trim() || !age.trim()) {
      alert("Some inputs are empty!");
      return;
    }

    dispatch(editUser(editedUser));
    navigate("/users");
  };

  return oneUser ? (
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
      <button onClick={handleUser}>Save</button>
      <button onClick={() => navigate("/users")}>Back</button>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default EditForm;
