import { Routes, Route } from "react-router-dom";
// import ReactAudioPlayer from "react-audio-player";
import View from "./View";
import { Audio, Wrap } from "./styleApp";
import Home from "./Home";

function App() {
    const list = [
        {
            id: 0,
            word: "bird",
            image: "./bird.jpg",
        },
        {
            id: 1,
            word: "train",
            image: "./train.jpg",
        },
        {
            id: 2,
            word: "sun",
            image: "./sun.jpg",
        },
        {
            id: 3,
            word: "moon",
            image: "./moon.jpg",
        },
        {
            id: 4,
            word: "duck",
            image: "./duck.jpg",
        },
        {
            id: 5,
            word: "earth",
            image: "./earth.jpg",
        },
        {
            id: 6,
            word: "sea",
            image: "./sea.jpg",
        },
        {
            id: 7,
            word: "sky",
            image: "./sky.jpg",
        },
        {
            id: 8,
            word: "plane",
            image: "./plane.jpg",
        },
        {
            id: 9,
            word: "car",
            image: "./car.jpg",
        },
        {
            id: 10,
            word: "motorbike",
            image: "./motorbike.jpg",
        },
    ];

    // Shuffle array
    const shuffled = list.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let arrLetters = [];
    let check = [];
    let selected = shuffled.slice(0, 5);

    for (let k = 0; k < selected.length; k++) {
        check[k] = selected[k].word;
    }
    for (let j = 0; j < selected.length; j++) {
        arrLetters[j] = selected[j].word
            .toUpperCase()
            .split("")
            .map((x) => ({ x, r: Math.random() }))
            .sort((a, b) => a.r - b.r)
            .map((a) => a.x);
        // .slice(0, n);;
    }
    return (
        <div className="App">
            <Audio autoPlay controls loop preload="true">
                <source src="./song.mp3" type="audio/mpeg"></source>
            </Audio>
            <Wrap>Game đố chữ</Wrap>

            <Routes>
                <Route
                    path="/"
                    element={
                        <Wrap>
                            <Home></Home>
                        </Wrap>
                    }
                ></Route>
                <Route
                    path="/play"
                    element={
                        <View
                            list={arrLetters}
                            check={check}
                            selected={selected}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
