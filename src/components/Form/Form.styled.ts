import styled from 'styled-components';
import { Theme } from '../../models/themes';

export const FormWrapper = styled.div<{ theme: Theme }>`
  width: 100%;
  height: 90px;

  position: relative;
  padding: 20px;
  z-index: 5;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  transition: background-color 0.2s;
  box-shadow: 0 2px 4px rgba(44, 62, 80, 0.15);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const FormBlock = styled.form``;

export const FormLabel = styled.label``;

export const FormField = styled.input`
  width: 100%;
  height: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  text-indent: 18px;
  padding: 0 60px 0 0;
  background: rgb(255, 255, 255, 0.3);
  border-radius: 5px 25px 25px 5px;
  border: 0;
  box-shadow: none;
  outline: none;
`;

// передаём icon пропсами, в колбэке потому что эти стили находятся в отдельном файле
// если декструктурируем icon, то слово props не надо использовать
export const FormControl = styled.button<{ icon: string }>`
  width: 50px;
  height: 50px;
  background: transparent url(${({ icon }) => icon}) no-repeat center/cover;
  position: absolute;
  top: 20px;
  right: 15px;
  z-index: 2;

  border-radius: 25px;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;
`;
