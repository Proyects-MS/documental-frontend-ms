import React, { Fragment } from 'react';
import { CardBody, Form, FormGroup } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

const CustomSelection = () => {
  return (
    <Fragment>
      <CardBody>
        <div id="bloodhound">
          <Form className="theme-form">
            <FormGroup>
              <Typeahead
                id="custom-typeahead"
                allowNew
                multiple
                newSelectionPrefix="Add a new item: "
                options={[]}
                placeholder="Type anything..."
              />
            </FormGroup>
          </Form>
        </div>
      </CardBody>
    </Fragment>
  );
};
export default CustomSelection;