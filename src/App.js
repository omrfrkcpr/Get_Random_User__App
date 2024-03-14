import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import devices from "../src/assets/devices.png";

function App() {
  // State to track if the screen is small
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Effect to check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 400);
    };

    // Check on mount and resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render Home only if screen is not small
  return (
    <div className="d-flex justify-content-center align-items-center">
      {isSmallScreen ? (
        <div
          className="text-center"
          style={{
            position: "absolute",
            top: "50%",
            let: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <img src={devices} alt="devices" width="200px" />
          <h1>
            This project does not support phones. Please use a tablet or
            computer.
          </h1>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
