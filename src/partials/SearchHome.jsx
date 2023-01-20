import React from "react";

function SearchHome({ text, setText }) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex border border-cyan-200 rounded">
        <input
          type="text"
          className="block w-96 px-4 py-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchHome;
