import React from "react";
import "./intro.css";
import "../../assets/responsiveCss/grid.css";

function Intro() {
  const cards = document.querySelectorAll(
    ".introContainer"
  );
  console.log(cards);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "show",
          entry.isIntersecting
        );
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
      // rootMargin: "400px",
    }
  );
  cards.forEach((card) => {
    observer.observe(card);
  });
  return (
    <div className="grid ">
      <div className="introContainer">
        <div className="col c-12 l-12 m-12 intro introDoYouKnow">
          <img
            className="introImg"
            alt="img"
            src={require("../../assets/intro/cong-ty-thiet-ke-thi-cong-noi-that-van-phong-1.webp")}
          />
          <div className="introText">
            <h2 className="introTitle">bạn có biết?</h2>
            <div className="introDetail">
              Trong môi trường giáo dục và doanh nghiệp ngày
              nay, việc chọn lựa nội thất phù hợp không chỉ
              đảm bảo sự thoải mái mà còn tác động trực tiếp
              đến hiệu quả hoạt động. Nhưng nhiều khi, sự đa
              dạng và quy mô của các không gian này đồng
              thời đặt ra những thách thức riêng về nội
              thất. Đó chính là lúc nội thất Việt Bách bước
              vào.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row"> */}
      <div className="introContainer">
        <div className="col c-12 l-12 m-12 intro introVision">
          <img
            className="introImg"
            alt="img"
            src={require("../../assets/intro/thi-cong-noi-that-van-phong.jpg")}
          />
          <div className="introText">
            <h2 className="introTitle">Tầm Nhìn</h2>
            <div className="introDetail">
              Nội thất Việt Bách không chỉ tạo ra nội thất.
              Chúng tôi tạo nên không gian hoàn hảo - nơi mà
              sinh viên, nhân viên và công nhân có thể trải
              nghiệm sự tiện nghi tối đa, khơi gợi sự sáng
              tạo và tăng cường hiệu quả làm việc.
            </div>
          </div>
        </div>
      </div>
      <div className="introContainer">
        <div className="col c-12 l-12 m-12 intro introValue">
          <div className="introMaintitle">
            giá trị cốt lõi
          </div>
          <div className="introPart">
            <div className="introText">
              <h2 className="introTitle">
                Sự Tận Tâm Đến Từng Chi Tiết
              </h2>
              <div className="introDetail">
                Chúng tôi tôn trọng từng nhu cầu nhỏ nhất
                của khách hàng và cam kết mang đến sự hài
                lòng tối đa.
              </div>
            </div>
            <img
              className="introImg"
              alt="img"
              src={require("../../assets/intro/thiet-ke-noi-that-phong-giam-doc-2.jpg")}
            />
          </div>
          <div className="introPart">
            <img
              className="introImg"
              alt="img"
              src={require("../../assets/intro/thiet-ke-noi-that-van-phong.jpg")}
            />
            <div className="introText">
              <h2 className="introTitle">
                Giải Pháp Tùy Chỉnh
              </h2>
              <div className="introDetail">
                Chúng tôi luôn sẵn sàng thích nghi và tùy
                chỉnh các giải pháp để đáp ứng nhu cầu đặc
                biệt của từng dự án.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="introContainer">
        <div className="col c-12 l-12 m-12 intro introStrategy">
          <h2 className="introTitle">
            Chiến Lược Phát Triển
          </h2>
          <div className="introDetail">
            <p>
              Chúng tôi tập trung vào việc nghiên cứu, sáng
              tạo và phát triển các giải pháp nội thất tiên
              tiến để đáp ứng sự biến đổi không ngừng của
              thị trường.
            </p>
            <img
              className="introImg"
              alt="img"
              src={require("../../assets/intro/cong-ty-thiet-ke-thi-cong-noi-that-van-phong-1.webp")}
            />
          </div>
        </div>
      </div>
      <div className="introContainer">
        <div className="col c-12 l-12 m-12 intro introWork">
          <h2 className="introTitle">
            Môi Trường Làm Việc
          </h2>
          <div className="introDetail">
            Nội thất Việt Bách coi trọng sự cống hiến và
            sáng tạo. Chúng tôi tạo ra một môi trường làm
            việc linh hoạt và động lực, khuyến khích mỗi
            thành viên thể hiện bản thân. Hãy để nội thất
            Việt Bách tạo nên sự khác biệt cho không gian
            của bạn - nơi mà sự sáng tạo, hiệu quả và tiện
            nghi hội tụ.
          </div>
          <img
            className="introImg"
            alt="img"
            src={require("../../assets/intro/thiet-ke-noi-that-phong-giam-doc-2.jpg")}
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
