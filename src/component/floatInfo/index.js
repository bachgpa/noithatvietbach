import { CardContext } from "../../App";
import AddToCartBtn from "../addToCartBtn";
import Carousel from "../productCarousel";
import "./floatInfo.css";
import { useContext, useEffect, useRef } from "react";

function FloatInfo() {
  const { selectedCard } = useContext(CardContext);
  const { setSelectedCard } = useContext(CardContext);
  const floatRef = useRef(null);
  const bgFloatRef = useRef(null);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  function handleOutsideClick(e) {
    e.preventDefault();
    if (
      bgFloatRef.current &&
      bgFloatRef.current.contains(e.target) &&
      !floatRef.current.contains(e.target)
    ) {
      setSelectedCard(false);
      console.log("nhap ra ngoai floatref", selectedCard);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick
      );
    };
    // eslint-disable-next-line
  }, []);

  function handleAddCartClick() {
    return { selectedCard };
  }

  return (
    <div>
      {selectedCard && (
        <div
          className="backgroundFloat"
          onClick={handleOutsideClick}
          ref={bgFloatRef}
        >
          <div
            className="floatContainer"
            ref={floatRef}
            onClick={handleOutsideClick}
          >
            <div className="carouselContainer">
              <Carousel items={selectedCard.carousel} />
            </div>
            <div className="infoContainer">
              <div className="floatInfo">
                <div className="floatName">
                  {selectedCard.name}
                </div>
                <div className="floatCategory">
                  {selectedCard.category}
                </div>
                <div className="floatPrice">
                  {formatter.format(selectedCard.price)}
                </div>
                <div className="floatDescription">
                  {selectedCard.description}
                </div>
              </div>

              <AddToCartBtn
                onClick={handleAddCartClick}
                cardItem={selectedCard}
                typeBtn={"add"}
                numSelect={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatInfo;
