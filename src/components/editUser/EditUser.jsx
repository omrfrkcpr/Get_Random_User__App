import React from "react";

const EditUser = ({ item, setItem, editUser }) => {
  const { name, email, phone, age } = item;

  return (
    <div
      className="modal fade"
      id="editModal"
      data-bs-backdrop="false"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-5" id="exampleModalLabel">
              Edit User
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* inputs */}
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                className="form-control mt-2"
                value={name || ""}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                className="form-control mt-2"
                value={email || ""}
                onChange={(e) => setItem({ ...item, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <br />
              <input
                type="tel"
                id="phone"
                className="form-control mt-2"
                value={phone || ""}
                onChange={(e) => setItem({ ...item, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <br />
              <input
                type="number"
                id="age"
                className="form-control mt-2"
                value={age || ""}
                onChange={(e) => setItem({ ...item, age: e.target.value })}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={() => editUser(item)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
