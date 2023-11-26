import { useEffect, useRef, useState } from "react";
import "./addToCartBtn.css";
import "../../assets/responsiveCss/grid.css";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import useOutsideAlerter from "../../hooks/useOutsideAlerter";

function AddToCartBtn({
  cardItem,
  typeBtn,
  numSelect,
  stt,
  // nhận 2 hàm được định nghĩa từ component cha
  onUpdate,
  onClosePopup,
}) {
  const [color, setColor] = useState(
    cardItem.colorClassified
  );
  const [size, setSize] = useState(cardItem.sizeClassified);
  const [num, setNum] = useState(1);
  const addBtnRef = useRef(null);

  // chép sp từ localStorage ra biến itemsToStorage
  var itemsToStorage;
  // hàm xử lý lấy parent
  function handleClickOutside(event) {
    if (
      addBtnRef.current &&
      !addBtnRef.current.contains(event.target) &&
      !event.target.classList.contains("itemClassified")
    ) {
      // alert("You clicked outside of me!");
      if (onClosePopup) {
        onClosePopup(stt);
      }
    }
  }
  itemsToStorage =
    // eslint-disable-next-line
    JSON.parse(localStorage.getItem("cartItems")) || [];
  useEffect(() => {
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
    // eslint-disable-next-line
  }, [color, size, num]);
  function getParent(element, selector) {
    if (!element.matches(selector)) {
      while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
          return element.parentElement;
        }
        element = element.parentElement;
      }
    } else {
      return element;
    }
  }

  // hàm xử lý add to giỏ hàng
  function handleAddToCart() {
    var messageElement =
      document.querySelector(".errorMessage");
    // chép cardItem vào itemFixed
    var itemFixed = { ...cardItem };
    // thay color và size của itemFixed

    itemFixed.colorClassified = color;
    itemFixed.sizeClassified = size;
    itemFixed.idClassified =
      itemFixed.id + "/" + size + "/" + color;

    // lấy vị trí của cardItem trong local
    var sameIdIndex;
    if (itemsToStorage && itemsToStorage.length) {
      sameIdIndex = JSON.parse(
        localStorage.getItem("cartItems")
      ).findIndex((i) => {
        return i.idClassified === cardItem.idClassified;
      });
    } else {
      sameIdIndex = -1;
    }
    if (
      color === "" ||
      color === null ||
      color === undefined ||
      size === "" ||
      size === null ||
      size === undefined
    ) {
      messageElement.innerText =
        "Vui lòng chọn phân loại sản phẩm";
      document
        .querySelector(".adjOption")
        .classList.add("invalid");
    } else {
      // khi đã chọn đủ cả size và color
      messageElement.innerText = "";

      //có numselect thì
      if (numSelect) {
        // console.log(numSelect);
        itemFixed.quantity = num;
        // không có sản phẩm trùng idclassified
        if (sameIdIndex === -1) {
          // GÁN LẠI LOCALSTORAGE
          itemsToStorage.push(itemFixed);
          localStorage.setItem(
            "cartItems",
            JSON.stringify(itemsToStorage)
          );
        }
        // có sp trùng idclassified
        else {
          itemsToStorage[sameIdIndex].quantity +=
            itemFixed.quantity;
          const [existingProduct] = itemsToStorage.splice(
            sameIdIndex,
            1
          );
          itemsToStorage.push(existingProduct);
          localStorage.setItem(
            "cartItems",
            JSON.stringify(itemsToStorage)
          );
        }
      } else {
        // console.log(itemsToStorage);
        // console.log(sameIdIndex);
        // console.log(cardItem);
        // console.log(itemsToStorage[sameIdIndex]);

        itemsToStorage[parseInt(stt)].colorClassified =
          color;

        itemsToStorage[parseInt(stt)].sizeClassified = size;
        if (color && size) {
          itemsToStorage[parseInt(stt)].idClassified =
            itemFixed.id + "/" + size + "/" + color;
        }
        // gán lại local
        localStorage.setItem(
          "cartItems",
          JSON.stringify(itemsToStorage)
        );
      }

      if (onUpdate) {
        onUpdate(itemFixed.idClassified);
      }
      if (onClosePopup) {
        onClosePopup(stt);
      }
    }
    // console.log(num);
  }
  function subTractHandle() {
    num > 1 && setNum(num - 1);
  }
  function plusHandle() {
    setNum(num + 1);
  }
  function handleOptions(e) {
    var selectedOption = getParent(
      e.target,
      ".infoOptions"
    );
    var parent = getParent(selectedOption, ".infoDetail");
    var options = parent.querySelectorAll(".infoOptions");
    var valueType = selectedOption.getAttribute("type");

    document
      .querySelector(".adjOption")
      .classList.remove("invalid");
    document.querySelector(".errorMessage").innerText = "";

    // nếu option chưa được chọn
    if (!selectedOption.classList.contains("active")) {
      // Nếu chưa, thêm class active và xóa class active khỏi các option khác
      options.forEach((option) => {
        option.classList.remove("active");
      });
      selectedOption.classList.add("active");

      // lưu giá trị active
      if (valueType === "color") {
        var colorOption =
          selectedOption.getAttribute("value");
        setColor(colorOption);
      }
      if (valueType === "size") {
        var sizeOption =
          selectedOption.getAttribute("value");
        setSize(sizeOption);
      }
      // nếu option đã được chọn
    } else {
      selectedOption.classList.remove("active");
      // lưu giá trị active
      if (valueType === "color") {
        setColor("");
      }
      if (valueType === "size") {
        setSize("");
      }
    }
  }
  return (
    <div className="AddBtnContainer" ref={addBtnRef}>
      <div className="infoAddBtnContainer">
        <div className="adjOption">
          {/* color  */}
          <div className="infoColor infoTitle">
            <h4> Màu sắc</h4>
            <div className="infoDetail">
              {/* <option value="">Selected Color</option> */}
              {cardItem.color.map((color) => {
                return (
                  <div
                    type="color"
                    key={color}
                    value={color}
                    className={`colorOfProduct infoOptions ${
                      cardItem.colorClassified === color
                        ? "active"
                        : ""
                    }`}
                    onClick={handleOptions}
                  >
                    {color}
                    <div className="activeTick">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* size  */}
          <div className="infoSize infoTitle">
            <h4>Size</h4>
            <div className="infoDetail infoSizeDetail">
              {cardItem.size.map((size) => {
                return (
                  <div
                    type="size"
                    key={size}
                    value={size}
                    onClick={handleOptions}
                    className={`sizeOfProduct infoOptions ${
                      cardItem.sizeClassified === size
                        ? "active"
                        : ""
                    }`}
                  >
                    {size}
                    <div className="activeTick">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* adjust number  */}
          {numSelect && (
            <div className="adjNumber">
              <button
                className="subtractBtn"
                onClick={subTractHandle}
              >
                -
              </button>
              <div className="currentNumber">{num}</div>
              <button
                className="addBtn"
                onClick={plusHandle}
              >
                +
              </button>
              <div className="storageInfo">
                100 sản phẩm có sẵn
              </div>
            </div>
          )}

          <div className="errorMessage"></div>
        </div>
      </div>
      {/*  btn  */}
      {(typeBtn === "add" && (
        <div className="addToCartBtn">
          <Button
            Type={"primary"}
            Children={"Add to Cart"}
            onClick={handleAddToCart}
          />
        </div>
      )) ||
        (typeBtn === "adj" && (
          <div className="adjustContainer">
            {/* <div className="backBtn">
                <Button
                  Type={"bgcGrey"}
                  Children={"TRỞ LẠI"}
                  onClick={handleCloseElement}
                  ref={closeAdjOptionRef}
                />
              </div> */}
            <div className="confirmBtn">
              <Button
                Type={"primary"}
                Children={"XÁC NHẬN"}
                onClick={handleAddToCart}
                // stt={}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default AddToCartBtn;
