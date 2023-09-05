import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import style from "./homeCarousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function HomeCarousel({ items }) {
  const [current, setCurrent] = useState(0);
  const thumbnailRef = useRef(null);
  const scrollRef = useRef(null);
  const carouselImgContainer = useRef(9);

  var crsImgContainerWidth =
    carouselImgContainer.current.offsetWidth;
  useEffect(() => {
    const setTimeCurrent = setTimeout(() => {
      console.log("timeout dang chay ...");
      current === items.length - 1
        ? setCurrent(0)
        : setCurrent(current + 1);
    }, 7000);

    return () => {
      console.log("timeout bi go");
      clearTimeout(setTimeCurrent);
    };
  }, [current, items.length]);

  function nextBtn() {
    current === items.length - 1
      ? setCurrent(0)
      : setCurrent(current + 1);
  }

  function previousBtn() {
    current === 0
      ? setCurrent(items.length - 1)
      : setCurrent(current - 1);
  }

  function handleThumbnailClick(e) {
    const index = parseInt(e.target.getAttribute("index"));
    setCurrent(index);
  }
  function handleScroll() {
    console.log("e");
    scrollRef.scrollLeft = scrollRef.scrollTop;
    scrollRef.scrollTop = 0;
  }
  return (
    <div className={clsx(style.carousel)}>
      {/* MAIN image CAROUSEL  */}
      <div className={clsx(style.imgList)}>
        <button
          className={clsx(style.previousBtn)}
          onClick={previousBtn}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div
          ref={carouselImgContainer}
          className={style.imgContainer}
          style={{
            transform: `translateX(-${
              current * (crsImgContainerWidth + 12)
            }px)`,
          }}
        >
          {items.map((item, index) => {
            return (
              <img
                key={index}
                className={clsx(style.carouselMainImg)}
                alt="anh san pham"
                src={item}
              />
            );
          })}
        </div>
        <button
          className={clsx(style.nextBtn)}
          onClick={nextBtn}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {/* THUMBNAIL  */}
      <div className={clsx(style.carouselThumbnail)}>
        <div
          ref={scrollRef}
          className={clsx(style.carouselItemContainer)}
          onScroll={handleScroll}
        >
          {items.map((item, index) => {
            return (
              <img
                ref={thumbnailRef}
                key={index}
                className={clsx(style.carouselItem, {
                  [style.active]: current === index,
                })}
                index={index}
                onClick={handleThumbnailClick}
                alt="carouselItem"
                src={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
