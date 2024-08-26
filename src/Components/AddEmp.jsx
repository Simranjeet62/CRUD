import styles from "./AddEmp.module.css";
import Button from "./Button";

export default function AddEmp({ setTrigger }) {
  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, salary, role } = e.target;

    try {
      async function postEmployee() {
        await fetch("http://localhost:8000/employees", {
          method: "POST",
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            salary: salary.value,
            role: role.value,
          }),
        });
      }
      postEmployee();
      setTrigger(Math.random());
    } catch (error) {
      console.error(error);
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
            required
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
            required
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
            required
          ></input>
        </div>
        <div className={styles.elContainer}>
          <label htmlFor="role">Role</label>
          <select className={styles.formEl} id="role" required>
            <option value="">Select an option</option>
            <option value="Agent">Agent</option>
            <option value="TeamLeader">TeamLeader</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <Button
          content={"Add Employee"}
          fontSize={"1.8rem"}
          background={"#a5d8ff"}
        />
      </form>
    </div>
  );
}
