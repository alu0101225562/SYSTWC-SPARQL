import React from "react";
import { Link } from "react-router-dom";

function ResultsAuthor({ data }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-8 max-w-5xl">
        {data &&
          data.map((item, key) => (
            <Link
              to={
                "/authors/" +
                item.authorLabel.value +
                "/" +
                item.author.value.split("/").reverse()[0]
              }
            >
              <div
                className="grid-span-1 border-2 p-2 border-gray-200 hover:border-cyan-200"
                key={key}
              >
                <p>{item.authorLabel.value}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ResultsAuthor;
