import { A, Text, Wrap } from "./styleScore";

function Score(props) {
    const handleOnClick = () => {
        // props.func(true);
    };
    return (
        <Wrap>
            <Text>
                Your Score: {props.isGiveUp ? props.count : props.score}
            </Text>
            <A href="/" onClick={handleOnClick}>
                Play Again
            </A>
        </Wrap>
    );
}

export default Score;
