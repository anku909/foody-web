import React, { useState } from "react";
import "./index.css";
import "./sass/style.css";
import Header from "./components/Header";
import Routing from "./utils/Routing";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import SignIn from "./components/SignIn.jsx";

function App() {
  const [Toggled, setToggled] = useState(false);
  function handleSignIn() {
    setToggled(!Toggled);
  }
  return (
    <>
      <Provider store={store}>
        {Toggled && <SignIn />}
        <Header value={handleSignIn} />
        <Routing />
      </Provider>
    </>
  );
}

export default App;
