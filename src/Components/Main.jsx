import AddEmp from "./AddEmp";
import Table from "./Table";

export default function Main({ setTrigger, trigger }) {
  return (
    <>
      <AddEmp setTrigger={setTrigger} />
      <Table trigger={trigger} setTrigger={setTrigger} />
    </>
  );
}
