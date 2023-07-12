import { memo } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { groups } from "../data/groups";

import "./StudentForm.css";

const StudentForm = memo(
  ({ student, handleChange, submit, validated, selected }) => {
    const { firstName, lastName, age, group, comment } = student;
    console.log("StudentForm");
    return (
      <Form noValidate onSubmit={submit} validated={validated}>
        <FormGroup className="mt-3">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            value={firstName}
            name="firstName"
            placeholder="name"
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup className="mt-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            value={age}
            name="age"
            placeholder="price"
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Select onChange={handleChange} value={group} name="group">
            {groups.map((gr) => (
              <option key={gr} value={gr}>
                {gr}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup className="mt-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            value={lastName}
            name="lastName"
            placeholder="quantity"
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup className="mt-3">
          <Form.Label>Description</Form.Label> <br />
          <textarea
            required
            onChange={handleChange}
            value={comment}
            name="comment"
            placeholder="comment"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>

        <Button className="mt-3" type="submit">
          {selected ? "Save" : "Add"}
        </Button>
        
      </Form>
    );
  }
);

StudentForm.displayName = StudentForm;

StudentForm.propTypes = {
  student: PropTypes.object,
  handleChange: PropTypes.func,
  submit: PropTypes.func,
  validated: PropTypes.bool,
  selected: PropTypes.bool,
};

export default StudentForm;
