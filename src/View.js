import { Fragment, useRef, useState } from "react";
import { Letter, Wrap, Button, Text } from "./styleView";
import Score from "./Score";
import Popup from "./Popup";

function View(props) {
    const [word, setWord] = useState([]);
    const [id, setId] = useState({ id: 0, score: 0 });
    const [giveUp, setGiveUp] = useState(false);
    const [popup, setPopup] = useState(false);
    const [activeIndex, setActiveIndex] = useState([]);
    let numActive = useRef([]);
    let del = useRef([]);
    let correct = useRef([]);
    let count = useRef(0);
    let isGiveUp = useRef(false);
    let pickLetters = [];
    let arrCheck = [];
    let result = useRef("");
    const letters = props.list[id.id];

    // kiểm tra xem người chơi trả lời đủ 5 câu hỏi chưa
    // nếu đã trả lời đủ 5 thì chuyển qua page thông báo điểm
    if (id.id === props.list.length) {
        // console.log(id.id, id.score + 1);
        // console.log(count.current);
        const score = id.score;
        return (
            <Score
                score={score}
                isGiveUp={isGiveUp.current}
                count={count.current}
            />
        );
    }

    // handle disabled thẻ buttion khi người dùng click chọn
    // chữ cái
    const toggleActive = (index) => {
        del.current = [...del.current, index];
        // console.log(numActive.current);
        numActive.current[letters.length] = null;
        numActive.current[index] = index;
        setActiveIndex(numActive.current);
    };

    // hàm lấy chữ người dùng vừa chọn để hiện lên ô trống
    const checkResult = (v) => {
        if (word[v] !== undefined) {
            if (v === word[v].key) {
                if (pickLetters[v] === undefined) {
                    pickLetters.push(word[v].letter);
                }
                return pickLetters[v];
            }
        } else {
            return undefined;
        }
    };

    // hàm tính điểm khi người dùng chọn give up
    const giveUpResult = (index) => {
        return correct.current[index];
    };

    // hàm xử lý việc đưa ra kết quả chính xác khi người dùng chọn give up
    const handleGiveUp = () => {
        isGiveUp.current = true;
        if (count.current < 0) {
            count.current = 0;
        }
        arrCheck = props.check[id.id].toUpperCase().split("");
        for (let i = 0; i < arrCheck.length; i++) {
            correct.current.push(arrCheck[i]);
        }
        setGiveUp(true);
    };

    // Hàm xử lý kết quả sau khi người dùng bấm Next
    const handleNext = () => {
        numActive.current = [];
        setActiveIndex([]);
        correct.current = [];
        if (giveUp) {
            result.current = "Bạn không được điểm";
            pickLetters = [];
            setPopup(true);
        }
        if (word.length < letters.length && giveUp === false) {
            result.current = "Bạn chưa điền đủ chữ";
            setPopup(true);
        }
        if (word.length === letters.length) {
            const p = props.check[id.id].toUpperCase();
            const t = pickLetters.join("");
            if (p !== t) {
                // count.current -= 1;
                // console.log(id.score);
                // let value = id.score - 1;
                // if (value < 0) {
                //     value = 0;
                // }
                result.current = "Kết quả sai";
                setPopup(true);
                // setId({ id: id.id + 1, score: id.score });
                // setWord([]);
            }
            if (p === t) {
                if (props.list.length > id.id) {
                    result.current = "Kết quả đúng";
                    // count.current += 1;

                    setPopup(true);
                    //     setId({ id: id.id + 1, score: id.score + 1 });
                    //     setWord([]);
                }
            }
        }
    };

    // hàm xử lý việc người dùng chọn chữ cái
    const handleOnClick = (e) => {
        toggleActive(Number(e.target.id));
        const text = e.target.value;
        let key = word.length;
        if (word.length !== letters.length) {
            setWord([...word, { letter: text, key: key }]);
        }
    };

    //Hàm xử lý việc người dùng chọn xóa chữ cái vừa chọn
    const handleDel = () => {
        let length = del.current.length - 1;
        // console.log(del.current);
        // if (word.length !== letters.length) {
        // console.log(word.slice(0, word.length - 1));
        numActive.current[del.current[length]] = null;
        del.current = del.current.slice(0, length);
        // console.log(del.current);

        setActiveIndex(numActive.current);

        setWord(word.slice(0, word.length - 1));
        // }
    };

    // Hàm xử lý việc người dùng muốn xóa tất chữ cái đã chọn
    const handleDelAll = () => {
        numActive.current = [];
        setActiveIndex([]);
        setWord([]);
    };

    return (
        <Fragment>
            <Text>
                Ghép các từ thành chữ cái tiếng Anh chính xác dựa vào ảnh gợi ý
            </Text>
            <Popup
                trigger={popup}
                setTrigger={setPopup}
                setGiveUp={setGiveUp}
                setId={setId}
                setWord={setWord}
                id={id}
                word={word}
                letters={letters}
                length={props.list.length}
                pickLetters={pickLetters}
                result={props.check[id.id].toUpperCase()}
                count={count}
                giveUp={giveUp}
            >
                <p>{result.current}</p>
            </Popup>
            <Wrap>
                {letters.map((letter, id) => (
                    <Letter key={id}>
                        {giveUp ? giveUpResult(id) : checkResult(id)}
                    </Letter>
                ))}
            </Wrap>
            <Wrap>
                {letters.map((letter, id) => (
                    <Letter
                        disabled={activeIndex[id] === id}
                        key={id}
                        id={id}
                        name={activeIndex[numActive.current]}
                        value={letter}
                        onClick={handleOnClick}
                    >
                        {letter}
                    </Letter>
                ))}
            </Wrap>
            <Wrap>
                <img
                    src={props.selected[id.id].image}
                    alt="img"
                    style={{ height: "290px", objectFit: "cover" }}
                ></img>
            </Wrap>
            <Wrap>
                {giveUp ? (
                    <p></p>
                ) : (
                    <Fragment>
                        <Button onClick={handleDel}>Delete Letter</Button>
                        <Button onClick={handleDelAll}>Delete All</Button>
                        <Button onClick={handleGiveUp}>Give Up</Button>
                    </Fragment>
                )}
                <Button onClick={handleNext}>Next</Button>
            </Wrap>
        </Fragment>
    );
}

export default View;
