import styled from 'styled-components'

export const InputContainer = styled.div`
  border: 1px solid #fafafa;
  border-radius: 12px;
  height: 48px;
  width: 100%;
  margin-top: 40px;
  transition-duration: 350ms;

  &:focus-within, &:hover {
    border: 1px solid #fafafa80;
  }

  input {
    background: transparent;
    border: 0;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    color: #ffffff;
    font-size: 18px;
    outline: none;
  }
`
