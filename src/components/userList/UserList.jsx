import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditUser from "../editUser/EditUser";
import "./UserList.css";

const UserList = ({ usersList, setUsersList }) => {
  console.log(usersList);
  const [item, setItem] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 634);

  // Delete id row from table when the screen < 634px
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Conver email address in order to make responsive design
  const getEmailDisplay = (email) => {
    if (!email) return "";
    const atIndex = email.indexOf("@");
    if (atIndex === -1) return "";
    const domain = email.substring(atIndex);
    const firstChar = domain.charAt(0);
    return email.replace(domain, `${firstChar}...`);
  };

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

  // Table Cell background style
  const headerCellStyle = {
    backgroundColor: "rgba(222, 184, 135, 0.552)",
  };

  return (
    <div
      className="mt-3 userList-container"
      style={{ width: "80%", margin: "auto" }}
    >
      <table
        className="table table-striped"
        style={{ width: "1200px", margin: "auto", overflow: "auto" }}
      >
        <thead>
          <tr>
            {!isSmallScreen && (
              <th scope="col" style={headerCellStyle}>
                #id
              </th>
            )}
            <th scope="col" style={headerCellStyle}>
              Name
            </th>
            <th scope="col" style={headerCellStyle}>
              Email
            </th>
            <th scope="col" style={headerCellStyle}>
              Phone
            </th>
            <th scope="col" style={headerCellStyle}>
              Age
            </th>
            <th scope="col" style={headerCellStyle} className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {usersList.map(({ id, name, email, phone, age }) => {
            return (
              <tr key={id}>
                {!isSmallScreen && <th>{id}</th>}
                <td>{name}</td>
                <td>{isSmallScreen ? getEmailDisplay(email) : email}</td>
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
