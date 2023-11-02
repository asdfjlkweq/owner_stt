import React, { useState } from "react";
import Home from "./components/Home";
import Container from "./components/Container";
import XXX from "./components/XXX";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("HOME");
  const workers = [
    { name: "A", checked: true },
    { name: "B", checked: false },
  ];
  let displayedComponent;
  switch (currentComponent) {
    case "CONTAINER":
      displayedComponent = <Container />;
      break;
    case "XXX":
      displayedComponent = <XXX />;
      break;
    case "VALIDATION":
      displayedComponent = <XXX />;
      break;
    default:
      displayedComponent = <Home />;
  }

  const renderMenuItem = (componentName, label) => {
    return (
      <li style={{ marginBottom: "15px" }}>
        <span
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "20px",
          }}
          onClick={() => setCurrentComponent(componentName)}
        >
          {currentComponent === componentName ? "▼" : "▶"} {label}
          {currentComponent === componentName ? (
            <div style={{ marginLeft: "20px" }}>
              {workers.map((worker, index) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    key={index}
                    onClick={() => {}}
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: worker.checked ? "black" : "white",
                      border: "1px solid black",
                      marginRight: "10px",
                    }}
                  />
                  {worker.name}
                </div>
              ))}
            </div>
          ) : null}
        </span>
      </li>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <div
        style={{
          flex: 1,
          padding: "20px",
          boxShadow: "3px 0 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0, marginTop: "20%" }}>
          {renderMenuItem("CONTAINER", "컨테이너 터미널")}
          {renderMenuItem("XXX", "관세 및 통관")}
          {renderMenuItem("VALIDATION", "화물 검사 지점")}
        </ul>
      </div>
      <div
        style={{
          flex: 8,
          padding: "20px",
          display: "flex",
        }}
      >
        {displayedComponent}
      </div>
    </div>
  );
};

export default App;
