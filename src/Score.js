import { A, Text, Wrap } from "./styleScore";

function Score(props) {
    return (
        <Wrap>
            <Text>
                Your Score: {props.isGiveUp ? props.count : props.score}
            </Text>
            <A href="/play">Play Again</A>
            <A href="/">Home Page</A>
        </Wrap>
    );
}

export default Score;
