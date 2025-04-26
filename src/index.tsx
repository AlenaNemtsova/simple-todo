import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { store } from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyle';

{
  /* новый вариант роутера – все элементы теперь рендерятся в Outlet компонента Layout, 
    а пути обёрнуты в RouterProvider  */
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

/* старый вариант роутера */
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
{
  /* <BrowserRouter>
      <Header /> // перенесли Header в Layout
      <Routes>
        <Route
          path='/'
          element={<HomePage todos={todos} />}></Route>
        <Route
          path='/list/:id'
          element={<ItemDescription todos={todos} />}></Route>
        <Route
          path='/todo'
          element={<ToDoListPage />}></Route>
        <Route
          path='*'
          element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> */
}
//   </React.StrictMode>
// );
