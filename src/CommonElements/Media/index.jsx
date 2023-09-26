import React from 'react';
import { Media } from 'reactstrap';

const Image = (props) => (
  <Media {...props.attrImage} style={props.styles}/>
);

export default Image;