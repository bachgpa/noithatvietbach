import { useEffect, useRef, useState } from "react";
import "./cart.css";
import AddToCartBtn from "../../component/addToCartBtn";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const activeChildRef = useRef(null);
  const activeAllTopRef = useRef(null);
  const activeAllBotRef = useRef(null);
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalItemSelected, setTotalItemSelected] =
    useState(0);
  const [totalItemsInCart, setTotalItemsInCart] =
    useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    handleFooterCount();
    activeTopBot();
    // console.log("useEffect đang chạy");

    // setCartItems(
    //   JSON.parse(localStorage.getItem("cartItems")) || []
    // );
    // eslint-disable-next-line
  }, [totalMoney, selected, totalItemsInCart]);

  function handleFooterCount() {
    let totalItems = cartItems.reduce(
      (total, currentItem) => {
        total += currentItem.quantity;
        return total;
      },
      0
    );
    setTotalItemsInCart(totalItems);
    if (selected) {
      const activedList = Array.from(
        document.querySelectorAll(".selectedItem.active")
      );
      let totalCash = activedList.reduce(
        (total, currentItem, index) => {
          total +=
            cartItems[
              activedList[index].getAttribute("stt")
            ].price *
            cartItems[
              activedList[index].getAttribute("stt")
            ].quantity;
          return total;
        },
        0
      );
      setTotalMoney(totalCash);
      let totalItemSelected = activedList.reduce(
        (totalitem, item, index) => {
          totalitem +=
            cartItems[
              activedList[index].getAttribute("stt")
            ].quantity;
          return totalitem;
        },
        0
      );
      setTotalItemSelected(totalItemSelected);
    } else {
      setTotalItemSelected(0);
      setTotalMoney(0);
    }
  }
  /////////////////////////////////////////////////////////////
  function handleDelete(index) {
    // let a = [...cartItems];
    let a = JSON.parse(localStorage.getItem("cartItems"));
    console.log("a before", a);
    a.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(a));
    setCartItems((newList) => {
      newList = JSON.parse(
        localStorage.getItem("cartItems")
      );
      console.log("newlist: ", newList);
      return newList;
    });
    console.log(" cartItems after", a);
  }
  function subTractHandle(e) {
    const stt = e.target.getAttribute("stt");
    let a = JSON.parse(localStorage.getItem("cartItems"));
    a[stt].quantity -= 1;
    if (a[stt].quantity <= 0) {
      a.splice(stt, 1);
      console.log(a[stt].quantity);
    }
    localStorage.setItem("cartItems", JSON.stringify(a));
    setCartItems(
      JSON.parse(localStorage.getItem("cartItems"))
    );
  }

  function plusHandle(e) {
    // setNum(num + 1);
    const stt = e.target.getAttribute("stt");
    let a = JSON.parse(localStorage.getItem("cartItems"));
    a[stt].quantity += 1;
    localStorage.setItem("cartItems", JSON.stringify(a));
    setCartItems(
      JSON.parse(localStorage.getItem("cartItems"))
    );
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

  function handleActiveItem(element, allToggle) {
    const activeItem = getParent(element, ".selectedItem");
    const activeCheckbox =
      activeItem.querySelector(".checkbox");

    if (!allToggle) {
      if (!activeItem.classList.contains("active")) {
        activeItem.classList.add("active");
        activeCheckbox.checked =
          activeItem.classList.contains("active");
        setSelected(selected + 1);
      } else {
        activeItem.classList.remove("active");
        activeCheckbox.checked =
          activeItem.classList.contains("active");
        setSelected(selected - 1);
      }
    } else {
      switch (allToggle) {
        case "add":
          activeItem.classList.add("active");
          activeCheckbox.checked =
            activeItem.classList.contains("active");
          setSelected(cartItems.length);
          break;
        case "remove":
          activeItem.classList.remove("active");
          activeCheckbox.checked =
            activeItem.classList.contains("active");
          setSelected(0);
          break;
        default:
          console.log("lỗi mẹ nó rồi, check lại đi");
      }
    }
  }
  function activeTopBot() {
    const bottomSelect = getParent(
      activeAllBotRef.current,
      ".selectChange"
    );
    const bottomCheckbox =
      bottomSelect.querySelector(".checkbox");
    const topSelect = activeAllTopRef.current;
    const topCheckbox =
      topSelect.querySelector(".checkbox");
    if (selected === cartItems.length) {
      bottomSelect.classList.add("active");
      topSelect.classList.add("active");
      bottomCheckbox.checked =
        bottomSelect.classList.contains("active");
      topCheckbox.checked =
        topSelect.classList.contains("active");
    } else {
      bottomSelect.classList.remove("active");
      topSelect.classList.remove("active");
      bottomCheckbox.checked =
        bottomSelect.classList.contains("active");
      topCheckbox.checked =
        topSelect.classList.contains("active");
    }
  }

  function handleActiveAll(e) {
    if (e.target.classList.contains("selectChangeCover")) {
      console.log("bottom select");
      const bottomSelect = getParent(
        e.target,
        ".selectChange"
      );
      const bottomCheckbox =
        bottomSelect.querySelector(".checkbox");
      bottomSelect.classList.toggle("active");
      bottomCheckbox.checked =
        bottomSelect.classList.contains("active");
    }
    const activeAlltag = activeAllTopRef.current;
    var checkboxAllContainer;
    if (!activeAlltag.classList.contains("selectChange")) {
      checkboxAllContainer = getParent(
        activeAlltag,
        ".selectChange"
      );
    } else {
      checkboxAllContainer = activeAlltag;
    }
    const checkboxAll = checkboxAllContainer.querySelector(
      ".headerCheckbox"
    );
    checkboxAllContainer.classList.toggle("active");
    checkboxAll.checked =
      checkboxAllContainer.classList.contains("active");
    const cartComponent = getParent(
      activeAlltag,
      ".cartSelected"
    );
    const itemsContainer = cartComponent.querySelector(
      ".selectedContainer"
    );
    const itemList =
      itemsContainer.querySelectorAll(".selectChange");

    if (checkboxAllContainer.classList.contains("active")) {
      itemList.forEach((item) => {
        return handleActiveItem(item, "add");
      });
    } else {
      itemList.forEach((item) => {
        return handleActiveItem(item, "remove");
      });
    }
  }
  // function changeActive(index, status) {
  //   let a = cartItems.map((x) => {
  //     x.popup = false;
  //     return x;
  //   });

  //   a[index].popup = status;

  //   setCartItems(a);
  // }
  return (
    <div className="cartComponent">
      <section className="cartSelected">
        <div className="headerSelected">
          <div className="headerCheckboxContainer">
            <div
              className="selectChange"
              onClick={handleActiveAll}
              ref={activeAllTopRef}
            >
              <div className="inputContainer">
                <input
                  className="headerCheckbox checkbox"
                  // id="headerCheckbox"
                  type="checkbox"
                ></input>
                <div class="checkmark"></div>
              </div>
              <div
                // for="headerCheckbox"
                className="headerCheckboxLabel"
              >
                chọn tất cả
              </div>
            </div>
          </div>
          <div className="headerParts">
            <div className="number">số lượng</div>
            <div className="price">giá</div>
            <div className="delete">xóa</div>
          </div>
        </div>
        <div className="selectedContainer">
          {/* thay cartItems bằng chuỗi lấy từ local  */}
          {JSON.parse(
            localStorage.getItem("cartItems")
          ).map((item, index) => {
            return (
              <div className="selectedItem" stt={index}>
                <div className="selectedHead">
                  <div
                    className="selectChange"
                    onClick={(e) => {
                      return handleActiveItem(e.target);
                    }}
                  >
                    <div className="inputContainer">
                      <input
                        id="singleCheckbox"
                        className="singleCheckbox checkbox"
                        type="checkbox"
                        key={index}
                      ></input>
                      <div class="checkmark"></div>
                    </div>
                    <div
                      className="singleCheckboxLabel"
                      // for="singleCheckbox"
                    >
                      <img
                        className="itemImg"
                        alt="img"
                        src={item.image}
                      />
                    </div>
                  </div>
                  <Link
                    to={`.././products/${item.id}`}
                    className="itemName"
                  >
                    {item.name}
                  </Link>
                  <div
                    className={`itemClassifiedContainer ${
                      item.popup ? "active" : ""
                    }`}
                    ref={activeChildRef}
                  >
                    <div className="arrowOut"></div>
                    <div className="arrowIn"></div>
                    <div
                      className="itemClassified"
                      onClick={() => {
                        let popup = cartItems[index].popup;
                        let a = cartItems.map((x) => {
                          x.popup = false;
                          return x;
                        });

                        a[index].popup = !popup;

                        setCartItems(a);
                      }}
                    >
                      phân loại:
                      {item.idClassified}
                    </div>
                    <div className="classifyAdjust">
                      <AddToCartBtn
                        cardItem={item}
                        typeBtn="adj"
                        numSelect={false}
                        stt={index}
                        // định nghĩa 2 hàm cho component con
                        onUpdate={(data) => {
                          let a = [...cartItems];
                          a[index].idClassified = data;
                          setCartItems(a);
                        }}
                        onClosePopup={(i) => {
                          let a = [...cartItems];
                          a[i].popup = false;

                          setCartItems(a);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="selectedTail">
                  <div className="number adjNumber">
                    <button
                      idClassified={item.idClassified}
                      stt={index}
                      className="subtractBtn"
                      onClick={subTractHandle}
                    >
                      -
                    </button>
                    <div
                      className="currentNumber"
                      idClassified={item.idClassified}
                      stt={index}
                    >
                      {item.quantity}
                      {/* {num} */}
                    </div>
                    <button
                      idClassified={item.idClassified}
                      stt={index}
                      className="addBtn"
                      onClick={plusHandle}
                    >
                      +
                    </button>
                  </div>
                  <div className="price">
                    {item.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </div>
                  <div
                    className="deleteBtn"
                    onClick={() => {
                      handleDelete(index);
                    }}
                    // stt={index}
                  >
                    xóa
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cartFooter">
          <div className="footerCartInfo">
            <div className="checkboxAllFooter selectChange">
              <div
                className="selectChangeCover"
                onClick={handleActiveAll}
                ref={activeAllBotRef}
              ></div>
              <div className="inputContainer">
                <input
                  className="headerCheckbox checkbox"
                  type="checkbox"
                ></input>
                <div class="checkmark"></div>
              </div>
              <div className="headerCheckboxLabel">
                chọn tất cả
              </div>
              <span>({totalItemsInCart})</span>
            </div>
            <div className="totalCount">
              <div className="productsCount">
                ({totalItemSelected} sản phẩm):
              </div>
              <div className="totalCash">
                {totalMoney.toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
            </div>
          </div>
          <div className="confirmBuy">Nút mua hàng</div>
        </div>
      </section>
      <section className="suggestItems">
        sản phẩm đề xuất
      </section>
    </div>
  );
}

export default Cart;
