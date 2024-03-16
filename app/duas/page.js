//'use client';
// import { useState } from 'react';

import DuaList from '../components/duaList';

const sqlite3 = require('sqlite3').verbose();

export default function Duas() {
  //   const [duas, setDuas] = useState([]);
  //   // open the database

  return (
    <>
      <h1>Duas</h1>
      <DuaList />
      {/* {duas.map((dua) => {
        return <p>{dua}</p>;
      })} */}
    </>
  );
}
