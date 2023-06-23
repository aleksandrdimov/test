import Brand from "./Brand/Brand";
import ContentInfo from "./ContentInfo/ContentInfo";
import banner from "../../images/banner.png";
import "./Main.scss";

const Main = () => {
  return (
    <section className="banner">
      <div className="wrapper banner__container">
        <Brand />
        <img src={banner} alt="banner" className="banner__picture" />
        <ContentInfo />
      </div>
    </section>
  );
};

export default Main;
