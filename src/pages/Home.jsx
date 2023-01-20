import React, { useEffect, useState } from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";
import useSPARQL from "../helpers/useSPARQL";
import { mangaQuery } from "../querys/mangaQuery";
import SearchHome from "../partials/SearchHome";
import Results from "../partials/Results";

function Home() {
  const [text, setText] = useState("");
  const { res } = useSPARQL(mangaQuery(text));

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <SearchHome setText={setText} text={text} />
        <Results data={res} />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
