import React from "react";
import Button from "./Button";
import FilterIcon from "../assets/icons/FilterIcon";
import Title from "./Title";

function TodoHeader() {
  return (
    <div className="flex justify-between items-center">
      <Button>add task</Button>
      <Title component="h4" className="font-bold text-2xl">
        2/10
      </Title>
      <Button>
        <FilterIcon color="#fff" fontSize="20" /> filter
      </Button>
    </div>
  );
}

export default TodoHeader;
