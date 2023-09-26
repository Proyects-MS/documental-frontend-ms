import React, { Fragment, useContext } from 'react';
import Masonry from 'react-masonry-css';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { MasonryGallery } from '../../Constant';
import GalleryContext from '../../_helper/Gallery';
import { H5, Image } from '../../AbstractElements';

const MesonryGalleryContain = () => {
  const { masonryImg } = useContext(GalleryContext);
  const styles = { width: '100%' };
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{MasonryGallery}</H5>
              </CardHeader>
              <CardBody className="photoswipe-pb-responsive">
                <Masonry
                  breakpointCols={4}
                  className="my-gallery row grid gallery"
                  columnClassName="col-md-3 col-6 grid-item">
                  {masonryImg.map((element) =>
                    <div key={element.id} ><Image attrImage={{ src: require(`../../assets/images/${element.src}`), style: styles, alt: '' }} /></div>
                  )}
                </Masonry>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
};

export default MesonryGalleryContain;