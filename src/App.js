import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
