import React from "react";
import Button from "./Button";
import EditIcon from "../assets/icons/EditIcon";
import CheckButton from "./CheckButton";
import DeleteIcon from "../assets/icons/DeleteIcon";

export default function TodoBody() {
  return (
    <div className="p-4 bg-gray-100 rounded-md flex flex-col gap-5">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

function TodoItem() {
  return (
    <div className="bg-white py-3 px-2 rounded-md flex justify-between items-center">
      {/* left */}
      <div className="flex gap-3 items-center">
        <CheckButton />
        <div>
          <p>this is my task 1</p>
          <span className="text-xs text-gray-500">02:44 am, 11/02/2024</span>
        </div>
      </div>
      {/* right */}
      <div className="flex gap-3">
        <Button className="p-1 md:p-2">
          <EditIcon color="#fff" fontSize="16" />
        </Button>
        <Button className="p-1 md:p-2">
          <DeleteIcon color="#fff" fontSize="16" />
        </Button>
      </div>
    </div>
  );
}
