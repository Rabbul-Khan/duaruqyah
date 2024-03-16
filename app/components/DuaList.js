'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const DuaList = () => {
  // Define a state variable "items" and a function "setItems" to update the state
  const [duas, setDuas] = useState([]);

  // Use the useEffect hook to fetch data from the API endpoint when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/api/duas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', // Set the request headers to indicate JSON format
      },
    })
      .then((res) => res.json()) // Parse the response data as JSON
      .then((data) => setDuas(data)); // Update the state with the fetched data
  }, []);

  // Create a collection of JSX elements based on the fetched "items" data

  // Return the JSX elements wrapped in a Material-UI Grid container
  return (
    <>
      {duas.map((dua) => {
        return (
          // Use the Material-UI Grid component to display each item in a grid layout
          <div key={dua.id}>
            <h2>{dua.id}</h2>
            <p>{dua.dua_name_bn}</p>
            <p>{dua.dua_arabic}</p>
          </div>
        );
      })}
    </>
  );
};

export default DuaList;
