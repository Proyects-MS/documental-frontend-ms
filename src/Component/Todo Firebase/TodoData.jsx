import React, { Fragment, useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import { toast } from 'react-toastify';
import { Check, Trash2 } from 'react-feather';
import { firebase_app } from '../../Config/Config';
import { deleteList, creatTodoList, updateTask } from '../../Services/Todo-Firebase.Service';
import { Btn, H4, LI, UL } from '../../AbstractElements';
import { AddNewTask, AddTask, Close } from '../../Constant';
import TodoMark from './TodoMark';

const TodoData = () => {
  const [addTask, setAddTask] = useState('');
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [border_danger, setBorder_danger] = useState(false);
  const [hide, setHide] = useState(false);
  const [ShowHide, setShowHide] = useState(false);
  const handleRemoveTodo = (todoId) => {
    deleteList(todoId);
    toast.success('Deleted Task !');
  };
  useEffect(() => {
    const unsubscribe = firebase_app.firestore().collection('todo').onSnapshot((snapshot) => {
      const newItem = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodoList(newItem);
    });
    return () => unsubscribe();
  }, []);
  const openTaskWrapper = () => {
    setAddTask(' visible');
    setHide(true);
  };
  const addNewTask = () => {
    if (task === '') {
      setBorder_danger(true);
    } else {
      creatTodoList(task);
      setAddTask('');
      setBorder_danger(false);
      setShowHide(true);
      setHide(false);
      setTask({ task: '' });
    }
  };
  const handleMarkedTodo = (index, todo) => {
    if (todo.completed === false) {
      toast.success('Task Completed !');
    }
    if (todo.completed === true) {
      toast.error('Task In-completed !');
    }
    todo.completed = !todo.completed;
    updateTask(todo);
  };
  const closeTaskWrapper = () => {
    setAddTask('');
    setHide(true);
  };
  const onTaskChanged = (e) => {
    setTask({ task: e.currentTarget.value });
  };
  return (
    <Fragment>
      <TodoMark />
      <div className="todo-list-body">
        <UL attrUL={{ className: 'simple-list', id: 'todo-list' }} >
          {todoList.length > 0 &&
            todoList.map((todoData) =>
              <LI attrLI={{ className: 'task ' + (todoData.completed && 'completed') }} key={todoData.id}>
                <div className="task-container">
                  <H4 attrH4={{ className: 'task-label' }}>{todoData.task.task}</H4>
                  <span className="task-action-btn">
                    <span className="action-box large delete-btn" title="Delete Task" onClick={() => handleRemoveTodo(todoData.id)}><Trash2 className="icon icon-check" /></span>
                    <span className="action-box large complete-btn" title="Mark Complete" onClick={() => handleMarkedTodo(todoData.id, todoData)} >
                      <Check className="icon icon-check" /> </span>
                  </span>
                </div>
              </LI>)}
        </UL>
      </div>
      <div className="todo-list-footer">
        <div className="add-task-btn-wrapper"><span className={`add-task-btn${hide && ' hide'}`}>
          <Btn attrBtn={{ color: 'primary', onClick: openTaskWrapper }}> <i className="icon-plus"></i> {AddNewTask}</Btn></span></div>
        <div className={'new-task-wrapper' + addTask}>
          <Input className={`ng-untouched ng-pristine ng-valid${border_danger && ' border-danger' + ShowHide ? 'taskmag-show' : 'taskmag-hide'}`} id="newtask" placeholder="Enter new task here. . ." type='textarea' value={task.task} onChange={onTaskChanged} ></Input>
          <Btn attrBtn={{ color: 'danger', className: 'cancel-btn', id: 'close-task-panel', onClick: closeTaskWrapper }}>{Close}</Btn>
          <Btn attrBtn={{ color: 'success', className: 'ms-3 add-new-task-btn', id: 'add-task', onClick: addNewTask }}>{AddTask}</Btn>
        </div>
      </div>
    </Fragment>
  );
};
export default TodoData;