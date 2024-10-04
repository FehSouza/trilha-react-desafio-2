import styled from 'styled-components'

export const ItemContainer = styled.div`
  margin-top: 20px;
  width: 100%;

  h3 {
    font-size: 20px;
    color: #fafafa;
  }

  p {
    margin-top: 8px;
    font-size: 16px;
    color: #fafafa60;
  }

  a, button {
    display: flex;
    margin-top: 16px;
    font-size: 16px;
    color: #fafafa60;
		background-color: transparent;
		border: none;
		outline: none;
		padding: 0;
		text-decoration: underline;
  }

  button {
    color: #ff0000;
    margin-top: 8px;
  }

  hr {
    border-color: #fafafa40;
    margin: 20px 0;
  }
`
