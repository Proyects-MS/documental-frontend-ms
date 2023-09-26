import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { IMAGE_GALLERY } from '../../../Constant';
import { H5, Image } from '../../../AbstractElements';

const ListOfImage = ({ smallImages, setPhotoIndex, photoIndex }) => {
  return (
    <Fragment>
      {smallImages.length > 0 &&
        <Col sm="12">
          <Card>
            <CardHeader className="pb-0">
              <H5>{IMAGE_GALLERY}</H5>
            </CardHeader>
            <CardBody className="my-gallery row">
              {
                smallImages && smallImages.map((item, i) => {
                  return (
                    <figure className="col-xl-3 col-sm-6" key={i}>
                      <Image
                        attrImage={{
                          src: require(`../../../assets/images/${item}`),
                          alt: 'Gallery',
                          className: 'img-thumbnail',
                          onClick: () =>
                            setPhotoIndex({ ...photoIndex, index: 1, isOpen: true })
                        }}
                      />
                    </figure>
                  );
                })}
            </CardBody>
          </Card>
        </Col>
      }
    </Fragment>
  );
};

export default ListOfImage;