import { useCallback, useMemo, useState } from "react";
import { groups } from "../data/groups";
import { v4 as uuidv4 } from "uuid";

export const useStudent = () => {
  const [validated, setValidated] = useState(false);
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: "",
    group: groups[0],
    comment: "",
  });
  const studentsJson = localStorage.getItem("students");
  const [students, setStudents] = useState(JSON.parse(studentsJson) || []);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const handleChange = useCallback(
    (e) => {
      setStudent({ ...student, [e.target.name]: e.target.value });
    },
    [student]
  );

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      setValidated(true);
      const form = e.currentTarget;
      if (form.checkValidity()) {
        let newStudents;
        if (selected === null) {
          newStudents = [...students, student];
        } else {
          newStudents = students.map((el) => {
            if (el.id === selected) {
              return student;
            } else {
              return el;
            }
          });
          setSelected(null);
        }
        setStudents(newStudents);
        localStorage.setItem("students", JSON.stringify(newStudents));
        setStudent({
          firstName: "",
          lastName: "",
          age: "",
          group: groups[0],
          comment: "",
          id: uuidv4(),
        });
        setValidated(false);
      }
    },
    [student, students, selected]
  );

  const editStudent = useCallback(
    (id) => {
      let student = students.find((student) => student.id === id);
      setSelected(id);
      setStudent(student);
    },
    [students]
  );

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value.trim().toLowerCase());
  }, []);

  const results = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(search) ||
      student.lastName.toLowerCase().includes(search)
  );

  const getAverageAge = (students) => {
    console.log("getAverageAge");
    return (
      students.reduce((acc, student) => acc + +student.age, 0) / students.length
    );
  };

  const averageAge = useMemo(() => getAverageAge(students), [students]);

  return {
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
  };
};
