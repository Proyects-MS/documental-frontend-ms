import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import ScrollBar from 'react-perfect-scrollbar';
import { H5, P } from '../../../AbstractElements';

const HorizontalScroll = () => {
  return (
    <Fragment>
      <Col sm="12" md='6'>
        <Card>
          <CardHeader className='pb-0'>
            <H5>{'Horizontal Scroll'}</H5>
          </CardHeader>
          <CardBody>
            {/* <div className="scroll-bar-wrap">
              <div className="horizontal-scroll scroll-demo"> */}
            <ScrollBar className="horizontal-scroll"
              option={{ suppressScrollY: true }}
            >
              <div className="horz-scroll-content">
                <Row>
                  <Col sm="3">
                    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</P>
                  </Col>
                  <Col sm="3">
                    <P>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
                  </Col>
                  <Col sm="3">
                    <P>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
                  </Col>
                  <Col sm="3">
                    <P>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
                  </Col>
                </Row>
              </div>
            </ScrollBar>
            {/* </div>
            </div> */}
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default HorizontalScroll;