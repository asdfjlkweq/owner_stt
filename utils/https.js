import axios from "axios";
/*
예시 : 
useGetApi("challenges");
const headers = {
  ACCESS : "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJzd"
}
useGetApi("challenges", headers);
*/

const BACKEND_URL = "https://server.gasomann.com/api/";

export async function UseGetFileApi(url) {
  const response = await axios.get(BACKEND_URL + url, {
    responseType: "blob", // 바이너리 데이터를 위해 responseType을 blob으로 설정합니다.
  });

  return response.data;
}

export async function UsePostFileApi(url, requestBody, headers) {
  const response = await axios.post(BACKEND_URL + url, requestBody, {
    headers: headers,
    responseType: "blob", // 바이너리 데이터를 위해 responseType을 blob으로 설정합니다.
  });

  return response.data;
}

export async function UseGetApi(url) {
  const response = await axios.get(BACKEND_URL + url);

  return response.data;
}

export async function UsePostApi(url, requestBody, headers, params) {
  const response = await axios.post(BACKEND_URL + url, requestBody, {
    headers: headers,
    params: params,
  });

  return response.data;
}

export async function UseDeleteApi(url, headers, params) {
  const response = await axios.delete(BACKEND_URL + url, {
    headers: headers,
    params: params,
  });

  return response.data;
}
