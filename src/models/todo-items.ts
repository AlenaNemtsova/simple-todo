export interface ToDo {
  // id: number;
  id: string; //так как в библиотеке uuid значение id – строка
  text: string;
  isDone: boolean;
}
