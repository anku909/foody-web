import React from "react";
import "./index.css";
import "./sass/style.css";
import Header from "./components/Header";
import Routing from "./utils/Routing";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routing />
      </Provider>
    </>
  );
}

export default App;
