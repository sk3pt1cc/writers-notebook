import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  button {
    padding: 8px 32px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid gray;

    background-color: ${({ type }) => {
      if (type === 'basic') {
        return `white`
      }
    }};
  }
`