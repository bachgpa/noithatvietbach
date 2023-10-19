import { useState } from "react";
import "./cart.css";

function Cart() {
  // đọu mớ,
  var cartItems = JSON.parse(
    localStorage.getItem("cartItems")
  );
  const [num, setNum] = useState(1);
  var firstItem = cartItems[0];

  console.log(firstItem);

  //số lượng (phải lặp qua và đém số lượng=> js)
  function subTractHandle() {
    num > 1 && setNum(num - 1);
  }
  function plusHandle() {
    setNum(num + 1);
  }

  //set trạng thái active với sp được chọn thanh toán
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
  function setActiveItem(e) {
    const selectedItem = getParent(
      e.target,
      ".selectedItem"
    );
    selectedItem.classList.toggle("active");
    return selectedItem;
  }

  //
  //hiển thị sản phẩm đã chọn (lấy tử local storage)
  //checkbox chọn sp
  //phân loại hàng nằm bên cạnh, fixable (lấy được từ item)
  function adjustNumber(e) {
    const adjustParent = e.target;
    const adjustPart = adjustParent.querySelector(
      ".classifyAdjust"
    );

    adjustPart.classList.toggle("active");
  }

  //nút xóa
  //
  //floater nổi bên dưới
  //checkbox chọn tất cả/xóa tất cả (js chọn tất cả checkbox và thay đổi trạng thái)
  //tổng số sp (tính tổng từ số lượng sp bên trên)
  //tổng số tiền (tính tổng từ items)
  //nút mua hàng
  return (
    <div className="cartComponent">
      <section className="cartSelected">
        <div className="headerSelected">
          <div className="headerCheckboxContainer">
            <input
              className="headerCheckbox checkbox"
              id="headerCheckbox"
              type="checkbox"
            ></input>
            <label
              for="headerCheckbox"
              className="headerCheckboxLabel"
            >
              chọn tất cả
            </label>
          </div>
          <div className="headerParts">
            <div className="number">số lượng</div>
            <div className="price">giá</div>
            <div className="delete">xóa</div>
          </div>
        </div>
        <div className="selectedContainer">
          <div className="selectedItem">
            <div className="selectedHead">
              {/* <p>itemSelected</p> */}
              <input
                id="singleCheckbox"
                className="singleCheckbox checkbox"
                type="checkbox"
                onChange={setActiveItem}
              ></input>
              <label
                className="singleCheckboxLabel"
                for="singleCheckbox"
              >
                <img
                  className="itemImg"
                  alt="img"
                  src={firstItem.image}
                />
              </label>
              <p className="itemName">{firstItem.name}</p>
              <div
                className="itemClassified"
                onClick={adjustNumber}
              >
                phân loại: {firstItem.idClassified}
                <div className="classifyAdjust">
                  <div className="classifyAdjustDetail">
                    Color: {firstItem.color}
                  </div>
                  <div className="classifyAdjustDetail">
                    Size: {firstItem.size}
                  </div>
                </div>
              </div>
            </div>
            <div className="selectedTail">
              <div className="number adjNumber">
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
              </div>
              <div className="price">{firstItem.price}</div>{" "}
              <div className="delete">xóa</div>
            </div>
          </div>
        </div>
        <div className="cartFooter">
          float tính tổng giá tính tổng sản phẩm active nút
          mua hàng
        </div>
      </section>
      <section className="suggestItems">
        sản phẩm đề xuất
      </section>
    </div>
  );
}

export default Cart;
