'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const SubCategoryList = ({ catId }) => {
  // Define a state variable "items" and a function "setItems" to update the state
  const [subCategories, setSubCategories] = useState([]);

  // Use the useEffect hook to fetch data from the API endpoint when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/api/sub_category', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', // Set the request headers to indicate JSON format
      },
    })
      .then((res) => res.json()) // Parse the response data as JSON
      .then((data) => setSubCategories(data)); // Update the state with the fetched data
  }, []);

  return (
    <>
      {subCategories.map((subCategory) => {
        console.log(typeof catId);
        console.log(subCategory.cat_id.toString() === catId);
        if (subCategory.cat_id === catId) {
          return (
            <ul key={subCategory.subcat_id}>
              <li className="pl-5 text-green-500">
                {subCategory.subcat_name_en}
              </li>
            </ul>
          );
        }
      })}
    </>
  );
};

export default SubCategoryList;
