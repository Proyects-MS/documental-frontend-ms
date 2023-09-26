import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { H5 } from '../../AbstractElements';
import { ToDo } from '../../Constant';
import TodoCheckbox from './TodoCheckbox';
import TodoList from './TodoList';

const TasksContain = ({data, date, setIdSelected, toggleEdit, changing}) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <H5>Tareas / {date}</H5>
              </CardHeader>
              <CardBody className="pt-0">
                <div className="todo">
                  <div className="todo-list-wrapper">
                    <div className="todo-list-container">
                      {/* <TodoCheckbox /> */}
                      <TodoList data={data} setIdSelected={setIdSelected} toggleEdit={toggleEdit} changing={changing}/>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default TasksContain;