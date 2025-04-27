import { setInputValue, clearInput } from '../../features/formInputSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { FormBlock, FormWrapper, FormLabel, FormControl, FormField } from './Form.styled';
import plusIcon from '../../assets/images/plus.png';

export const Form = (props: { createNewToDo: Function }) => {
  // const [text, setText] = useState<string>('');
  //теперь вместо useState управляем состоянием инпута через стор редакса
  const inputValue = useSelector((state: RootState) => state.formInput.value);
  const dispatch = useDispatch();

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault(); //перехватывает стандартный обработчик события браузера и теперь не происходит перезагрузки страницы при добавлении новой задачи

    if (inputValue) {
      props.createNewToDo(inputValue);
      // setText('');
      dispatch(clearInput());
    }
  };

  return (
    <FormWrapper className='form-wrapper'>
      <FormBlock
        action='#'
        onSubmit={formSubmit}
      >
        <FormLabel>
          <FormField
            type='text'
            // value={text}
            value={inputValue} //теперь берем из redux store
            // onChange={(e) => setText(e.target.value)} //синхронизирует введённый текст с состоянием
            onChange={(e) => dispatch(setInputValue(e.target.value))} // теперь передаём value в state через redux
          />
          <FormControl icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
