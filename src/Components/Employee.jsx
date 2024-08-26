import { useContext } from "react";
import Button from "./Button";
import { PostContext } from "../App";

export default function Employee({ employee, sr }) {
  const { setTrigger, handleEdit } = useContext(PostContext);

  function handledelete(id) {
    try {
      async function dltEmployee() {
        await fetch(`http://localhost:8000/employees/${id}`, {
          method: "DELETE",
        });
        setTrigger(Math.random());
      }
      dltEmployee();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <tr>
      <td>{sr + 1}</td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.salary}</td>
      <td>{employee.role}</td>
      <td>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            content={"Delete"}
            id={employee.id}
            onClick={handledelete}
            background={"#fa5252"}
            fontSize={"1.6rem"}
          />
          <button
            onClick={() => handleEdit(employee)}
            style={{
              fontSize: "1.6rem",
              borderRadius: "0.5rem",
              padding: "0.2rem 0.4rem 0.2rem 0.4rem",
              border: "1px solid #111",
            }}
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
