import { useState } from "react";
import "./addToCartBtn.css";
import "../../assets/responsiveCss/grid.css";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function AddToCartBtn({ cardItem }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [num, setNum] = useState(1);
  // lấy sp từ localStorage
  const itemsToStorage =
    JSON.parse(localStorage.getItem("cartItems")) || [];

  // hàm xử lý lấy parent
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
    var itemFixed = { ...cardItem };

    if (color === "" || size === "") {
      messageElement.innerText =
        "Vui lòng chọn phân loại sản phẩm";
      document
        .querySelector(".adjOption")
        .classList.add("invalid");
    } else {
      messageElement.innerText = "";

      // thay color và size
      itemFixed.color = color;
      itemFixed.size = size;
      itemFixed.idClassified =
        itemFixed.id + "/" + size + "/" + color;

      // cái gì đấy không nhớ
      for (let i = 0; i < num; i++) {
        itemsToStorage.push(itemFixed);
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify([...itemsToStorage])
      );
    }
    console.log(itemFixed);
    console.log(num);
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
        console.log(colorOption);
      }
      if (valueType === "size") {
        var sizeOption =
          selectedOption.getAttribute("value");
        setSize(sizeOption);
        console.log(sizeOption);
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
    <div className="AddBtnContainer">
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
                    className="colorOfProduct infoOptions"
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
                    className="sizeOfProduct infoOptions"
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
          <div className="adjNumber">
            <button
              className="subtractBtn"
              onClick={subTractHandle}
            >
              -
            </button>
            <div className="currentNumber">{num}</div>
            <button className="addBtn" onClick={plusHandle}>
              +
            </button>
            <div className="storageInfo">
              100 sản phẩm có sẵn
            </div>
          </div>

          <div className="errorMessage"></div>
        </div>
      </div>
      {/* add btn  */}
      <div className="addToCartBtn">
        <Button
          Type={"primary"}
          Children={"Add to Cart"}
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default AddToCartBtn;
