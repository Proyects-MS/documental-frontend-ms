/* eslint-disable react/jsx-indent */
/* eslint-disable quotes */
import React, { Fragment } from "react";
import { Card, CardBody, Col, Media, Row } from "reactstrap";
import { H5, H6, P } from "../../AbstractElements";
import { ArticeVideoData1 } from "../../Data/FAQ";
import ArticeVideo2 from "./ArticeVideo2";
import ArticeVideo3 from "./ArticeVideo3";

const ArticeVideo = () => {
  return (
    <Fragment>
      <Col lg="12">
        <div className="header-faq">
          <H5 attrH5={{ className: "mb-0" }}>{"Latest articles and videos"}</H5>
        </div>
        <Row>
          <Col xl="4" md="6">
            <Row>
              {ArticeVideoData1.map((item) => {
                return (
                  <Col sm="12" key={item.id}>
                    <Card>
                      <CardBody>
                        <Media>
                          {item.IconClass}
                          <Media body>
                            <H6 attrH6={{ className: "f-w-600" }}>
                              {item.title}
                            </H6>
                            <P>{item.discription}</P>
                          </Media>
                        </Media>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <ArticeVideo2 />
          <ArticeVideo3 />
        </Row>
      </Col>
    </Fragment>
  );
};
export default ArticeVideo;
