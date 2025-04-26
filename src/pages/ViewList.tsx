import { ListItem } from '../components/ListItem/ListItem';
import { ToDo } from '../models/todo-items';

export const ViewList = (props: { todos: ToDo[] }) => {
  return (
    <div className='container'>
      {props.todos.map((todo: ToDo, idx: number) => {
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
