// import { Link } from 'react-router';
// import classes from './ListItem.module.scss';
import { ToDo } from '../../models/todo-items';
import { StyledLink } from './ListItem.styled';

export const ListItem = ({ todo }: { todo: ToDo }) => {
  //можно не использовать props, а сразу деструктурировать параметр так: ({todo}: { todo: ToDo })
  // и в компоненте писать не props.todo.id, а просто todo.id

  return (
    // чтобы на github.pages ссылка работала, нужно добавить открытие ссылки в новом окне target='_blank'
    // и в href добавить поддомен /app/
    // ИЛИ вместо ссылки <a> использовать Link из роутера
    // <a
    //   className={`${classes.link} ${props.todo.isDone ? classes.done : classes.notDone}`}
    //   target='_blank'
    //   rel='noreferrer'
    //   href={`/app/list/${props.todo.id}`}>
    //   {props.todo.text}
    // </a>

    <StyledLink
      to={`${todo.id}`}
      $isDone={todo.isDone}
      // className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
    >
      {todo.text}
    </StyledLink>
  );
};
