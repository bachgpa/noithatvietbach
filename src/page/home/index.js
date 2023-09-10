import clsx from "clsx";
import style from "./home.module.scss";
import HomeCarousel from "../../component/homeCarousel";
import Category from "../../component/category";
import HomeCarouselList from "../../assets/homeCarousel";
import FloatInfo from "../../component/floatInfo";
import React, { useState } from "react";

export const getDataFromCard = React.createContext();
export const setDataFromCard = React.createContext();
function Home() {
  const [dataFromCard, setDataFromCard] = useState(null);

  // Hàm callback để nhận dữ liệu từ Card
  const handleDataFromCard = (data) => {
    setDataFromCard(data);
  };
  return (
    <div className={clsx(style.home)}>
      <HomeCarousel items={HomeCarouselList} />
      <getDataFromCard.Provider value={handleDataFromCard}>
        <setDataFromCard.Provider value={dataFromCard}>
          <Category />
          <FloatInfo />
        </setDataFromCard.Provider>
      </getDataFromCard.Provider>
    </div>
  );
}

export default Home;
