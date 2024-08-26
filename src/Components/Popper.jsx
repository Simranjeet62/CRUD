import { useState } from "react";
import Button from "./Button";
import styles from "./Popper.module.css";

export default function Popper({ employee, setEdit, setTrigger }) {
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [salary, setSalary] = useState(employee.salary);
  const [role, setRole] = useState(employee.role);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      async function putEmployee() {
        await fetch(`http://localhost:8000/employees/${employee.id}`, {
          method: "PUT",
          body: JSON.stringify({
            name: name,
            email: email,
            salary: salary,
            role: role,
          }),
        });
        setTrigger(Math.random());
      }
      putEmployee();
      setEdit(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.elContainer}>
          <label htmlFor="name" required>
            Name
          </label>
          <input
            type="text"
            className={styles.formEl}
            placeholder="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className={styles.elContainer}>
          <label htmlFor="email" required>
            Email
          </label>
          <input
            type="emil"
            className={styles.formEl}
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className={styles.elContainer}>
          <label htmlFor="salary" required>
            Salary
          </label>
          <input
            type="number"
            className={styles.formEl}
            placeholder="Salary"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          ></input>
        </div>
        <div className={styles.elContainer}>
          <label htmlFor="role">Role</label>
          <select
            className={styles.formEl}
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select an option</option>
            <option value="Agent">Agent</option>
            <option value="TeamLeader">TeamLeader</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <button>Done</button>
      </form>
    </div>
  );
}
