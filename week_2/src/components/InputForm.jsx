import styled from 'styled-components';

const SubmitButton= styled.button`
  background= #A3FFA6;
  padding: 0.5 rem 1 rem;
  font-weight: bold;
`;


const Form = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 2rem 5rem;
    background-color: #60B3FB;
    color: white;
`;


const InputForm = () => {
    return (
        <Form>
            <span>Log your Sources:</span>
            <span>
                <label for="name">Source Name:</label>
                <input type="text" id="name" />
            </span>
            <span>
                <label for="email">Source Email:</label>
                <input type="email" id="email" />
            </span>
            <SubmitButton>Submit</SubmitButton>
        </Form>
    )
};

export default InputForm;
