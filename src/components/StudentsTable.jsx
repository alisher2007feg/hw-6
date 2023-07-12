import { memo } from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const StudentsTable = memo(({ students, editStudent }) => {
  console.log("StudentsTable");

  function deleteStudent() {
    localStorage.removeItem("students");
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Group</th>
          <th className="text-end">Description</th>
          <th>Edit and Delate</th>
        </tr>
      </thead>
      <tbody>
        {students.map(({ firstName, lastName, age, group, comment, id }, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{group}</td>
            <td>{comment}</td>
            <td className="text-end">
              <button
                className="btn btn-primary me-3"
                onClick={() => editStudent(id)}
              >
                Edit
              </button>
              <button className="btn btn-danger" onClick={deleteStudent}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

StudentsTable.propTypes = {
  students: PropTypes.array,
  editStudent: PropTypes.func,
  deleteStudent: PropTypes.func,
};

StudentsTable.displayName = "StudentsTable";

export default StudentsTable;
