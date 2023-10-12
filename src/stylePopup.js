import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: red;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid red;
    height: fit-content;
    width: fit-content;
    background-color: white;
    padding: 10px;
`;

export const Button = styled.button`
    border-radius: 4px;
    border: solid 1px red;
    background-color: white;
    color: red;
    font-weight: 800;
    position: absolute;
    right: 4px;
    top: 4px;
    cursor: pointer;
`;

export const PlayAgain = styled.a`
    text-decoration: none;
    padding: 2px;
    border-radius: 4px;
    border: solid 1px red;
    background-color: white;
    color: red;
    cursor: pointer;
    font-weight: 800;
`;
export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 16px;
    font-weight: 600;
`;
