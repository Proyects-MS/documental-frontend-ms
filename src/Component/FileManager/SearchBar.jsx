import React, { Fragment } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const SearchBar = (props) => {
  const { setSearchTerm = '', searchTerm = '' } = props;
  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  return (
    <Fragment>
      <Form className="form-inline">
        <div className="mb-0 d-flex">
          <i className="fa fa-search"></i>
          <Input
            className="form-control-plaintext"
            type="text"
            value={searchTerm}
            onChange={(e) => handleChange(e)}
            placeholder="Search..."
          />
        </div>
      </Form>
    </Fragment>
  );
};
export default SearchBar;
