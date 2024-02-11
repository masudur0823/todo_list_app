import React, { useState } from "react";
import CheckIcon from "../assets/icons/CheckIcon";

function CheckButton() {
  const [check, setCheck] = useState(false);
  return check ? (
    <div
      className="bg-gray-300 w-6 h-6 cursor-pointer rounded-sm"
      onClick={() => setCheck(!check)}
    ></div>
  ) : (
    <div
      className="bg-x-violet w-6 h-6 cursor-pointer rounded-sm"
      onClick={() => setCheck(!check)}
    >
      <CheckIcon color="#fff" />
    </div>
  );
}

export default CheckButton;
