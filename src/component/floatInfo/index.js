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
            <Carousel items={selectedCard.carousel} />
            <div className="infoContainer">
              <div className="floatInfo">
                <div className="floatName">
                  {selectedCard.name}
                </div>
                <div className="floatCategory">
                  {selectedCard.category}
                </div>
                <div className="floatPrice">
                  {selectedCard.price}
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
