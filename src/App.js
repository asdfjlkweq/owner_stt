import React, { useState } from "react";
import Home from "./components/Home";
import Container from "./components/Container";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(null);
  const [clicked, setClicked] = useState(null);

  const workers = [{ name: "강운영" }, { name: "김영희" }, { name: "김철수" }];
  let displayedComponent;
  if (currentComponent) {
    displayedComponent = (
      <Container clickedindex={clicked} type={currentComponent} />
    );
  } else {
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
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={() => {
                    setClicked(index + 1);
                  }}
                >
                  <div
                    key={index}
                    style={{
                      width: "10px",
                      height: "10px",
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
          {renderMenuItem("TAX", "관세 및 통관")}
          {renderMenuItem("VALIDATION", "화물 검사 지점")}
        </ul>
      </div>
      <div
        style={{
          flex: 6,
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
