import clsx from "clsx";
import style from "./home.module.scss";
import HomeCarousel from "../../component/homeCarousel";
import Category from "../../component/category";
import HomeCarouselList from "../../assets/homeCarousel";
import FloatInfo from "../../component/floatInfo";
import React, { createContext, useState } from "react";

export const CardContext = createContext();

function Home() {
  //state thay doi du lieu
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className={clsx(style.home)}>
      <HomeCarousel items={HomeCarouselList} />

      <CardContext.Provider
        value={{ selectedCard, setSelectedCard }}
      >
        <Category />
        <FloatInfo />
      </CardContext.Provider>
    </div>
  );
}

export default Home;
