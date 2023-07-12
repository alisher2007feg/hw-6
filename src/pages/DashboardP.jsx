import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import StudentForm from "../components/StudentForm";
import Header from "../components/Header";
import StudentsTable from "../components/StudentsTable";
import { useStudent } from "../hooks/useStudent";

// import Counter from "../components/Counter";
// import { useLocation } from "../hooks/useLocation";

const DashboardP = () => {
  const {
    validated,
    student,
    results,
    search,
    averageAge,
    selected,
    handleSearch,
    handleChange,
    submit,
    editStudent,
  } = useStudent();

  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={4}>
            <StudentForm
              student={student}
              handleChange={handleChange}
              submit={submit}
              validated={validated}
              selected={selected}
            />
          </Col>
          <Col lg={8}>
            <Header
              averageAge={averageAge}
              search={search}
              handleSearch={handleSearch}
            />
            <StudentsTable
              search={search}
              students={results}
              editStudent={editStudent}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DashboardP;
