import clsx from "clsx";
import style from "./home.module.scss";
import HomeCarousel from "../../component/homeCarousel";
import Category from "../../component/category";
import HomeCarouselList from "../../assets/homeCarousel";

function Home() {
  return (
    <div className={clsx(style.home)}>
      <HomeCarousel items={HomeCarouselList} />
      <Category />
    </div>
  );
}

export default Home;
