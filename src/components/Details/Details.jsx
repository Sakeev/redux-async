import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneUser } from "../../features/users/users-actions";
import { selectOneUser } from "../../features/users/users-selectors";

const Details = () => {
  const { id } = useParams();
  const oneUser = useSelector(selectOneUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneUser(id));
  }, []);

  return oneUser ? (
    <div>
      <div>Name: {oneUser.name}</div>
      <div>Surname: {oneUser.surname}</div>
      <div>Age: {oneUser.age}</div>
      <button onClick={() => navigate("/users")}>Back</button>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Details;
