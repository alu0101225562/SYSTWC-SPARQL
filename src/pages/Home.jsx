import React, { useEffect } from "react";

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

function Home() {
  const [res] = useSPARQL(mangaQuery("Na"));
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {res.map((n, i) => (
        <p>{n.mangaLabel.value}</p>
      ))}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
