import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditUser from "../editUser/EditUser";

const UserList = ({ usersList, setUsersList, deleteUser, editUser }) => {
  console.log(usersList);
  const [item, setItem] = useState("");

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
                    onClick={() => deleteUser(id)}
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
      <EditUser item={item} setItem={setItem} editUser={editUser} />
    </div>
  );
};

export default UserList;
