import "./Burger.scss";

const Burger = () => {
  const handleClick = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    burger.classList.toggle("js-active");
    nav.classList.toggle("js-active");
  };
  return (
    <div className="burger" onClick={handleClick}>
      <span></span>
    </div>
  );
};

export default Burger;
