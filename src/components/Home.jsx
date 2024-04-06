import React from "react";
import Body from "./Body";
import { useState, useEffect } from "react";

function Home() {
  // const [showComponent, setShowComponent] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowComponent(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      {/* <div>{showComponent && <Loading />}</div>; */}
      <Body />
    </>
  );
}

export default Home;
