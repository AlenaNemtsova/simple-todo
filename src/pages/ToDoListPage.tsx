// import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/todo-items';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { createAction, updateAction, deleteAction } from '../features/todoList';

export const ToDoListPage = () => {
  // const [todos, setTodos] = useState<ToDo[]>([]); //типизация useState – массив из ToDo-элементов, которые затипизированы в интерфейсе ToDo

  // вместо useState используем Redux:
  // для получения данных из стора – useSelector, который принимает state с типом RootState (указан в store.ts)
  // и возвращает массив todos;
  // для обновления данных todos в сторе – useDispatch
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  //Всплывающие уведомления
  const notifyUpdate = () =>
    toast('Статус задачи обновлён', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    });

  const notifydelete = () =>
    toast('Задача удалена', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    });

  // <!--- ЛОГИКА ДЛЯ ИСПОЛЬЗОВАНИЯ С useState: ---!>
  // const createNewToDo = (text: string) => {
  //   const newToDo: ToDo = {
  //     id: todos.length,
  //     text: text,
  //     isDone: false,
  //   };
  //   setTodos([...todos, newToDo]);
  // };

  // const updateToDo = (todoItem: ToDo) => {
  //   const newTodos = todos.map((item) => {
  //     //cоздаем новый массив, в который войдут элементы из старого массива todos, но с измененным полем
  //     if (item.id === todoItem.id) {
  //       //если id перебираемого элемента массива = id todoItem по которому кликнули, то есть находим todoItem в массиве
  //       //то меняем его поле на противоположное
  //       item.isDone = !item.isDone;
  //     }
  //     return item;
  //   });

  //   setTodos(newTodos);
  //   notifyUpdate();
  // };

  // const deleteToDo = (todoItem: ToDo) => {
  //   const newTodos = todos.filter((item) => item.id !== todoItem.id);
  //   //вернёт только те элементы, у которых id не совпадает с кликнутым id
  //   setTodos(newTodos);
  //   notifydelete();
  // };

  // <!--- ЛОГИКА ДЛЯ ИСПОЛЬЗОВАНИЯ С REDUX ---!>
  const createNewToDo = (text: string) => {
    dispatch(createAction(text)); //createAction взяли из слайса todoSlice.actions, передаём в него текст задачи
  };

  const updateToDo = (todoItem: ToDo) => {
    dispatch(updateAction(todoItem));
    notifyUpdate();
  };

  const deleteToDo = (todoItem: ToDo) => {
    dispatch(deleteAction(todoItem));
    notifydelete();
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        // todos={todos} //сначала передавали todos из useState
        todos={todoList} //а теперь передаём todoList из стора
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Slide}
      />
    </>
  );
};
