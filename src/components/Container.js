import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Container = ({ clickedindex }) => {
  const [clicked, setClicked] = useState(clickedindex);
  const [boldIndex, setBoldIndex] = useState(null);

  useEffect(() => {
    setClicked(clickedindex);
  }, [clickedindex]);

  const demoData = [
    {
      title: "카드1",
      content: ["항목1 설명...", "항목2 설명...", "항목3 설명..."],
    },
    {
      title: "카드2",
      content: ["항목1 설명...", "항목2 설명...", "항목3 설명..."],
    },
    {
      title: "카드3",
      content: ["항목1 설명...", "항목2 설명...", "항목3 설명..."],
    },
  ];
  const first = () => {
    return (
      <div style={{ flex: 1 }}>
        <h1>울산항만공사</h1>
        <div
          style={{
            width: "100%",
            height: "6px",
            backgroundColor: "black",
          }}
        />
        <div style={{ display: "flex" }}>
          {demoData.map((card, index) => (
            <div
              key={index}
              style={{
                border: "1px solid black",
                padding: "20px",
                margin: "10px",
                width: "200px",
              }}
              onClick={() => {
                setClicked(index + 1);
              }}
            >
              <h3>{card.title}</h3>
              <ul>
                {card.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const customer = () => {
    return (
      <div style={{ flex: 1 }}>
        <h1 onClick={() => setClicked(null)}>
          컨테이너 터미널 _ {demoData[clicked - 1].title}
        </h1>
        <div
          style={{
            width: "100%",
            height: "6px",
            backgroundColor: "black",
            marginBottom: "10px",
          }}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "80%",
            justifyContent: "space-between",
          }}
        >
          <div>
            {demoData[clicked - 1].content.map((item, index) => (
              <div
                key={index}
                style={{
                  marginLeft: "10px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: boldIndex === index ? "bold" : "normal",
                }}
                onClick={() => setBoldIndex(index)}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    border: "solid",
                    marginRight: "10px",
                  }}
                />
                {item}
              </div>
            ))}
          </div>

          <div
            style={{ backgroundColor: "grey", width: "40%", height: "100%" }}
          ></div>
        </div>
      </div>
    );
  };

  return clicked ? customer() : first();
};

export default Container;
