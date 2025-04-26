import { useEffect, useState } from 'react';
import { ToDo } from '../models/todo-items';
import { useNavigate, useParams } from 'react-router';

//чтобы не загромождать пропсы (у него может быть много полей), в каждом компоненте можно сделать свои типы пропсов
//для этого пишем interface ComponentProps и типизируем пропсы

interface ComponentProps {
  todos: ToDo[];
}

// в компоненте используем interface для типизации props
// а сам props деструктурируем и избавляемся от приставки props. в компоненте
export const ViewListItem = ({ todos }: ComponentProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    //const searchTodo = todos.find((todo) => todo.id === id); //ищем элемент списка по id из url-параметра
    // todo.id – число, а id – строка. Нужно что-то привести к другому типу
    const searchTodo = todos.find((todo) => String(todo.id) === id);

    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate('/404');
    }
  }, [todos, id, navigate]);

  return (
    <div className='container'>
      <h1>{todo?.text}</h1>
    </div>
  );
};
