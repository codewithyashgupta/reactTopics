import React from "react";
import Buttons from "./Buttons";
import LeftArrow from "../../public/left-arrow.png"; // Adjust the relative path based on your folder structure
import RightArrow from "../../public/right-arrow.png"; // Adjust the relative path based on your folder structure
import AppleBucket from "./AppleBucket";
import "../index.css";
function AppleCounter() {
  return (
    <section>
      <AppleBucket appleCount={10} basketName={1} />
      <Buttons
        imageUrl={LeftArrow}
        title="left"
        ClickHandler={() => {
          console.log("hi");
        }}
      />
      <Buttons imageUrl={RightArrow} title="right" />
      <AppleBucket appleCount={0} basketName={2} />
    </section>
  );
}

export default AppleCounter;