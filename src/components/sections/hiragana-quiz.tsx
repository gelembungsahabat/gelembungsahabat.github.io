import "./styles/hiragana-quiz.css";
import { hiraganaData } from "../../data/hiragana-data";
import { useState, type ChangeEvent } from "react";

function getRandomObjectEntries(obj: object, n: number) {
  const entries = Object.entries(obj);
  const shuffled = entries.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, n);
  return Object.fromEntries(selected);
}

const randomSubset = getRandomObjectEntries(hiraganaData, 15);

export function HiraganaQuiz() {
  const [myStyle, setMyStyle] = useState<{ [key: number]: boolean }>({});
  const toggleBackground = (id: number) => {
    setMyStyle((prevState: { [key: number]: boolean }) => ({
      ...myStyle,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="hiragana-quiz">
      <div>
        <h1>Random Hiragana (ひらがな) Quiz</h1>
      </div>
      <div className="hiragana-quiz-container">
        {Object.entries(randomSubset).map(([key, answer], index) => (
          <div
            className="hiragana-container"
            key={index}
            style={{
              backgroundColor: myStyle[`${index}`]
                ? "red"
                : "rgb(105, 105, 194)",
            }}
          >
            <p className="hiragana">{key}</p>
            <input
              type="text"
              onBlur={(e: ChangeEvent<HTMLInputElement>) => {
                const inputValue = e.target.value.toLowerCase();
                if (inputValue !== answer && myStyle[`${index}`] !== true) {
                  toggleBackground(index);
                }
                if (inputValue === answer && myStyle[`${index}`] === true) {
                  toggleBackground(index);
                }
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
