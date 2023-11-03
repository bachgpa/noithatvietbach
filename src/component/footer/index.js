// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import "./footer.css";

// footer chưa dính ở dưới cùng

function Footer({ ojb }) {
  return (
    <div className="footerAdjPosition ">
      <div className="gridContainer grid wide">
        <div className="footerContainer row">
          {/* <div className="rowMargin"> */}
          <div className="footerInfo info l-3 m-6 c-12">
            <div className="footerInfoMargin">
              <h3 className="footerInfoTitle">
                Nội Thất Việt Bách
              </h3>
              <div className="footerInfoDetail footerIntroduction">
                <p>
                  Nội Thất Việt Bách là đơn vị chuyên cung
                  cấp bàn ghế gaming, streamer, setup bàn
                  ghế văn phòng... trên toàn quốc.
                </p>
              </div>
              <div className="footerInfoDetail footerAddress">
                <p>
                  Địa chỉ: Số 86A, Ngõ 86 Lương Khánh Thiện
                  - P. Tương Mai - Hoàng Mai - Hà Nội
                </p>
              </div>
              {/* <div className="footerInfoDetail">
                  <a href="#">Bảo hành</a>
                </div> */}
            </div>
          </div>

          <div className="footerInfo l-3 m-6 c-12">
            <div className="footerInfoMargin">
              <h3 className="footerInfoTitle">
                Chính sách và Hỗ trợ
              </h3>
              <p className="infoOption">
                Điều khoản và điều kiện
              </p>
              <p className="infoOption">
                Chính sách bảo mật
              </p>
              <p className="infoOption">
                Hướng dẫn Mua hàng
              </p>
              <p className="infoOption">
                Chính sách vận chuyển và giao nhận
              </p>
              <p className="infoOption">
                Quy định và hình thức thanh toán
              </p>
              <p className="infoOption">
                Chính sách bảo hành, đổi trả
              </p>
              <p className="infoOption">
                Chương trình Khuyến Mãi
              </p>
            </div>
          </div>

          <div className="footerInfo Contact l-2 m-6 c-12">
            <div className="footerInfoMargin">
              <h3 className="footerInfoTitle contact">
                Liên hệ với chúng tôi
              </h3>
              <div className="ContainerBtnCtn">
                <div className="footerInfoDetail btnContainer">
                  <Button
                    Type={"bgcWhite"}
                    Children={
                      <>
                        <img
                          class="logoFB"
                          alt="anh san pham"
                          src={require("../../assets/icon/new-facebook-logo-2019.jpg")}
                        />
                      </>
                    }
                  />
                </div>
              </div>
              <div className="ContainerBtnCtn">
                <div className="footerInfoDetail btnContainer">
                  <Button
                    Type="bgcWhite"
                    Children={
                      <>
                        <img
                          class="logoInsta"
                          alt="anh san pham"
                          src={require("../../assets/icon/instagram-logo-social-media-sign-250nw-2265835221.webp")}
                        />
                      </>
                    }
                  />
                </div>
              </div>
              <div className="ContainerBtnCtn">
                <div className="footerInfoDetail btnContainer">
                  <Button
                    Type="bgcWhite"
                    Children={
                      <>
                        <img
                          class="logoZalo"
                          alt="anh san pham"
                          src={require("../../assets/icon/logo-zalo-02.jpg")}
                        />
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="footerInfo map l-4 m-6 c-12">
            <div className="footerInfoMargin">
              <h3 className="footerInfoTitle">
                văn phòng Hà Nội
              </h3>
              <iframe
                title="unique"
                className="infoMap"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2633.33946625564!2d105.85306822524139!3d21.028508802999173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab10e04f636f%3A0xf57af95733ecb865!2zVOG7lW5nIGPDtG5nIHR5IMSRaeG7h24gbOG7sWMgVFAgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1696607643845!5m2!1svi!2s"
                width="600"
                height="450"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* </div> */}
          <div className="footerOfFooter">
            Nội thất Việt Bách, giái pháp nội thất tuyệt vời
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
