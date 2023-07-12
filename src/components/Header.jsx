import { memo } from "react";
import PropTypes from "prop-types";
import { Form, InputGroup } from "react-bootstrap";

const Header = memo(({ search, handleSearch, averageAge }) => {
  console.log("Header");
  return (
    <Form>
      <InputGroup className="my-3">
        <Form.Control
          value={search}
          onChange={handleSearch}
          placeholder="Searching"
          aria-label="Searching"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text>{averageAge}</InputGroup.Text>
      </InputGroup>
    </Form>
  );
});

Header.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
  averageAge: PropTypes.number,
};

Header.displayName = "Header";

export default Header;
