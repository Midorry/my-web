import styled from "styled-components";

export const Text = styled.p`
    font-weight: bold;
    font-size: 34px;
    color: aqua;
    margin-right: 20px;
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const A = styled.a`
    font-size: 24px;
    width: 150px;
    text-align: center;
    display: block;
    background-color: aqua;
    padding: 5px 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    color: #000000a6;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: #8ae3e3;
    }
`;
