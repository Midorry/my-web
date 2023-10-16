import styled from "styled-components";

export const Letter = styled.button`
    font-weight: 600;
    height: 40px;
    width: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: aqua;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background-color: #8ae3e3;
    }
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`;

export const Container = styled.div`
    width: 140px;
    height: 100px;
`;

export const Button = styled.button`
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 120px;
    font-weight: 600;
    line-height: normal;
    font-size: 15px;
    height: 40px;
    margin-right: 40px;
    background-color: aqua;
    cursor: pointer;
    &:hover {
        background-color: #8ae3e3;
    }
`;
export const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin: 40px 0;
`;
