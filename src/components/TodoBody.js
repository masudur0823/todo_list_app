import React from "react";
import Button from "./Button";
import EditIcon from "../assets/icons/EditIcon";
import CheckButton from "./CheckButton";
import DeleteIcon from "../assets/icons/DeleteIcon";
import dayjs from "dayjs";

export default function TodoBody({
  data,
  setForm,
  openModal,
  setIndex,
  onDelete,
}) {
  if (data?.length === 0) {
    return (
      <div className="p-4 bg-gray-100 rounded-md flex flex-col gap-5">
        <p className="text-center">No Data Found</p>
      </div>
    );
  }

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
                  {dayjs(item?.date).format("hh:mm:ss , DD/MM/YYYY")}
                </span>
              </div>
            </div>
            {/* right */}
            <div className="flex items-center gap-3">
              {done ? (
                ""
              ) : (
                <>
                  <p
                    className={
                      "px-3 py-1 rounded-full bg-gray-500 text-white text-xs"
                    }
                  >
                    {item.priority === "low" ? "low" : null}
                    {item.priority === "medium" ? "medium" : null}
                    {item.priority === "high" ? "high" : null}
                  </p>
                </>
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
