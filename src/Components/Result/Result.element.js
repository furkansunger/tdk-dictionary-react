import styled from "styled-components";

export const ResultWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 1rem 0;
    overflow-y: auto;
`;

export const Results = styled.div`
    width: 100%;
    margin-top: 1rem;
    border-radius: 7px;
    background-color: #ff5722;
    padding: 0.5rem 1rem;
`;

export const ResultList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    margin: 0;
`;

export const ResultItem = styled.li`
    list-style: none;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.7px;
    margin: 0.5rem 0;
`;

export const RelevantWords = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const RelevantItem = styled.a`
    text-decoration: none;
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    color: #303841;

    &:hover {
        color: #fff;
        transition: 0.3s ease;
    }
`;