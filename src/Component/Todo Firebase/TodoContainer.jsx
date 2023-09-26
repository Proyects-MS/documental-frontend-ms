import { LI } from '../../AbstractElements';
import React, { Fragment } from 'react';
import { Check, Trash2 } from 'react-feather';

const TodoContainer = () => {
    return (
      <Fragment>
        <script id="task-template" type="tect/template">
          <LI attrLI={{ className: 'task' }}>
            <div className="task-container">
              <span className="task-action-btn">
                <span className="action-box large delete-btn" title="Delete Task">
                  <Trash2 className="icon icon-check" />
                </span>
                <span className="action-box large complete-btn" title="Mark Complete">
                  <Check className="icon icon-check" />
                </span>
              </span>
            </div>
          </LI>
        </script>
      </Fragment>
    );
};
export default TodoContainer;