import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BookmarksContain from '../../Component/BookMarks';

const Bookmarks = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bookmarks" title=" Bookmarks" />
      <BookmarksContain />
    </Fragment>
  );
};
export default Bookmarks;