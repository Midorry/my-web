import React, { useRef, useState } from "react";
import { Button, Container, Main, PlayAgain, Wrap } from "./stylePopup";

function Popup(props) {
    const [disabled, setDisabled] = useState(false);
    let num = useRef(3);
    let info = useRef("");
    const handleOnClick = () => {
        props.setTrigger(false);
        if (props.giveUp) {
            props.setId({ id: props.id.id + 1, score: props.count.current });
            props.setWord([]);
            props.setGiveUp(false);
        }
        if (props.word.length === props.letters.length) {
            const p = props.p;
            const t = props.pickLetters.join("");
            if (p !== t) {
                // count.current -= 1;
                // console.log(id.score);
                // let value = id.score - 1;
                // if (value < 0) {
                //     value = 0;
                // }
                // props.setTrigger(true);
                props.setId({ id: props.id.id + 1, score: props.id.score });
                props.setWord([]);
            }
            if (p === t) {
                console.log("Congratulation", props.id.id, props.id.score);
                if (props.length > props.id.id) {
                    props.count.current += 1;
                    // props.setTrigger(true);
                    props.setId({
                        id: props.id.id + 1,
                        score: props.id.score + 1,
                    });
                    props.setWord([]);
                }
            }
        }
    };

    const handlePlayAgain = () => {
        num.current -= 1;
        if (num.current < 0) {
            num.current = 0;
        }
        console.log("Play Again");
        if (num.current === 0) {
            info.current = "Bạn đã hết lượt chơi lại";
            setDisabled(true);
        }
        if (props.length === props.letters.length) {
            const p = props.p;
            const t = props.pickLetters.join("");
            if (p !== t) {
                props.setId({ id: props.id.id, score: props.count.current });
            }
            if (p === t) {
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
                    {disabled ? (
                        <p></p>
                    ) : (
                        <PlayAgain onClick={handlePlayAgain}>
                            {disabled ? "" : "PlayAgain"}
                        </PlayAgain>
                    )}
                    {/* <PlayAgain onClick={handlePlayAgain}>
                        {disabled ? "" : "PlayAgain"}
                    </PlayAgain> */}
                </Wrap>
            </Container>
        </Main>
    ) : (
        ""
    );
}

export default Popup;
