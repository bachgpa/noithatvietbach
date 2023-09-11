import clsx from "clsx";
import style from "./home.module.scss";
import HomeCarousel from "../../component/homeCarousel";
import Category from "../../component/category";
import HomeCarouselList from "../../assets/homeCarousel";
import FloatInfo from "../../component/floatInfo";
import React, { useState } from "react";

//lấy dữ liệu
export const getDataFromCard = React.createContext();
export const getActive = React.createContext();
//gán dữ liệu
export const setData = React.createContext();
export const setActive = React.createContext();
function Home() {
  const [cardData, setCardData] = useState(null);
  const [activeFloat, setActiveFloat] = useState(false);

  // Hàm callback để nhận dữ liệu từ Card
  function handleActiveFunction(active) {
    setActiveFloat(active);
    // console.log("data got from card:", data);
    // console.log("active got from card:", active);
  }
  function handleCardDataFunction(data) {
    setCardData(data);
  }
  return (
    <div className={clsx(style.home)}>
      <HomeCarousel items={HomeCarouselList} />
      <getDataFromCard.Provider
        value={handleCardDataFunction}
      >
        <getActive.Provider value={handleActiveFunction}>
          <setData.Provider value={cardData}>
            <setActive.Provider value={activeFloat}>
              <Category />
              <FloatInfo />
            </setActive.Provider>
          </setData.Provider>
        </getActive.Provider>
      </getDataFromCard.Provider>
    </div>
  );
}

export default Home;
