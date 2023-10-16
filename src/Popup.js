import React, { useRef, useState } from "react";
import { Button, Container, Main, PlayAgain, Wrap } from "./stylePopup";

function Popup(props) {
    const [disabled, setDisabled] = useState(false);
    let num = useRef(3);
    let info = useRef("");
    const result = props.result;
    const playerResult = props.pickLetters.join("");

    //Hàm xử lý sau khi hiện Pop up kết quả
    const handleOnClick = () => {
        props.setTrigger(false);
        if (props.giveUp) {
            props.setId({ id: props.id.id + 1, score: props.count.current });
            props.setWord([]);
            props.setGiveUp(false);
        }
        if (props.word.length === props.letters.length) {
            if (result !== playerResult) {
                props.setId({ id: props.id.id + 1, score: props.id.score });
                props.setWord([]);
            }
            if (result === playerResult) {
                if (props.length > props.id.id) {
                    props.count.current += 1;
                    props.setId({
                        id: props.id.id + 1,
                        score: props.id.score + 1,
                    });
                    props.setWord([]);
                }
            }
        }
    };

    // Hàm xử lý khi người chơi muốn chơi lại
    const handlePlayAgain = () => {
        num.current -= 1;
        if (num.current < 0) {
            num.current = 0;
        }
        if (num.current === 0) {
            info.current = "Bạn đã hết lượt chơi lại";
            setDisabled(true);
        }
        if (props.length === props.letters.length) {
            if (result !== playerResult) {
                props.setId({ id: props.id.id, score: props.count.current });
            }
            if (result === playerResult) {
                props.setId({ id: props.id.id, score: props.count.current });
            }
        } else {
            props.setId({ id: props.id.id, score: props.count.current });
        }
        props.setWord([]);
        props.setTrigger(false);
    };

    return props.trigger ? (
        <Main>
            <Container>
                <Button onClick={handleOnClick}>X</Button>
                {props.children}
                <Wrap>
                    <div>Số lượt chơi lại: {num.current}</div>
                    <div>{info.current}</div>
                    <br />
                    {disabled || props.giveUp || result === playerResult ? (
                        <p></p>
                    ) : (
                        <PlayAgain onClick={handlePlayAgain}>
                            {disabled ? "" : "Play Again"}
                        </PlayAgain>
                    )}
                </Wrap>
            </Container>
        </Main>
    ) : (
        ""
    );
}

export default Popup;
