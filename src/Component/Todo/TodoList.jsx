import React, { useState, Fragment, useContext } from 'react';
import { Input } from 'reactstrap';
import { toast } from 'react-toastify';
import { Check, Trash2 } from 'react-feather';
import TodoContext from '../../_helper/todo-app';
import { Btn, H4, LI, UL } from '../../AbstractElements';
import { AddNewTask, AddTask, Close } from '../../Constant';

const TodoList = () => {
  const { allTodos, addNewTodo, removeItems, selectedItem } = useContext(TodoContext);
  const [addTask, setAddTask] = useState('');
  const [border_danger, setBorder_danger] = useState(false);
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('pending');
  const [hide, setHide] = useState(false);
  const [ShowHide, setShowHide] = useState(false);
  const addNewTask = () => {
    if (task === '') {
      setBorder_danger(true);
    } else {
      setBorder_danger(false);
      addNewTodo(task);
      setAddTask('');
      setShowHide(true);
      setHide(false);
      setTask({ task: '' });
    }
  };
  const handleRemoveTodo = (todoId) => {
    removeItems(todoId);
    toast.success('Deleted Task !');
  };
  const handleMarkedTodo = (itemId, itemStatus) => {
    if (itemStatus === 'completed') {
      setStatus('pending');
      selectedItem(itemId, status);
      toast.success('Task Completed !');
    } else if (itemStatus === 'pending') {
      setStatus('completed');
      selectedItem(itemId, status);
      toast.error(' Task In-completed !');
    }
  };
  const openTaskWrapper = () => {
    setAddTask(' visible');
    setHide(true);
  };
  const closeTaskWrapper = () => {
    setAddTask('');
    setHide(true);
  };
  const onTaskChanged = (e) => {
    setTask({
      task: e.currentTarget.value
    });
  };
  return (
    <Fragment>
      <div className="todo-list-body">
        <UL attrUL={{ className: 'simple-list', id: 'todo-list' }}>
          {allTodos.length > 0 &&
            allTodos.map((todo) =>
              <LI attrLI={{ className: 'task ' + todo.status }} key={todo.id} >
                <div className="task-container">
                  <H4 attrH4={{ className: 'task-label' }}>{todo.title}</H4>
                  <span className="task-action-btn">
                    <span className="action-box large delete-btn" title="Delete Task" onClick={() => handleRemoveTodo(todo.id)} ><Trash2 className="icon icon-trash" /></span>
                    <span className="action-box large complete-btn" title="Mark Complete" onClick={() => handleMarkedTodo(todo.id, status)} ><Check className="icon icon-check" />
                    </span>
                  </span>
                </div>
              </LI>
            )}
        </UL>
      </div>
      <div className="todo-list-footer">
        <div className="add-task-btn-wrapper"><span className={`add-task-btn${hide && ' hide'}`}>
          <Btn attrBtn={{ color: 'primary', onClick: openTaskWrapper }}> <i className="icon-plus"></i> {AddNewTask}</Btn></span>
        </div>
        <div className={'new-task-wrapper' + addTask}>
          <Input className={`ng-untouched ng-pristine ng-valid${border_danger && ' border-danger' + ShowHide ? 'taskmag-show' : 'taskmag-hide'}`} id="newtask" type='textarea'
            placeholder="Enter new task here. . ."
            value={task.task} onChange={onTaskChanged}></Input>
          <Btn attrBtn={{ color: 'danger', className: 'cancel-btn', id: 'close-task-panel', onClick: closeTaskWrapper }}>{Close}</Btn>
          <Btn attrBtn={{ color: 'success', className: 'ms-3 add-new-task-btn', id: 'add-task', onClick: addNewTask }} > {AddTask}</Btn>
        </div>
      </div>
    </Fragment >
  );
};
export default TodoList;