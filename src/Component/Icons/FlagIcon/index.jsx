import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Media, } from 'reactstrap';
import axios from 'axios';
import IconMarkUp from '../Icon-markup';
import { H5, H6 } from '../../../AbstractElements';
import { FlagIcons } from '../../../Constant';

const FlagIconContain = () => {
  const [iTag, setiTag] = useState('');
  const [iconsData, seticonsData] = useState([]);
  const [icon, setIcon] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/flagIconData.json`)
      .then((res) => seticonsData(res.data));
  }, []);

  const getItag = (tag) => {
    setiTag({
      iTag: '<i className="flag-icon flag-icon-' + tag + '"></i>',
    });
    setIcon({
      icon: 'flag-icon flag-icon-' + tag + ' fa-2x',
    });
  };

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5 attrImage={{ className: 'm-b-0' }}>{FlagIcons}</H5>
              </CardHeader>
              <CardBody>
                <Row className="icon-lists flag-icons">
                  {iconsData.map((icon, i) => {
                    return (
                      <Col
                        sm="6 col-12"
                        xl="4"
                        key={i}
                        onClick={(e) => getItag(icon.abbrivation)}
                      >
                        <Media>
                          <i
                            className={`flag-icon flag-icon-${icon.abbrivation}`}
                          ></i>
                          <Media body className="align-self-center">
                            <H5>{icon.abbrivation}</H5>
                            <H6 attrH6={{ className: 'mt-0' }}>{icon.name}</H6>
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
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  );
};
export default FlagIconContain;
