import "./floatInfo.css";
import { useContext, useEffect, useRef } from "react";
import {
  getActive,
  setActive,
  setData,
} from "../../page/home";

function FloatInfo() {
  const data = useContext(setData);
  const activeFuction = useContext(getActive);
  let active = useContext(setActive);
  useEffect(() => {}, [setActive]);

  function setFalse() {
    activeFuction(false);
  }
  function setTrue() {
    activeFuction(true);
  }

  // const [active, setActiveFloat] = useState(getActive);
  // console.log(getActive, active);
  const floatRef = useRef(null);

  // HÀM XỬ LÝ CLICK RA NGOÀI INPUT
  const handleOutsideClick = (event) => {
    if (
      // nhấn ra ngoài
      floatRef.current &&
      !floatRef.current.contains(event.target)
    ) {
      setFalse();
    }
    if (
      // nhấn vào trong và có giá trị đang tìm kiếm
      floatRef.current &&
      floatRef.current.contains(event.target) &&
      floatRef.current.value
    ) {
      setTrue();
    }
  };
  // THÊM SỰ KIỆN CLICK SẼ GỌI HÀM handleOutsideClick
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick
      );
    };
  }, []);

  return (
    <div>
      {active && (
        <div className="backgroundFloat">
          <div
            className="floatContainer"
            ref={floatRef}
            // onClick={switchActive}
          >
            <div className="floatImg">img</div>
            <div className="floatInfo">
              <div className="floatName">{data.name}</div>
              <div className="floatCategory">
                {data.category}
              </div>
              <div className="floatPrice">{data.price}</div>
              <div className="floatDescription">
                {data.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatInfo;
