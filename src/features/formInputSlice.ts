import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormInputState {
  value: string;
}

const initialState: FormInputState = {
  value: '',
};

// слайс для управления состоянием инпута формы Form.tsx, используем вместо useState
export const formInputSlice = createSlice({
  name: 'formInput',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload; //payload – объект, в который передаём text, то есть в value сохраняем text инпута
    },
    // для очистки инпута после отправки формы
    clearInput: (state) => {
      state.value = '';
    },
  },
});

export const { setInputValue, clearInput } = formInputSlice.actions;
export default formInputSlice.reducer;
