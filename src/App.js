import { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  // filter state
  const [filterPriority, setFilterPriority] = useState("");

  useEffect(() => {
    const updatedData = data?.filter(
      (item) => item?.priority.toLowerCase() === filterPriority.toLowerCase()
    );
    if (filterPriority) {
      setFinalData(updatedData);
    } else {
      setFinalData(data);
    }
  }, [data, filterPriority]);

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
    setData([...data, { ...form, date: new Date().toString() }]);
    setForm({
      title: "",
      status: "incompleted",
      priority: "low",
    });
  };
  const handleUpdate = () => {
    const newItems = [...data];
    let todoObj = {
      title: form?.title,
      status: form?.status,
      priority: form?.priority,
      date: new Date().toString(),
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
      <TodoHeader
        data={data}
        openModal={openModal}
        setFilterPriority={setFilterPriority}
      />
      <TodoBody
        data={finalData}
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
