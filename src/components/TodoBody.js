import React from "react";
import Button from "./Button";
import EditIcon from "../assets/icons/EditIcon";
import CheckButton from "./CheckButton";
import DeleteIcon from "../assets/icons/DeleteIcon";
import CircleIcon from "../assets/icons/CircleIcon";

export default function TodoBody({
  data,
  setForm,
  openModal,
  setIndex,
  onDelete,
}) {
  if (data?.length === 0) {
    return <p>no data found</p>;
  }
  const priorityColors = {
    low: "gray",
    medium: "yellow",
    high: "red",
  };
  return (
    <div className="p-4 bg-gray-100 rounded-md flex flex-col gap-5">
      {data?.map((item, index) => {
        const done = item?.status === "completed";
        return (
          <div
            className={`bg-white py-3 px-2 rounded-md flex justify-between items-center ${
              done ? "opacity-70" : ""
            }`}
          >
            {/* left */}
            <div className="flex gap-3 items-center">
              <CheckButton status={item?.status} />
              <div>
                <p>{done ? <del>{item.title}</del> : item.title}</p>
                <span className="text-xs text-gray-500">
                  02:44 am, 11/02/2024
                </span>
              </div>
            </div>
            {/* right */}
            <div className="flex gap-3">
              {done ? (
                ""
              ) : (
                <CircleIcon color={priorityColors[item?.priority]} />
              )}

              <Button
                className="p-1 md:p-2"
                onClick={() => {
                  openModal();
                  setIndex(index);
                  setForm(item);
                }}
              >
                <EditIcon color="#fff" fontSize="16" />
              </Button>
              <Button className="p-1 md:p-2" onClick={() => onDelete(index)}>
                <DeleteIcon color="#fff" fontSize="16" />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
