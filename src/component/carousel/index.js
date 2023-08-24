import clsx from "clsx";
import { useRef, useState } from "react";
import style from "./carousel.module.scss";

function Carousel({ items }) {
  const [current, setCurrent] = useState(0);
  const thumbnailRef = useRef(null);
  function nextBtn() {
    setCurrent((current) => {
      return current === items.length - 1 ? 0 : current + 1;
    });
  }
  function previousBtn() {
    setCurrent((current) => {
      return current === 0 ? items.length - 1 : current - 1;
    });
  }

  function handleThumbnailClick() {
    console.log(thumbnailRef.current.className);
    //  setCurrent(e.target.key);
  }
  return (
    <div className={clsx(style.carousel)}>
      <div className={clsx(style.carouselContent)}>
        <div className={clsx(style.imgList)}>
          {items.map((item, index) => {
            console.log("main carousel index", index);
            console.log("current", current);
            return (
              index === current && (
                <img alt="anh san pham" src={item} />
              )
            );
          })}
        </div>
      </div>
      <div className={clsx(style.carouselThumbnail)}>
        <button
          className={clsx(style.previousBtn)}
          onClick={previousBtn}
        >
          &lt;
        </button>
        {items.map((item, index) => {
          console.log("carousel index: ", index);
          return (
            <div
              ref={thumbnailRef}
              key={index}
              className={clsx(style.carouselItem, [
                (style.active =
                  current === index ? "active" : ""),
              ])}
              onClick={handleThumbnailClick}
            >
              <img alt="carouselItem" src={item} />
            </div>
          );
        })}
        <button
          className={clsx(style.nextBtn)}
          onClick={nextBtn}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
