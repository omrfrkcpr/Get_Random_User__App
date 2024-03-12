import React from "react";

function generateRandomId() {
  const min = 10000000;
  const max = 99999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

const GetRandomUser = ({
  user,
  handleToggle,
  handleAddUser,
  handleNewUser,
  showUserForm,
}) => {
  const convertUserType = (apiUser) => {
    return apiUser
      ? {
          id: generateRandomId(),
          name: `${user?.name?.first} ${user?.name?.last}`,
          email: apiUser.email,
          phone: apiUser.phone,
          age: apiUser.dob.age,
        }
      : {
          id: "empty",
          name: "empty",
          email: "empty",
          phone: "empty",
          age: "empty",
        };
  };

  return (
    <div className="container text-center mt-4">
      <div
        className="row border border-2 w-75 m-auto"
        style={{ height: "550px" }}
      >
        <h1>{`${user?.name?.first} ${user?.name?.last}`}</h1>
        <img
          src={user?.picture?.large}
          className="rounded-circle"
          alt=""
          style={{ width: "300px", margin: "1rem auto" }}
        />
        <h3>{user?.email}</h3>
        <h4>{new Date(user?.dob?.date).toLocaleDateString()}</h4>
        <h5>{user?.phone}</h5>
        <h6>{user?.location?.city}</h6>
      </div>
      <div className="text-center mt-3">
        <button className="me-4" onClick={handleNewUser}>
          Get User
        </button>
        <button
          onClick={() => handleAddUser(convertUserType(user))}
          className="me-4"
          disabled={!user || user?.hasUserBeenAdded}
        >
          Add User
        </button>
        <button onClick={handleToggle}>
          {showUserForm ? "Close Add-User Form" : "Show Add-User Form"}
        </button>
      </div>
    </div>
  );
};

export default GetRandomUser;
