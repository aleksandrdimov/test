import "./Cookies.scss";

const Cookies = () => {
  return (
    <div className="cookies">
      <p className="cookies__text">
        Використовуючи цей сайт, ви даєте згоду на роботу з файлами{" "}
        <a href="#" className="cookies__link">
          сookies.
        </a>{" "}
      </p>
      <button className="cookies__button">Згоден</button>
    </div>
  );
};

export default Cookies;
