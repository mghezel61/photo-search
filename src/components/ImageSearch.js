import React, { useState } from "react";

const ImageSearch = (props) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchText(text);
  };
  return (
    <div className="flex justify-center mb-5 sticky top-0 bg-white">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search Image Term"
            aria-label="Full name"
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700  text-sm border-4 text-dark py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
