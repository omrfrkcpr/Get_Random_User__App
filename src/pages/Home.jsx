import React, { useEffect, useState } from "react";
import axios from "axios";
import GetRandomUser from "../components/getRandomUser/GetRandomUser";
import UserList from "../components/userList/UserList";
import AddUser from "../components/addUser/AddUser";

const Home = () => {
  const [user, setUser] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [usersList, setUsersList] = useState([]);

  //! Get random user from API
  const getUser = async () => {
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
    //ComponentDidMount
    getUser();
  }, []);

  //! Toggle page for creating new user manually
  const handleToggle = () => {
    setToggle(!toggle);
  };

  //! Add random user to the usersList table
  const handleAddUser = (freshUser) => {
    setUsersList(...usersList, freshUser);
  };

  //! Get a new random user from API
  const handleNewUser = () => {
    getUser();
  };

  //! Delete selected user
  const deleteUser = (id) => {
    usersList.map((item) => item.id !== id);
  };

  return (
    <div>
      <GetRandomUser
        user={user}
        setUser={setUser}
        handleToggle={handleToggle}
        handleAddUser={handleAddUser}
        handleNewUser={handleNewUser}
      />
      {toggle && <AddUser />}
      <UserList
        usersList={usersList}
        setUsersList={setUsersList}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default Home;
