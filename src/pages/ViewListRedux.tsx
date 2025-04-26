import { useSelector } from 'react-redux';
import { ListItem } from '../components/ListItem/ListItem';
import { ToDo } from '../models/todo-items';
import { RootState } from '../store';

// компонент ViewList, который используется для Redux
export const ViewListRedux = () => {
  //получаем массив todoList из стора
  const todoList = useSelector((state: RootState) => state.todoList.todos);

  return (
    <div className='container'>
      {todoList.map((todo: ToDo, idx: number) => {
        return (
          <ListItem
            key={idx}
            todo={todo}
          />
        );
      })}
    </div>
  );
};
