import styled from 'styled-components'

export const SelectionCarouselWrapper = styled.div`

`

export const SelectionEntity = styled.div`
  background-color: white;
  padding: 0 16px;
  margin-top: 8px;
  &:hover {
    cursor: pointer;
  }

  border: ${({ selected }) => selected ? `4px solid green` : `4px solid black`};
`

export const SelectionControls = styled.div`
  display: flex;
`

export const SelectionEntities = styled.div`
   max-height: 400px;
   overflow-y: scroll;
   padding: 16px;
`