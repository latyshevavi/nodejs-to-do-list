import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-contenr: center;
    padding: 5px 0px;
    @media (max-width: 420px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    background-color: #f7f7f7;
    width: 100%;
    padding: 8px;
    border: 1px solid grey;
    border-radius: 8px;

    :focus {
        border: 3px solid #ef7360;
        outline: none;
    }
`;

export const Button = styled.button`
    background: #ef7360;
    border-radius: 18px;
    border: 2px solid grey;
    color: white;
    margin-left: 1em;
    padding: 8px 20px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight; 600;
    @media (max-width: 420px) {
        margin-top: 10px;
        margin-left: 0;
        width: 100%;
    }
`;