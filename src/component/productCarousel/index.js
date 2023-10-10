import clsx from "clsx";
import { useRef, useState } from "react";
import style from "./Productcarousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Carousel({ items }) {
  const [current, setCurrent] = useState(0);
  const thumbnailRef = useRef(null);
  const scrollRef = useRef(null);
  function nextBtn() {
    const container = scrollRef.current;
    container.scrollLeft += 112;
  }
  function previousBtn() {
    const container = scrollRef.current;
    container.scrollLeft -= 112;
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
      <div className={clsx(style.carouselContent)}>
        <div className={clsx(style.imgList)}>
          {items.map((item, index) => {
            return (
              index === current && (
                <img
                  key={index}
                  className={clsx(style.carouselMainImg)}
                  alt="anh san pham"
                  src={item}
                />
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
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
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
                index={index}
                className={clsx(style.carouselItem, {
                  [style.active]: current === index,
                })}
                onClick={handleThumbnailClick}
                alt="carouselItem"
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
    </div>
  );
}

export default Carousel;
