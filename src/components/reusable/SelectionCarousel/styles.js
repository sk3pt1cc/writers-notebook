import styled from 'styled-components'

export const SelectionCarouselWrapper = styled.div`

`

export const SelectionEntity = styled.div`
  background-color: white;
  padding: 0 16px;
  margin-top: 8px;
  display: flex;
  &:hover {
    cursor: pointer;
  }

  border: ${({ selected }) => selected ? `4px solid green` : `4px solid black`};

  p {
    flex: 2;
  }

  div {
    flex: 1;
    display: flex;
    padding-top: 5px;

    button {
      height: 30px;
    }
  }
`

export const SelectionControls = styled.div`
  display: flex;
`

export const SelectionEntities = styled.div`
   max-height: 400px;
   overflow-y: scroll;
   padding: 16px;
`

export const SelectionPanes = styled.div`
  display: flex;
`;

export const SelectionDisplay = styled.div`
  padding: 8px;
  flex: 1;
`;