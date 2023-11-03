import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Container = ({ clickedindex, type }) => {
  const [clicked, setClicked] = useState(clickedindex);
  const [boldIndex, setBoldIndex] = useState(null);

  const handleItemClick = async (index) => {
    try {
      setBoldIndex(index);

      const response = await axios.post("http://34.64.167.142:5000/task", {
        // 여기에 보낼 데이터를 추가합니다
        text: demoData[clicked - 1].content[index],
        user_id: 1,
      });
      console.log("Response from server:", response.data);

      const response2 = await axios.post("http://34.64.167.142:5000/status", {
        // 여기에 보낼 데이터를 추가합니다
        boolean: false,
        task_id: response.data.id,
      });
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  let types;
  switch (type) {
    case "CONTAINER":
      types = "컨테이너 터미널";
      break;
    case "TAX":
      types = "관세 및 통관";
      break;
    default:
      types = "화물 검사 지점";
  }

  useEffect(() => {
    setClicked(clickedindex);
  }, [clickedindex]);

  const demoData = [
    {
      title: "강운영",
      content: [
        "파이프 용접",
        "로딩 및 언로딩 시간 기록",
        "모든 화물에 대한 출발 지점 설정",
      ],
    },
    {
      title: "김영희",
      content: [
        "로딩 또는 언로딩 작업 시간 기록",
        "로딩 또는 언로딩 시간 기록",
      ],
    },
    {
      title: "김철수",
      content: [
        "화재 소화기와 응급 상황 대비 교육 수강",
        "화물의 무게, 크기 및 특성 확인",
      ],
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
                  <li key={idx}>
                    {item.length > 12 ? item.substring(0, 12) + "..." : item}
                  </li>
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
          {types} _ {demoData[clicked - 1].title}
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
                onClick={() => handleItemClick(index)}
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
