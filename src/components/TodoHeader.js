import React from "react";
import Button from "./Button";
import FilterIcon from "../assets/icons/FilterIcon";
import Title from "./Title";

function TodoHeader({ openModal, data }) {
  const totalTodo = data?.length;
  const totalCompleteTodo = data?.filter((item) => {
    if (item?.status === "completed") {
      return true;
    }
    return false;
  }).length;
  return (
    <div className="flex justify-between items-center">
      <Button onClick={openModal}>add task</Button>
      <Title component="h4" className="font-bold text-2xl">
        {totalCompleteTodo}/{totalTodo}
      </Title>
      <Button>
        <FilterIcon color="#fff" fontSize="20" /> filter
      </Button>
    </div>
  );
}

export default TodoHeader;
