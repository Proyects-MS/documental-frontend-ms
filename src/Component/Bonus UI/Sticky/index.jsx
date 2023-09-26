import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardHeader, CardBody, Input } from 'reactstrap';
import { StickyNote, AddNewNote } from '../../../Constant';
import { H5 } from '../../../AbstractElements';

const StickyContain = () => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/sticky.json`).then(res => setNotes(res.data));
  }, []);

  const addStickyNote = () => {
    setNotes([...notes, { id: notes.length + 1, isDeleted: false }]);
  };

  const deleteNote = (note) => {
    note.isDeleted = true;
  };

  return (
    <Fragment>
      <Container fluid={true}>
        <Row className="sticky-header-main">
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{StickyNote}
                  <a href="#javascript" onClick={addStickyNote} className="btn btn-primary pull-right m-l-10">{AddNewNote}</a>
                </H5>
              </CardHeader>
              <CardBody>
                <div className="sticky-note" id="board">
                  {notes.map((data) => (
                    <div className={`note ui-draggable ui-draggable-handle ${data.isDeleted && 'd-none'}`} key={data.id}>
                      <a href="#javascript" onClick={() => deleteNote(data)} className="button remove" >{'X'}</a>
                      <div className="note_cnt">
                        <Input className="title" placeholder="Enter note title" type='textarea' style={{ height: '64px' }}></Input>
                        <Input className="cnt" placeholder="Enter note description here" type='textarea' style={{ height: '200px' }}></Input>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default StickyContain;