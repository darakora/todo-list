import React from "react";
import AddItem from "./components/AddItem/AddItem";
import AppInfo from "./components/AppInfo/AppInfo";
import TodoList from "./components/TodoList/TodoList";
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
