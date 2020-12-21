import styled from 'styled-components'

const TableCell = styled.div`
    flex: ${({ size }) => size};
    padding: 8px;
    border: 1px solid black;
    ${({ heading }) => heading && `
        font-size: 25px;
        text-align: center;
    `};
`;

export default TableCell