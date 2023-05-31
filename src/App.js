import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import Details from "./components/Details/Details";
import EditForm from "./components/EditForm/EditForm";
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
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
