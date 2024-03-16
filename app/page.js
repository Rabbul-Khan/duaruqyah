'use client';

import CategoryList from './components/CategoryList';
import { useState, useEffect } from 'react';

export default function Home() {
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
    <main className="grid min-h-screen grid-cols-[1fr_2fr] p-24 gap-5 bg-[#EBEEF2] text-black">
      <div className="flex flex-col bg-white">
        <h2 className="bg-[#1FA45B] text-white text-center p-5 rounded-t-lg  ">
          Categories
        </h2>
        <input
          className="border border-[#E2E2E2] p-3 m-4 rounded-md"
          placeholder="Search by Categories"
        />
        <CategoryList />
      </div>
      <div className="bg-[#EBEEF2] ">
        <div>
          {subCategories.map((subcategory) => {
            return (
              <div key={subcategory.subcat_id}>
                <p
                  key={subcategory.subcat_id}
                  className="p-5 mb-5 bg-white rounded-lg text-[#1FA45B]"
                >
                  Section:{' '}
                  <span className="text-[#393939]">
                    {subcategory.subcat_name_en}
                  </span>
                </p>
                <div>
                  {duas.map((dua) => {
                    if (dua.subcat_id === subcategory.subcat_id) {
                      return (
                        <div
                          key={dua.dua_id}
                          className="p-5 my-5 bg-white rounded-lg"
                        >
                          <p className="text-[#1FA45B]">
                            <span className="text-[#393939]">
                              {dua.dua_name_en}
                            </span>
                          </p>
                          <p>{dua.top_en}</p>
                          <p className="text-[#1FA45B]">Reference:</p>
                          <p>{dua.refference_en}</p>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
