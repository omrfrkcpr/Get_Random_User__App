import React, { useState } from "react";
import uuid from "react-uuid";

const AddInfo = ({ editUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //! POST into table
    editUser({ id: uuid(), name: name, email: email, phone: phone, age: age });
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add New User</h1>
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
        <button
          type="submit"
          className="btn btn-danger mb-4"
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddInfo;
