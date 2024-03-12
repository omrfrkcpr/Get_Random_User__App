import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditUser from "../editUser/EditUser";

const UserList = ({ usersList, setUsersList }) => {
  console.log(usersList);
  const [item, setItem] = useState("");

  // Delete selected user from usersList
  const handleDeleteUser = (id) => {
    if (
      window.confirm(
        `Are you sure you want to delete user with id number ${id}`
      )
    ) {
      const updatedList = usersList.filter((user) => user.id !== id);
      setUsersList(updatedList);
    }
  };

  // Edit selected user's info from usersList
  const editUser = (updatedUser) => {
    if (window.confirm("The changes you make will be saved. Are you sure?")) {
      setUsersList(
        usersList.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      );
    }
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {usersList.map(({ id, name, email, phone, age }) => {
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{age}</td>
                <td className="text-center">
                  <AiFillDelete
                    type="button"
                    style={{
                      color: "indianred",
                      marginRight: ".5rem",
                    }}
                    size={22}
                    onClick={() => handleDeleteUser(id)}
                  />
                  <FaEdit
                    type="button"
                    style={{ color: "orange" }}
                    size={22}
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={() => setItem({ id, name, email, phone, age })}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal */}
      <EditUser
        item={item}
        setItem={setItem}
        usersList={usersList}
        setUsersList={setUsersList}
        editUser={editUser}
      />
    </div>
  );
};

export default UserList;
