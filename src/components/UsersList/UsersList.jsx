import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUsers } from "../../features/users/users-actions";
import { selectAllUsers } from "../../features/users/users-selectors";

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {users.map((item, index) => (
        <div style={{ marginBottom: "30px" }} key={index}>
          Name: {item.name}, Surname: {item.surname}, Age: {item.age}
          <button onClick={() => dispatch(deleteUser(item.id))}>Delete</button>
          <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
          <button onClick={() => navigate(`/details/${item.id}`)}>
            Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
