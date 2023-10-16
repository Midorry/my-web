import { Link, List, Text, TextSize, Wrap } from "./styleHome";

function Home(props) {
    return (
        <Wrap>
            <Text>
                <List>
                    <TextSize>Luật chơi</TextSize>
                    <ul>
                        <li>
                            Ở mỗi lượt chơi, bạn có 5 câu hỏi tương ứng với 5
                            chữ cái tiếng Anh cần phát hiện.
                        </li>
                        <li>
                            Mỗi câu hỏi sẽ có 1 bức tranh miêu tả chữ cái cần
                            giải làm gợi ý.
                        </li>
                        <li>
                            Trong mỗi lượt chơi, bạn có 3 lần chọn chơi lại khi
                            bạn trả lời sai.
                        </li>
                        <li>
                            Với mỗi câu hỏi bạn có thể chọn bỏ cuộc nếu bạn
                            không thể đưa ra đáp án, nhưng bạn sẽ không được
                            điểm khi chọn bỏ qua.
                        </li>
                        <li>
                            Mỗi câu trả lời đúng bạn được 1 điểm, trả lời sai
                            không có điểm, số điểm cao nhất là 5 và thấp nhất là
                            0.
                        </li>
                    </ul>
                </List>
            </Text>
            <Link href="/play">Play Game</Link>
        </Wrap>
    );
}

export default Home;
