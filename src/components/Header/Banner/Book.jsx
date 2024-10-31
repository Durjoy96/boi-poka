import React from "react";
import { CiStar } from "react-icons/ci";

const Book = ({ data }) => {
  const { author, bookName, category, rating, image, tags } = data;
  return (
    <div className="p-6 rounded-2xl border">
      <div className="rounded-2xl py-6 bg-base-200 flex justify-center">
        <div className="max-w-32 h-40">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt={bookName}
          />
        </div>
      </div>
      <div className="mt-6 space-x-3">
        {tags.map((item, idx) => (
          <span
            key={idx}
            className="inline-block py-1 px-4 bg-base-200 rounded-full text-base font-medium text-primary"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="pb-5 border-b">
        <h3 className="text-2xl font-bold text-base-content my-4">
          {bookName}
        </h3>
        <p className="text-base font-medium text-base-content-secondary">
          By: {author}
        </p>
      </div>
      <div className="mt-5 flex justify-between">
        <span className="text-base font-medium text-base-content-secondary">
          {category}
        </span>
        <span className="flex items-center gap-2">
          {rating}
          <CiStar className="fill-base-content-secondary w-5 h-5"></CiStar>
        </span>
      </div>
    </div>
  );
};

export default Book;
