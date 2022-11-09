import React, { useEffect, useState } from "react";
import "./App.scss";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./models/model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Logo from "./assets/logo/tasker_logo.png";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  !localStorage.todos && localStorage.setItem("todos", JSON.stringify([]));
  !localStorage.completedTodos &&
    localStorage.setItem("completedTodos", JSON.stringify([]));

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "")
  );
  const [completedTodos, setCompletedTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("completedTodos") || "")
  );

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      
      setTodo("");
    }
  };

  const onDragStart = () => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = [...todos],
      complete = [...completedTodos];

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
    
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, { ...add, isDone: false });
    } else {
      complete.splice(destination.index, 0, { ...add, isDone: true });
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className="App">
        <div className="heading">
          <div className="heading__top">
            <img className="heading__logo" src={Logo} alt="Tasker Logo" />
            <h1 className="heading__title">Iamneo Todo App</h1>
          </div>
          <InputField
            todo={todo}
            setTodo={setTodo}
            handleAddTodo={handleAddTodo}
          />
        </div>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
      
      
      

      <Footer />
    </DragDropContext>
  );
};

export default App;
