import React from "react";
import { Link } from "react-router-dom";

function Results({ data }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-8 max-w-5xl">
        {data.map((item, key) => (
          <Link to={"/mangas/" + item.mangaLabel.value}>
            <div
              className="grid-span-1 border-2 p-2 border-gray-200 hover:border-cyan-200"
              key={key}
            >
              <div style={{ height: 100, width: 200, overflow: "hidden" }}>
                <img
                  src={item.imagen.value}
                  style={{ objectFit: "scale-down" }}
                />
              </div>
              <p>{item.mangaLabel.value}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Results;
