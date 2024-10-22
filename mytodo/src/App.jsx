import React from "react";
import Tasklist from "./components/Tasklist";
import AddTasklist from "./components/Addtasklist";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Tasklist />
      <AddTasklist/>
    </div>
  );
}

export default App;
