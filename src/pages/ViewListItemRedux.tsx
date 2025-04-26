import { useEffect, useState } from 'react';
import { ToDo } from '../models/todo-items';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// компонент ViewListItem, который используется для Redux
export const ViewListItemRedux = () => {
  //получаем массив todoList из стора
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    //const searchTodo = todos.find((todo) => todo.id === id); //ищем элемент списка по id из url-параметра
    // todo.id – число, а id – строка. Нужно что-то привести к другому типу
    const searchTodo = todoList.find((todo) => String(todo.id) === id);

    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate('/404');
    }
  }, [todoList, id, navigate]);

  return (
    <div className='container'>
      <h1>{todo?.text}</h1>
    </div>
  );
};
