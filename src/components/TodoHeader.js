import React from "react";
import Button from "./Button";
// import FilterIcon from "../assets/icons/FilterIcon";
import Title from "./Title";
import Select from "./form/Select";
import CircleIcon from "../assets/icons/CircleIcon";

function TodoHeader({ openModal, data, setFilterPriority }) {
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
      {/* <Button>
        <FilterIcon color="#fff" fontSize="20" /> filter
      </Button> */}
      <Select
        // value={}
        onChange={(e) => setFilterPriority(e.target.value)}
        className="border rounded"
      >
        <option value="">All</option>
        <option value="low">
          <div>
            <CircleIcon color="#000" /> low
          </div>
        </option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </Select>
    </div>
  );
}

export default TodoHeader;
