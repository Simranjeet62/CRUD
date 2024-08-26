import { useState } from "react";
import AddEmp from "./Components/AddEmp";
import Logo from "./Components/Logo";
import Table from "./Components/Table";
import Popper from "./Components/Popper";
import { createContext } from "react";

export const PostContext = createContext();

function App() {
  const [trigger, setTrigger] = useState();
  const [edit, setEdit] = useState(false);
  const [employee, setEmployee] = useState();

  console.log(trigger);

  function handleEdit(id) {
    setEdit(true);
    setEmployee(id);
  }

  return (
    <>
      <Logo />
      {edit ? (
        <Popper employee={employee} setEdit={setEdit} setTrigger={setTrigger} />
      ) : (
        ""
      )}
      <AddEmp setTrigger={setTrigger} />
      <PostContext.Provider value={{ setTrigger, handleEdit }}>
        <Table trigger={trigger} />
      </PostContext.Provider>
    </>
  );
}

export default App;
