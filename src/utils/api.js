import axios from "axios";

const BASE_URL = "http://react-test.aventusinformatics.com/api/"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwODIxNTExLCJpYXQiOjE3MDA4MjEyMTEsImp0aSI6ImUzMmQ2M2VjOTNkYTQ0ZDg4NmU4ZDVlZjllZDY2Yjg3IiwidXNlcl9pZCI6MTJ9.4fSzx9f_ZGz6qLeicU_nOEQnFbNL6hzd6wb5J36wiWY"

const options = {

  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
  }
};

export const fetchDataFromApi = async () => {

  const { data } = await axios.get('http://react-test.aventusinformatics.com/api/feeds/get-videos', options);

  console.log("data");

  return data

};


