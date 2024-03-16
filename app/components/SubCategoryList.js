'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const SubCategoryList = ({ catId }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [duas, setDuas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/sub_category', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/api/duas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setDuas(data));
  }, []);

  return (
    <div className="p-5">
      {subCategories.map((subCategory) => {
        if (subCategory.cat_id === catId) {
          return (
            <ul key={subCategory.subcat_id}>
              <li className=" text-black list-disc marker:text-[#1FA45B] py-2">
                {subCategory.subcat_name_en}

                {duas.map((dua) => {
                  console.log(subCategory.cat_id, dua.subcat_id);
                  if (dua.subcat_id === subCategory.subcat_id) {
                    return (
                      <ul key={dua.dua_id} className="pl-5">
                        <li className="text-gray-700 py-2 list-disc  marker:text-[#386d50] text-sm ">
                          {dua.dua_name_en}
                        </li>
                      </ul>
                    );
                  }
                })}
              </li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default SubCategoryList;
