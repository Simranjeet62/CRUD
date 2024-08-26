import { useEffect, useState } from "react";
import Employee from "./Employee";
import styles from "./Table.module.css";
// import Button from "./Button";

export default function Table({ trigger }) {
  const [employees, SetEmployees] = useState();

  useEffect(
    function () {
      try {
        async function fetchEmployees() {
          const res = await fetch("http://localhost:8000/employees");
          const data = await res.json();
          SetEmployees(data ? data : []);
        }
        fetchEmployees();
      } catch (err) {
        console.error(err);
      }
    },
    [trigger]
  );

  return (
    <>
      <div className={styles.container}>
        {employees?.length ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees?.map((el, index) => (
                <Employee employee={el} sr={index} key={index} />
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
