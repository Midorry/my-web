import styled from "styled-components";

export const Link = styled.a`
    border-radius: 6px;
    background-color: aqua;
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin: 40px 0;
    padding: 4px 10px;
    &:hover {
        background-color: #8ae3e3;
    }
`;
export const Text = styled.div`
    width: 50%;
    color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin: 40px 0;
`;
export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 600;
`;
export const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: aqua;
    color: black;
    border-radius: 10px;
    padding: 10px 10px 0 4px;
    cursor: default;
`;

export const TextSize = styled.div`
    font-weight: bold;
    font-size: 36px;
    text-decoration: underline;
`;
