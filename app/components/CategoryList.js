'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SubCategoryList from './SubCategoryList';

const CategoryList = () => {
  // Define a state variable "items" and a function "setItems" to update the state
  const [categories, setCategories] = useState([]);

  // Use the useEffect hook to fetch data from the API endpoint when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/api/category', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', // Set the request headers to indicate JSON format
      },
    })
      .then((res) => res.json()) // Parse the response data as JSON
      .then((data) => setCategories(data)); // Update the state with the fetched data
  }, []);

  // Create a collection of JSX elements based on the fetched "items" data

  // Return the JSX elements wrapped in a Material-UI Grid container
  return (
    <>
      {categories.map((category) => {
        return (
          // Use the Material-UI Grid component to display each item in a grid layout
          <div key={category.id}>
            <h2>{category.cat_name_en}</h2>
            <p>subcategory: {category.no_of_subcat}</p>
            <SubCategoryList catId={category.cat_id} />
          </div>
        );
      })}
    </>
  );
};

export default CategoryList;
