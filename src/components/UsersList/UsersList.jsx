import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/users/users-actions";
import { selectAllUsers } from "../../features/users/users-selectors";

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <div>UsersList</div>;
};

export default UsersList;
