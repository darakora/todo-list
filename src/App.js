import React from "react";
import AddItem from "./components/AddItem";
import AppInfo from "./components/AppInfo";
import TodoList from "./components/TodoList";
import './App.scss';

function App() {
  return (
    <div className="app">
     <AppInfo/>
     <AddItem/>
     <TodoList/>
    </div>
  );
}

export default App;
