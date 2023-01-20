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
import Results from "./Results";
import { authorMangasQuery } from "../querys/authorMangasQuery";
import { authorDetails } from "../querys/authorDetailsQuery";

const gridElementStyle = "border-2 p-8";
function Author() {
  const { id, aid } = useParams();
  const { res: mangas } = useSPARQL(authorMangasQuery(id));
  const { res: info } = useSPARQL(authorDetails(aid));
  const data = info[0];
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <div className="pt-20 px-8 flex justify-center w-full">
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
          <div className="grid grid-cols-2 my-16 mx-8 md:mx-40">
            <div className={gridElementStyle}>Author</div>
            <div className={gridElementStyle}>{data.authorLabel.value}</div>
            <div className={gridElementStyle}>Birth Date</div>
            <div className={gridElementStyle}>{data.birth.value}</div>
            <div className={gridElementStyle}>Birth Place</div>
            <div className={gridElementStyle}>{data.cityLabel.value}</div>
            <div className={gridElementStyle}>Gender</div>
            <div className={gridElementStyle}>{data.genderLabel.value}</div>
          </div>
        )}
        <div className="py-0 px-8 flex justify-center w-full">
          <p
            className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Mangas
            </span>
          </p>
        </div>
        <Results data={mangas} />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Author;
