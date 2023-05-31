import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import UsersList from "./components/UsersList/UsersList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route
          path="/users"
          element={
            <>
              <AddForm />
              <UsersList />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
