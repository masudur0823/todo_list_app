import Layout from "./components/Layout";
import Title from "./components/Title";
import TodoBody from "./components/TodoBody";
import TodoHeader from "./components/TodoHeader";

function App() {
  return (
    <Layout>
      <div className="text-center">
        <Title component="h1" variant="secondary" className="text-center">
          Todo List
        </Title>
      </div>
      <TodoHeader />
      <TodoBody />
    </Layout>
  );
}

export default App;
