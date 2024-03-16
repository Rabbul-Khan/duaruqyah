'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import SubCategoryList from './SubCategoryList';
import Image from 'next/image';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/category', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex flex-col gap-5 p-5">
      {categories.map((category) => {
        return (
          <div key={category.id} className="bg-[#E8f0f5] rounded-md p-4 ">
            <div className="grid grid-cols-[auto_1fr_auto] gap-3">
              <Image
                src="/dua-icon.png"
                width={40}
                height={40}
                alt="dua-icon"
              />
              <div>
                <h3 className="text-base font-semibold text-[#1FA45B]">
                  {category.cat_name_en}
                </h3>
                <p className="text-sm text-[#7E7E7E] ">
                  subcategory: {category.no_of_subcat}
                </p>
              </div>
              <p>{category.no_of_dua} duas</p>
            </div>

            <SubCategoryList catId={category.cat_id} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
