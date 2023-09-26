import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Media, } from 'reactstrap';
import axios from 'axios';
import * as feather from 'feather-icons';
import { H5, H6 } from '../../../AbstractElements';
import IconMarkUp from '../Icon-markup';
import { Feather, Icons } from '../../../Constant';

const FeatherIconContain = () => {
  const [data, setData] = useState([]);
  const [iTag, setiTag] = useState('');
  const [feathericon, setfeatherIcon] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/featherData.json`)
      .then((res) => setData(res.data));
  }, []);

  const getItag = (tag) => {
    setiTag({
      iTag: '<i data-feather="' + tag + '"></i>',
    });
    setfeatherIcon({
      feathericon: tag,
    });
  };

  return (
    <Fragment>
      <Container fluid={true}>
        {data.map((icons, index) => {
          return (
            <Row key={index}>
              <Col sm="12">
                <Card>
                  <CardHeader className="pb-0">
                    <H5 attrH5={{ className: 'm-b-0' }}>
                      <span className="digits">{Feather}</span> {Icons}
                    </H5>
                  </CardHeader>
                  <CardBody>
                    <Row className="icon-lists feather-icons">
                      {icons.feather_icons.map((icon, i) => {
                        return (
                          <Col
                            sm="6 col-12"
                            xl="4"
                            key={i}
                            onClick={(e) => getItag(icon)}
                          >
                            <Media>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: feather.icons[icon].toSvg(icon),
                                }}
                              />
                              <Media body className="align-self-center">
                                <H6 attrH6={{ className: 'mt-0' }}>{icon}</H6>
                              </Media>
                            </Media>
                          </Col>
                        );
                      })}
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
      <IconMarkUp itag={iTag} icons={feathericon} />
    </Fragment>
  );
};

export default FeatherIconContain;
