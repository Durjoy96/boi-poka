import React, { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-24">
      <h2 className="text-4xl text-base-content font-bold text-center mb-8">
        Books
      </h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {books.map((item, idx) => (
          <Book key={idx} data={item}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
