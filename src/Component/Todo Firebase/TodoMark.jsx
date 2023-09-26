import { markAllTask } from '../../Services/Todo-Firebase.Service';
import React, { Fragment, useState } from 'react';
import { Check, Trash2 } from 'react-feather';
import { toast } from 'react-toastify';

const TodoMark = () => {
    const [markAll, setMarkAll] = useState(false);
    const markAllStatus = (checked) => {
        if (checked === true) {
            toast.success('All Task Completed !');
        } else {
            toast.error('All Task In-Completed !');
        }
        setMarkAll(checked);
        markAllTask(checked);
    };
    return (
      <Fragment>
        <div className="mark-all-tasks">
          <div className="mark-all-tasks-container">
            <span className="mark-all-btn" id="mark-all-finished" role="button">
              <span className="btn-label">{'Mark all as finished'}</span>
              <span className="action-box completed" onClick={() => markAllStatus(!markAll)}>
                {markAll &&
                <Check className="icon icon-check" />}
              </span>
            </span>
            <span className="mark-all-btn move-down" id="mark-all-incomplete" role="button">
              <span className="btn-label">{'Mark all as Incomplete'}</span>
              <span className="action-box">
                <Trash2 className="icon icon-trash" />
              </span>
            </span>
          </div>
        </div>
      </Fragment>
    );
};
export default TodoMark;