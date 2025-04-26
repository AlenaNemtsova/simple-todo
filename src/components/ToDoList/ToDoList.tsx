import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import { ToDo } from '../../models/todo-items';
import { ToDoListContainer, FailedList, CompletedList } from './ToDoList.styled';
// import './ToDoList.scss';

export const ToDoList = (props: { todos: ToDo[]; updateToDo: Function; deleteToDo: Function }) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, index) => (
        <ToDoListItem
          key={index}
          todoItem={item}
          updateToDo={props.updateToDo}
          deleteToDo={props.deleteToDo}
        />
      ));
  };

  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, index) => (
        <ToDoListItem
          key={index}
          todoItem={item}
          updateToDo={props.updateToDo}
          deleteToDo={props.deleteToDo}
        />
      ));
  };

  return (
    // <div className='todo-container'>
    //   <ul className='todo-list failed'>{checkedList()}</ul>
    //   <ul className='todo-list completed'>{unCheckedList()}</ul>
    // </div>
    <ToDoListContainer>
      <FailedList>{checkedList()}</FailedList>
      <CompletedList>{unCheckedList()}</CompletedList>
    </ToDoListContainer>
  );
};
