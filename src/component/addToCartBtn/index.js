import { useState } from "react";
import "./addToCartBtn.css";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTicketSimple,
} from "@fortawesome/free-solid-svg-icons";
{
  /* sửa phần này, thêm oclick xử lý size & color
     sau đó đưa object mới vào cardItem  */
}
function AddToCartBtn({ cardItem }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  // const [selectedSize, setSelectedSize] = useState("");
  const [num, setNum] = useState(1);
  // lấy sp từ localStorage
  const itemsToStorage =
    JSON.parse(localStorage.getItem("cartItems")) || [];
  // hàm xử lý add to giỏ hàng
  function handleAddToCart() {
    var messageElement =
      document.querySelector(".errorMessage");
    console.log(messageElement);
    if (color === "" || size === "") {
      messageElement.innerText =
        "Vui lòng chọn phân loại sản phẩm";
      console.log("Vui lòng chọn phân loại sản phẩm");
    } else {
      messageElement.innerText = "";
    }
    for (let i = 0; i < num; i++) {
      itemsToStorage.push(cardItem);
    }

    localStorage.setItem(
      "cartItems",
      JSON.stringify([...itemsToStorage])
    );
  }
  function subTractHandle() {
    num > 1 && setNum(num - 1);
  }
  function plusHandle() {
    setNum(num + 1);
  }
  function handleOptions(e) {
    var selectedOption = e.target;
    document.querySelector(".errorMessage").innerText = "";
    var options =
      selectedOption.parentElement.querySelectorAll(
        ".infoOptions"
      );

    // nếu option chưa được chọn
    if (!selectedOption.classList.contains("active")) {
      // Nếu chưa, thêm class active và xóa class active khỏi các option khác
      options.forEach((option) => {
        option.classList.remove("active");
      });
      selectedOption.classList.add("active");

      // Lưu value của option active vào biến
      var valueType = selectedOption.getAttribute("type");
      // setColor(activeValue);
      if (valueType === "color") {
        var colorOption =
          selectedOption.getAttribute("value");
        setColor(colorOption);
        console.log(colorOption);
      } else {
        var sizeOption =
          selectedOption.getAttribute("value");
        setSize(sizeOption);
        console.log(sizeOption);
      }
      // nếu option đã được chọn
    } else {
      selectedOption.classList.remove("active");
      setColor("");
      setSize("");
    }
  }
  return (
    <div className="AddBtnContainer">
      <div className="infoContainer">
        {/* color  */}
        <div className="infoColor infoTitle">
          <h4> Màu sắc</h4>
          <div
            value={selectedColor}
            onChange={(e) =>
              setSelectedColor(e.target.value)
            }
            className="infoDetail"
          >
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
            {cardItem.size.map((size, index) => {
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
