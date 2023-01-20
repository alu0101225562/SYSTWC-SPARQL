import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import { Routes, Route, useLocation, useParams, Link } from "react-router-dom";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";
import useSPARQL from "../helpers/useSPARQL";
import { mangaQuery } from "../querys/mangaQuery";
import { mangaDetails } from "../querys/mangaDetails";
import { charactersQuery } from "../querys/charactersQuery";

const gridElementStyle = "border-2 p-8";
function Manga() {
  const { id } = useParams();
  const { res: info } = useSPARQL(mangaDetails(id));
  const { res: characters } = useSPARQL(charactersQuery(id));
  const data = info[0];
  const date = data?.date?.value ?? "Uknown";
  const author = data?.author?.value ?? null;
  const authorLabel = data?.authorLabel?.value.includes("http")
    ? "Uknown"
    : data?.authorLabel?.value;
  const genre = data?.genreLabel?.value ?? "Uknown";
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <div className="py-20 flex justify-center w-full text-center">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {id}
            </span>
          </h1>
        </div>
        {data && (
          <div>
            <div
              className="relative flex justify-center mb-2 max-h-60 mx-8 md:mx-40"
              data-aos="zoom-y-out"
              data-aos-delay="450"
              style={{ overflow: "hidden" }}
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={data.imagen.value}
                  width="768"
                  height="432"
                  alt="Hero"
                />
                <svg
                  className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="hero-ill-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="99.24%"
                      id="hero-ill-b"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="hero-ill-e"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        )}
        {data && (
          <div className="grid grid-cols-2 my-16 mx-8 md:mx-40">
            {author && (
              <>
                <div className={gridElementStyle}>Author</div>
                <div className={gridElementStyle}>
                  {data?.authorLabel?.value.includes("http") ? (
                    <p>{author}</p>
                  ) : (
                    <Link
                      to={
                        "/authors/" +
                        data?.authorLabel?.value +
                        "/" +
                        data?.author?.value.split("/").reverse()[0]
                      }
                      className="underline text-cyan-500"
                    >
                      {authorLabel}
                    </Link>
                  )}
                </div>
              </>
            )}
            {date && (
              <>
                <div className={gridElementStyle}>Date</div>
                <div className={gridElementStyle}>
                  <p>{date}</p>
                </div>
              </>
            )}

            <div className={gridElementStyle}>Genre</div>
            <div className={gridElementStyle}>
              <p>{genre}</p>
            </div>
          </div>
        )}
        {characters.length > 0 && (
          <div className="py-0 px-8 flex justify-center w-full">
            <p
              className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Characters
              </span>
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 mx-8 md:mx-40 gap-y-2 mb-16">
          {characters &&
            characters.map((ch, key) => (
              <div className="border-2 border-gray-200 px-8 py-4">
                <p>{ch.charactersLabel.value}</p>
              </div>
            ))}
        </div>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Manga;
