import React from "react";
import Title from "./Title";
import Button from "./Button";
import TextField from "./form/TextField";
import Select from "./form/Select";

function Modal({ form, setForm, index, close, onSave, onEdit }) {
  console.log(index);
  return (
    <>
      <div
        className="fixed left-0 top-0 w-screen h-screen bg-black opacity-70"
        onClick={close}
      ></div>
      <div className="w-full md:w-96 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-blue-100 p-5 rounded">
          <Title variant="primary">Add todo</Title>
          <div className="flex flex-col gap-4 my-5">
            <TextField
              type="text"
              label="Title"
              value={form?.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <Select
              value={form?.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="completed">Completed</option>
              <option value="incompleted">Not Completed</option>
            </Select>
            <Select
              value={form?.priority}
              onChange={(e) => setForm({ ...form, priority: e.target.value })}
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </Select>
          </div>
          <duv className="flex gap-5">
            <Button
              variant="primary"
              onClick={() => {
                if (index === 0 || index > 0) {
                  onEdit();
                  close();
                } else {
                  onSave();
                  close();
                }
              }}
            >
              {index === 0 || index > 0 ? "Update" : "Save"}
            </Button>

            <Button variant="secondary" onClick={close}>
              Cancel
            </Button>
          </duv>
        </div>
      </div>
    </>
  );
}

export default Modal;
