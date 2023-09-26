import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import DetailCourseContain from '../../Component/Learning/DetailCourse';

const DetailedList = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Detailed Course" parent="Learning" title="Detailed Course" />
      <DetailCourseContain />
    </Fragment>
  );
};
export default DetailedList;