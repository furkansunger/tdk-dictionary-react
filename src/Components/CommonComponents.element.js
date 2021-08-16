import styled from "styled-components";

export const PrimaryButton = styled.button`
    outline: none;
    border: 1px solid #00ADB5;
    color: #00ADB5;
    padding: 0.5rem;
    cursor: pointer;
    background-color: transparent;
    border-radius: 7px;

    &:hover {
        background-color: #00ADB5;
        color: #eeeeee;
        transition: 0.4s ease;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #303841;
    color: #303841;
    background-color: transparent;
    outline: none;

    &:focus {
        border: 1px solid #00ADB5;
        background-color: #eeeeee;
        transition: 0.3s ease;
    }
`;