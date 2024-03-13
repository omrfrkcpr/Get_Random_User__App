import React, { useState } from "react";
import "../addUser/AddUser.css";

function generateRandomId() {
  const min = 10000000;
  const max = 99999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

const AddUser = ({ editUser, showUserForm, setShowUserForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //! POST into table
    if (name !== "" && email !== "" && phone !== "" && age !== "") {
      editUser({
        id: generateRandomId(),
        name: name,
        email: email,
        phone: phone,
        age: age,
      });
      setShowUserForm(!showUserForm);
    } else alert("Please enter all user information");
  };

  const handleGoBack = () => {
    setShowUserForm(!showUserForm);
  };

  return (
    <div
      className="add-container container border border-2 rounded-4 p-4 text-center mt-4 w-auto d-flex flex-column justify-content-center align-items-between m-auto"
      style={{ height: "500px" }}
    >
      <h1 className="display-6 text-white fw-bold m-auto mb-3">Add New User</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter a name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter a Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter a phone number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter an age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btnSubmit mb-4"
            onClick={handleSubmit}
          >
            Create
          </button>
          <button onClick={handleGoBack} className="btn btnBack ms-2 mb-4">
            Go Get Random User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
