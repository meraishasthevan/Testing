import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(response.data); 
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
    };




    fetchData();
  }, []); 

  return (
    <div>
      <h1>Dummy API Fetch</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p><strong>Username:</strong> {item.username}</p>
              <p><strong>Name:</strong> {item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Main;
