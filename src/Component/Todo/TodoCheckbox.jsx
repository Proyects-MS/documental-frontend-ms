import TodoContext from '../../_helper/todo-app';
import React, { Fragment, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const TodoCheckbox = () => {
  const [markAll, setMarkAll] = useState(true);
  const { markAllItems } = useContext(TodoContext);
  const markAllStatus1 = () => {
    setMarkAll(true);
    if (markAll === true) {
      toast.error('All Task In-Completed !');
    } else {
      toast.success('All Task Completed !');
    }
    markAllItems(markAll);
  };
  const markAllStatus2 = () => {
    setMarkAll(false);
    if (markAll === true) {
      toast.error('All Task In-Completed !');
    } else {
      toast.success('All Task Completed !');
    }
    markAllItems(markAll);
  };
  return (
    <Fragment>
      <div className="mark-all-tasks">
        <div className="mark-all-tasks-container">
          <span className={`mark-all-btn ${markAll ? 'move-up' : ''} `} id="mark-all-finished" role="button" onClick={markAllStatus1}>
            <span className="btn-label">{'Mark all as finished'}</span>
            <span className="action-box completed"><i className="icon"><i className="icon-check"></i></i></span>
          </span>
          <span className={`mark-all-btn ${markAll ? '' : 'move-down'} `} id="mark-all-incomplete" role="button" onClick={markAllStatus2}>
            <span className="btn-label">{'Mark all as Incomplete'}</span>
            <span className="action-box"><i className="icon"><i className="icon-check"></i></i></span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};
export default TodoCheckbox;