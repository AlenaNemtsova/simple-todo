import styled from 'styled-components';

export const ToDoListContainer = styled.div`
  width: 100%;
  padding: 15px;
`;

export const TodoListBase = styled.ul`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;
`;

export const FailedList = styled(TodoListBase)`
  /* Специфичные стили для невыполненных задач */
  &:empty:after {
    content: 'No tasks to complete';
  }

  &:after {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 16px;
    color: #a9acb1;
  }
`;

export const CompletedList = styled(TodoListBase)`
  /* Специфичные стили для выполненных задач */
  position: relative;
  padding: 60px 0 0 0;

  &:empty:after {
    content: 'No completed tasks';
  }

  &:before {
    content: '';
    width: 150px;
    height: 1px;
    background: #6d89b2;

    position: absolute;
    top: 25px;
    left: calc(50% - 75px);
  }

  &:after {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 16px;
    color: #a9acb1;
  }
`;
