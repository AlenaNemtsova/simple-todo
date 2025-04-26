import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoList'; //импортируем слайс(редьюсер) todoSlice
import formInputReducer from './features/formInputSlice'; //импортируем слайс(редьюсер) formInputSlice
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage';

export const store = configureStore({
  // метод configureStore собирает все возможные состояния (state) приложения и выдаёт их одним объектом
  // то есть у state сейчас есть два поля – state.todoList и state.formInput
  reducer: {
    todoList: todoReducer, //это слайс todoSlice
    formInput: formInputReducer, //это слайс formInputSlice
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>; //тип state
export type AppDispatch = typeof store.dispatch;
