import styled from 'styled-components';

const DeleteButton = styled.button`
    padding: 0.5rem 1rem;
    background: ${props => props.color};
    font-weight: bold;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
    margin: 1rem 0;

    span {
        width: 25%;
    }
`;

export default Source;
