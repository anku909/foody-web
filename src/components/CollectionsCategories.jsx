import React, { useEffect } from "react";
import axios from "axios";

function CollectionsCategories() {
  // async function fetchCollectionsData() {
  //   try {
  //     const json = await axios.get("http://localhost:3000/api/v1");
  //     const data = json.data;
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  useEffect(() => {
    fetchCollectionsData();
  }, []);
  return (
    <>
      <div className="w-full h-screen bg-pink-300">
        <div></div>
      </div>
    </>
  );
}

export default CollectionsCategories;
