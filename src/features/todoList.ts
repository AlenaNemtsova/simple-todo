import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDo } from '../models/todo-items';

export interface TodoState {
  todos: ToDo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  //в слайсе создаётся редьюсер (мутатор состояния) и автоматически создаются экшены
  name: 'todoList', //имя редьюсера
  initialState, //начальное состояние
  reducers: {
    //мутаторы состояния
    createAction: (state, action: PayloadAction<string>) => {
      //action: PayloadAction<> это дженерик-тип
      const newToDo: ToDo = {
        id: state.todos.length,
        text: action.payload, //payload – объект, в который передаём text
        isDone: false,
      };
      state.todos = [...state.todos, newToDo];
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.isDone = !item.isDone;
        }
        return item;
      });
      state.todos = newTodos;
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.filter((item) => item.id !== action.payload.id);
      state.todos = newTodos;
    },
  },
});

// RTK автоматически создаёт "генераторы экшенов" (action creators) для каждого редьюсера, который мы определили в createSlice()
// то есть todoSlice.actions содержит готовые функции-экшены, соответствующие редьюсерам
export const { createAction, updateAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
