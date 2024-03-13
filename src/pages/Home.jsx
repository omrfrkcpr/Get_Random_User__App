import React, { useEffect, useState } from "react";
import axios from "axios";
import GetRandomUser from "../components/getRandomUser/GetRandomUser";
import UserList from "../components/userList/UserList";
import AddUser from "../components/addUser/AddUser";

const Home = () => {
  const [user, setUser] = useState();
  const [showUserForm, setShowUserForm] = useState(false);
  const [usersList, setUsersList] = useState([]);

  // Get random user from API
  const getUser = async () => {
    setUser(null);
    try {
      const response = await axios.get("https://randomuser.me/api");

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      setUser(response.data.results[0]);
      console.log(response.data.results[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // ComponentDidMount
    getUser();
  }, []);

  // Add random user to the usersList table
  const handleAddUser = (freshUser) => {
    // check if user is already in usersList
    const userExists = usersList.some((item) => item.id === freshUser.id);
    if (userExists) {
      return;
    }
    setUser({ ...user, hasUserBeenAdded: true });
    setUsersList([...usersList, freshUser]);
  };

  return (
    <div className="border border-2 border-danger p-3">
      {showUserForm ? (
        <AddUser
          editUser={(newUser) =>
            !usersList.some((user) => user.name === newUser.name)
              ? setUsersList([...usersList, newUser])
              : alert("Please add a different user")
          }
          showUserForm={showUserForm}
          setShowUserForm={setShowUserForm}
        />
      ) : (
        <GetRandomUser
          user={user}
          setUser={setUser}
          handleToggle={() => setShowUserForm(!showUserForm)}
          handleAddUser={handleAddUser}
          handleNewUser={() => getUser()}
          showUserForm={showUserForm}
        />
      )}
      <UserList usersList={usersList} setUsersList={setUsersList} />
    </div>
  );
};

export default Home;
