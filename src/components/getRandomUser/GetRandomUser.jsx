import React, { useState } from "react";
import "./GetRandomUser.css";

import mailSvg from "../../assets/mail.svg";
import manSvg from "../../assets/man.svg";
import womanSvg from "../../assets/woman.svg";
import manAgeSvg from "../../assets/growing-up-man.svg";
import womanAgeSvg from "../../assets/growing-up-woman.svg";
import mapSvg from "../../assets/map.svg";
import phoneSvg from "../../assets/phone.svg";

const GetRandomUser = ({
  user,
  handleToggle,
  handleAddUser,
  handleNewUser,
  showUserForm,
  loading,
  setLoading,
}) => {
  const [changeImg, setChangeImg] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState("name");

  // Toggle image between avatar and real phone
  const handleImg = () => {
    setChangeImg(!changeImg);
  };

  function generateRandomId() {
    const min = 10000000;
    const max = 99999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
  }

  // Convert user datas that we get from API to saveable format
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

  // Show the data of the relevant user when hovering over each icon with the mouse
  const iconHoverHandler = (iconId) => {
    setHoveredIcon(iconId);
  };

  // Show relevant result text when hovering over each icon with the mouse
  const iconTexts = {
    name: "My name is ",
    email: "My email is ",
    birthday: "My birthday is ",
    phone: "My phone number is ",
    location: "My location is ",
  };

  return (
    <div className="container text-center">
      <div
        className="user-container row border border-2 rounded-5 w-auto m-auto pt-0 p-4 d-flex justify-content-center"
        style={{
          height: "460px",
          position: "relative",
          backgroundColor: "rgb(163, 63, 63)",
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn changeBtn"
            style={{ width: "120px" }}
            onClick={handleImg}
          >
            {changeImg ? "Real Photo" : "Avatar Photo"}
          </button>
        </div>
        <img
          src={
            changeImg && user?.name?.first !== undefined
              ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name?.first}`
              : user?.picture?.large
          }
          className="rounded-circle"
          alt=""
          style={{
            width: "320px",
            height: "300px",
            margin: "0.5rem auto",
          }}
        />
        <div
          className="result"
          style={{
            height: "60px",
            color: "white",
          }}
        >
          <span>{iconTexts[hoveredIcon]}</span>
          <h1
            id="name"
            style={{ display: hoveredIcon === "name" ? "block" : "none" }}
          >
            {user?.name?.first !== undefined &&
              `${user?.name?.first} ${user?.name?.last}`}
          </h1>
          <h1
            id="email"
            style={{ display: hoveredIcon === "email" ? "block" : "none" }}
          >
            {user?.email}
          </h1>
          <h1
            id="birthday"
            style={{ display: hoveredIcon === "birthday" ? "block" : "none" }}
          >
            {new Date(user?.dob?.date).toLocaleDateString()}
          </h1>
          <h1
            id="phone"
            style={{ display: hoveredIcon === "phone" ? "block" : "none" }}
          >
            {user?.phone}
          </h1>
          <h1
            id="location"
            style={{ display: hoveredIcon === "location" ? "block" : "none" }}
          >
            {user?.location?.city}
          </h1>
        </div>
        <div className="icons w-75 d-flex text-center align-items-center justify-content-center mt-3">
          <img
            src={user?.gender === "male" ? manSvg : womanSvg}
            alt="user-icon"
            className="icon icons--user"
            id="name"
            style={{
              color: "#67262a",
              fontSize: "40px",
              marginRight: "1rem",
              padding: ".2rem",
              border: "1px solid white",
            }}
            onMouseEnter={() => iconHoverHandler("name")}
            onMouseLeave={() => iconHoverHandler("name")}
          />

          <img
            src={mailSvg}
            alt="mail-icon"
            className="icon icons--email"
            id="email"
            style={{
              color: "#67262a",
              fontSize: "40px",
              marginRight: "1rem",
              padding: ".2rem",
              border: "1px solid white",
            }}
            onMouseEnter={() => iconHoverHandler("email")}
            onMouseLeave={() => iconHoverHandler("name")}
          />
          <img
            src={user?.gender === "male" ? manAgeSvg : womanAgeSvg}
            alt="birthday-icon"
            className="icon icons--birthday"
            id="birthday"
            style={{
              color: "#67262a",
              fontSize: "40px",
              marginRight: "1rem",
              padding: ".2rem",
              border: "1px solid white",
            }}
            onMouseEnter={() => iconHoverHandler("birthday")}
            onMouseLeave={() => iconHoverHandler("name")}
          />
          <img
            src={phoneSvg}
            alt="phone-icon"
            className="icon icons--phone"
            id="phone"
            style={{
              color: "#67262a",
              fontSize: "40px",
              marginRight: "1rem",
              padding: ".2rem",
              border: "1px solid white",
            }}
            onMouseEnter={() => iconHoverHandler("phone")}
            onMouseLeave={() => iconHoverHandler("name")}
          />
          <img
            src={mapSvg}
            alt="location-icon"
            className="icon icons--location"
            id="location"
            style={{
              color: "#67262a",
              fontSize: "40px",
              padding: ".2rem",
              border: "1px solid white",
            }}
            onMouseEnter={() => iconHoverHandler("location")}
            onMouseLeave={() => iconHoverHandler("name")}
          />
        </div>
      </div>
      <div className="text-center mt-3">
        <button
          className="me-4 btn handleBtn"
          onClick={handleNewUser}
          style={{ backgroundColor: "#A33F3F", color: "whitesmoke" }}
          disabled={!loading}
        >
          {loading ? "Get User" : "Loading..."}
        </button>
        <button
          onClick={() => handleAddUser(convertUserType(user))}
          className="me-4 btn handleBtn"
          style={{ backgroundColor: "#A33F3F", color: "whitesmoke" }}
          disabled={!user || user?.hasUserBeenAdded}
        >
          Add User
        </button>
        <button
          onClick={handleToggle}
          className="btn handleBtn"
          style={{ backgroundColor: "#A33F3F", color: "whitesmoke" }}
        >
          {showUserForm ? "Close Add-User Form" : "Show Add-User Form"}
        </button>
      </div>
    </div>
  );
};

export default GetRandomUser;
