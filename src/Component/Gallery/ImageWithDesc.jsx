import React, { Fragment, useState, useContext, useCallback } from 'react';
import { Container, Row } from 'reactstrap';
import GalleryContext from '../../_helper/Gallery';
import SingleImage from './ImageGallery/SingleImage';
import ListOfImageDesc from './ImageGallery/ListOfImgDesc';

const ImageWithDescContain = () => {
  const { images, smallImages } = useContext(GalleryContext);
  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);
  // eslint-disable-next-line
  const callback = useCallback((photo) => {
    setPhotoIndex(photo);
  });
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <ListOfImageDesc smallImages={smallImages} setPhotoIndex={callback} photoIndex={photoIndex} withDesc={true} />
        </Row>
      </Container>
      <SingleImage photoIndex={photoIndex} setPhotoIndex={callback} images={images} />
    </Fragment>
  );
};


export default ImageWithDescContain;