import { createBrowserRouter } from 'react-router';
import { Layout } from './layouts/Layout';
import { ToDoListPage } from './pages/ToDoListPage';
import { NotFound } from './pages/404/404';
// import { ViewList } from './pages/ViewList';
// import { ViewListItem } from './pages/ViewListItem';
import { ViewListItemRedux } from './pages/ViewListItemRedux';
import { ViewListRedux } from './pages/ViewListRedux';
// import { ToDo } from './models/todo-items';

// <!--- Если ИСПОЛЬЗУЕМ REDUX вместо useState, то этот список нам больше не нужен---!>
// const todos: ToDo[] = [
//   {
//     id: 0,
//     text: 'Первое',
//     isDone: false,
//   },
//   {
//     id: 1,
//     text: 'Второе',
//     isDone: true,
//   },
//   {
//     id: 2,
//     text: 'Третье',
//     isDone: false,
//   },
//   {
//     id: 3,
//     text: 'Четв',
//     isDone: true,
//   },
// ];

// новый вариант роутера – пути передаются в RouterProvider
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />, //можно застилизовать дефолтную 404 страницу через errorElement, но она будет без path
      children: [
        {
          path: '/',
          element: <ToDoListPage />,
        },
        {
          path: '/list',
          // element: <ViewList todos={todos} />, //используем с useState
          element: <ViewListRedux />, //используем с Redux
        },
        {
          path: '/list/:id',
          // element: <ViewListItem todos={todos} />, //используем с useState
          element: <ViewListItemRedux />, //используем с Redux
        },
      ],
    },
    {
      path: '*', // сделаем ещё и свою страницу 404 с path
      element: <NotFound />,
    },
  ]
  // { basename: '/app/' } //настройка поддомена для сайтов типа github.pages. Все маршруты будут относительно /app/
);
