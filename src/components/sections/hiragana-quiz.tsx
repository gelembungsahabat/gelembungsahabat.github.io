import "./styles/hiragana-quiz.css";
import { hiraganaData } from "../../data/hiragana-data";

function getRandomObjectEntries(obj: object, n: number) {
  const entries = Object.entries(obj);
  const shuffled = entries.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, n);
  return Object.fromEntries(selected);
}

const randomSubset = getRandomObjectEntries(hiraganaData, 16);

export function FunThings() {
  return (
    <section className="hiragana-quiz">
      <div>
        <h1>Random Hiragana (ひらがな) Quiz</h1>
      </div>
      <div className="hiragana-quiz-container">
        {Object.entries(randomSubset).map(([key]) => (
          <div className="hiragana-container" tabIndex={0}>
            <h1 className="hiragana">{key}</h1>
            <input type="text" />
          </div>
        ))}
      </div>
    </section>
  );
}
