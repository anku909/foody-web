import React, { useState } from "react";
import "./index.css";
import "./sass/style.css";
import Header from "./components/Header";
import Routing from "./utils/Routing";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import SignIn from "./components/SignIn.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [Toggled, setToggled] = useState(false);
  function handleSignIn() {
    setToggled(!Toggled);
  }
  {
    Toggled
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }
  return (
    <>
      <Provider store={store}>
        {Toggled && <SignIn handleSignIn={handleSignIn} />}
        <Header handleSignIn={handleSignIn} />
        <Routing />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
