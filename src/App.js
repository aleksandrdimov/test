import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cookies from "./components/Pop-ups/Cookies/Cookies";
import FormApp from "./components/Pop-ups/FormApp/FormApp";
import ModalThanks from "./components/Pop-ups/ModalThanks/ModalThanks";

function App() {
  const [cookies, setCookies] = useState(true);
  const [blur, setBlur] = useState(false);
  const [form, setForm] = useState(false);
  const [formThanks, setFormThanks] = useState(false);

  const hideCookies = () => {
    setCookies(!cookies);
  };

  const hideForm = () => {
    setBlur(!blur);
    setForm(!form);
  };
  return (
    <>
      <div className={blur ? "blur" : ""}>
        <Header setForm={setForm} form={form} setBlur={setBlur} blur={blur} />
        <Main />
      </div>
      {cookies ? <Cookies hideCookies={hideCookies} /> : ""}
      {form ? (
        <FormApp
          hideForm={hideForm}
          formThanks={formThanks}
          setFormThanks={setFormThanks}
        />
      ) : (
        ""
      )}
      {formThanks ? (
        <ModalThanks
          hideForm={hideForm}
          formThanks={formThanks}
          setFormThanks={setFormThanks}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
