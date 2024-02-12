import React, { useState } from "react";
import CheckIcon from "../assets/icons/CheckIcon";

function CheckButton({ status }) {
  return (
    <div
      className={
        status === "completed"
          ? "bg-x-violet w-6 h-6 cursor-pointer rounded-sm"
          : "bg-gray-300 w-6 h-6 cursor-pointer rounded-sm"
      }
    >
      {status === "completed" ? <CheckIcon color="#fff" /> : null}
    </div>
  );
}

export default CheckButton;
