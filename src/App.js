import { useState } from "react";
import Layout from "./components/Layout";
import Title from "./components/Title";
import TodoBody from "./components/TodoBody";
import TodoHeader from "./components/TodoHeader";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState();
  const [form, setForm] = useState({
    title: "",
    status: "incompleted",
    priority: "low",
  });
  const [data, setData] = useState([
    { title: "task1", status: "completed", priority: "medium" },
    { title: "task2", status: "incompleted", priority: "high" },
  ]);

  // handle modal
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setIndex();
  };

  // handle form
  const handleAdd = () => {
    setData([...data, form]);
  };
  const handleUpdate = () => {
    const newItems = [...data];
    let todoObj = {
      title: form?.title,
      status: form?.status,
      priority: form?.priority,
    };
    newItems.splice(index, 1, todoObj);
    setData(newItems);
  };
  const handleDelete = (index) => {
    const newTodoItems = [...data];
    newTodoItems.splice(index, 1);
    setData(newTodoItems);
  };

  return (
    <Layout>
      <div className="text-center">
        <Title component="h1" variant="secondary" className="text-center">
          Todo List
        </Title>
      </div>
      <TodoHeader data={data} openModal={openModal} />
      <TodoBody
        data={data}
        onDelete={handleDelete}
        setForm={setForm}
        openModal={openModal}
        setIndex={setIndex}
      />
      {showModal ? (
        <Modal
          form={form}
          setForm={setForm}
          open={openModal}
          close={closeModal}
          onSave={handleAdd}
          onEdit={handleUpdate}
          index={index}
        />
      ) : null}
    </Layout>
  );
}

export default App;
